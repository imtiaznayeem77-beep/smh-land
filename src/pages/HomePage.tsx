import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Sprout, ClipboardCheck, CalendarDays, Hammer, Scissors, Check, MapPin, Star } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { TrustStrip } from '@/components/TrustStrip';
import { ProcessSection } from '@/components/ProcessSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { SERVICES, PROJECTS, GALLERY_IMAGES, REVIEWS, HOMEPAGE_FAQS, BUSINESS } from '@/data/site-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, Sprout, ClipboardCheck, CalendarDays, Hammer, Scissors,
};

const whyChoosePoints = [
  { title: 'Practical Landscaping Solutions', description: 'We focus on what works for your yard — no unnecessary upsells, just honest, effective service.' },
  { title: 'Professional Yard Care', description: 'Every job is handled with attention to detail, from irrigation repair to full landscape renovations.' },
  { title: 'Flexible Maintenance Options', description: 'Monthly, biweekly, or one-time service — choose the schedule that fits your yard and your life.' },
  { title: 'Irrigation Repair Expertise', description: 'Keeping your irrigation system working properly is essential in Nevada. We can help troubleshoot and repair.' },
  { title: 'Seasonal Landscaping Support', description: 'We help your landscape stay attractive through changing seasonal conditions all year long.' },
  { title: 'Clean Finished Results', description: 'We leave your property tidy and looking better than when we arrived. Clean work, every time.' },
];

export function HomePage() {
  const featuredProject = PROJECTS[0];
  const homeReviews = REVIEWS.slice(0, 6);

  return (
    <>
      <SEO
        title="SMH Landscape | Professional Landscaping & Garden Services in Nevada"
        description="Professional landscaping and gardening services in Nevada. Irrigation repair, fertilization, landscape maintenance, seasonal yard care, and landscape renovations by SMH Landscape."
        path="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'SMH Landscape',
          description: 'Professional landscaping and gardening services in Nevada.',
          areaServed: 'Nevada',
          founder: { '@type': 'Person', name: 'Salvador Madrigal' },
          sameAs: [BUSINESS.instagramUrl],
        }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Professional Nevada residential landscape with desert-friendly plants and palms"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-charcoal-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-charcoal-950/50 to-charcoal-950" />
        </div>
        <div className="relative container-page pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="eyebrow-light mb-5">
              <span className="h-px w-8 bg-forest-400" />
              Nevada Landscaping Services
            </span>
            <h1 className="font-display text-display-xl font-bold text-white text-balance text-shadow-lg">
              Professional Landscaping & Garden Services in Nevada
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
              Reliable landscaping solutions for cleaner, healthier, better-maintained outdoor spaces — from irrigation repair and fertilization to ongoing landscape maintenance and seasonal yard care.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/gallery" className="btn-secondary">
                Explore Our Work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              {['Irrigation Repair', 'Landscape Maintenance', 'Seasonal Yard Care'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                  <Check className="h-4 w-4 text-forest-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-950 to-transparent" />
      </section>

      <TrustStrip />

      {/* Services */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Our Services</span>
            <h2 className="section-heading-light">Landscaping Services Built Around Your Yard</h2>
            <p className="mt-4 text-white/60">From irrigation repair to landscape renovations, we offer the services Nevada homeowners need to keep their outdoor spaces healthy and looking their best.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Droplets;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={service.path}
                    className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-charcoal-900 transition-all duration-500 hover:border-forest-500/30 hover:shadow-premium"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.label}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                      <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-forest-500/90 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white group-hover:text-forest-400 transition-colors">{service.label}</h3>
                      <p className="mt-2 text-sm text-white/50 leading-relaxed">{service.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-forest-400">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2"
                  alt="Professional landscaper maintaining a Nevada residential landscape"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden lg:block">
                <div className="rounded-2xl bg-forest-500 p-6 shadow-premium max-w-[200px]">
                  <p className="font-display text-3xl font-bold text-white">6+</p>
                  <p className="mt-1 text-sm text-white/80">Professional landscaping services for Nevada homes</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow mb-4">Why SMH Landscape</span>
              <h2 className="section-heading">Professional Yard Care You Can Rely On</h2>
              <p className="mt-4 text-charcoal-600">SMH Landscape is built on practical, professional service. We focus on doing the job right, keeping your yard healthy, and making sure every visit leaves your property looking better.</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyChoosePoints.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-500/10">
                      <Check className="h-3.5 w-3.5 text-forest-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-charcoal-900">{point.title}</h3>
                      <p className="mt-1 text-xs text-charcoal-500 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-8 btn-outline-light">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Before/After Project */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow mb-4">Real Project</span>
            <h2 className="section-heading-light">See the Difference</h2>
            <p className="mt-4 text-white/60">Drag the slider to see the before and after of a real SMH Landscape renovation project.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BeforeAfterSlider
                before={featuredProject.before}
                after={featuredProject.after}
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white">{featuredProject.title}</h3>
              <p className="mt-4 text-white/60 leading-relaxed">{featuredProject.description}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-400 mb-3">Services Performed</p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.services.map((s, i) => (
                    <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/services/landscape-renovations" className="mt-8 btn-primary">
                View This Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="max-w-xl">
              <span className="eyebrow mb-4">Real Work</span>
              <h2 className="section-heading">Recent Projects</h2>
              <p className="mt-4 text-charcoal-600">Actual SMH Landscape projects from Nevada properties. Real before and after results.</p>
            </div>
            <Link to="/gallery" className="btn-outline-light shrink-0">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className={`relative ${i === 0 ? 'aspect-square lg:aspect-[4/5]' : 'aspect-square'} overflow-hidden`}>
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <p className="text-sm font-bold text-white">{img.title}</p>
                    <p className="text-xs text-white/70 mt-0.5">{img.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <ReviewsSection reviews={homeReviews} />

      {/* Areas Served */}
      <section className="py-20 lg:py-28 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/26937591/pexels-photo-26937591.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Nevada desert landscape near Las Vegas"
            className="h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal-950/70" />
        </div>
        <div className="relative container-page text-center">
          <span className="eyebrow-light mb-4 justify-center">Service Area</span>
          <h2 className="section-heading-light">Serving Customers in Nevada</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            SMH Landscape provides professional landscaping and yard care services to homeowners throughout Nevada. Contact us to confirm service availability in your area.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3">
            <MapPin className="h-5 w-5 text-forest-400" />
            <span className="text-sm font-semibold text-white">Nevada</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="eyebrow mb-4">Questions & Answers</span>
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="mt-4 text-charcoal-600">Have a question about our services? Here are some of the most common things homeowners ask us.</p>
              <Link to="/contact" className="mt-6 btn-outline-light">
                Ask a Question
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={HOMEPAGE_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
