import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { ProcessSection } from '@/components/ProcessSection';
import { Review, ProjectData } from '@/data/site-data';

interface ServicePageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  path: string;
  heroImage: string;
  breadcrumbLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  introHeading: string;
  introBody: string[];
  benefits: { title: string; description: string }[];
  relatedProject?: ProjectData;
  faqs: { q: string; a: string }[];
  reviews: Review[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaImage?: string;
  extraSection?: React.ReactNode;
}

export function ServicePageLayout({
  title, metaTitle, metaDescription, path, heroImage, breadcrumbLabel,
  heroTitle, heroSubtitle, introHeading, introBody, benefits,
  relatedProject, faqs, reviews, ctaTitle, ctaSubtitle, ctaImage, extraSection,
}: ServicePageLayoutProps) {
  return (
    <>
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        image={heroImage}
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: breadcrumbLabel }]}
        ctaLabel="Get a Free Estimate"
        ctaTo="/contact"
      />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">{breadcrumbLabel}</span>
            <h2 className="section-heading">{introHeading}</h2>
            {introBody.map((p, i) => (
              <p key={i} className="mt-5 text-charcoal-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img src={heroImage} alt={breadcrumbLabel} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow-light mb-4">Benefits</span>
              <h2 className="section-heading-light">What This Service Includes</h2>
              <div className="mt-8 space-y-5">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-500/20">
                      <Check className="h-4 w-4 text-forest-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-white/50 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {extraSection}

      {/* Related Project */}
      {relatedProject && (
        <section className="py-20 lg:py-28 bg-natural-light">
          <div className="container-page">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow mb-4">Real Project</span>
              <h2 className="section-heading">Related Work</h2>
              <p className="mt-4 text-charcoal-600">See actual SMH Landscape work related to this service.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <BeforeAfterSlider before={relatedProject.before} after={relatedProject.after} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-charcoal-900">{relatedProject.title}</h3>
                <p className="mt-4 text-charcoal-600 leading-relaxed">{relatedProject.description}</p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-600 mb-3">Services Performed</p>
                  <div className="flex flex-wrap gap-2">
                    {relatedProject.services.map((s, i) => (
                      <span key={i} className="rounded-full border border-charcoal-200 bg-white px-3 py-1.5 text-xs text-charcoal-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/gallery" className="mt-8 btn-outline-light">
                  View Full Gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <ProcessSection />
      <ReviewsSection reviews={reviews} />
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="section-heading">{breadcrumbLabel} FAQ</h2>
              <p className="mt-4 text-charcoal-600">Common questions about this service.</p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
      <CTASection title={ctaTitle} subtitle={ctaSubtitle} image={ctaImage} />
    </>
  );
}
