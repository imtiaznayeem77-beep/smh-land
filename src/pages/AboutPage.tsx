import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Instagram, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ABOUT_FAQS, REVIEWS, BUSINESS, SERVICES } from '@/data/site-data';

const values = [
  { title: 'Professional', description: 'Every job is handled with care, precision, and respect for your property.' },
  { title: 'Reliable', description: 'We show up when we say we will and complete the work we commit to.' },
  { title: 'Detail-Oriented', description: 'Clean edges, tidy finishes, and thorough cleanup — the small things matter.' },
  { title: 'Local', description: 'We understand Nevada landscapes and the specific care they require.' },
];

const servicesList = [
  'Irrigation Repair',
  'Fertilization',
  'Landscape Maintenance',
  'Seasonal Landscaping',
  'Landscape Renovations',
  'Yard Cleanup & Trimming',
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About SMH Landscape | Salvador Madrigal | Nevada Landscaping"
        description="Learn about SMH Landscape, a professional landscaping company serving Nevada. Owned by Salvador Madrigal, offering irrigation repair, maintenance, fertilization, and landscape renovations."
        path="/about"
        image="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About SMH Landscape',
          description: 'Learn about SMH Landscape and owner Salvador Madrigal.',
        }}
      />
      <PageHero
        title="About SMH Landscape"
        subtitle="Professional landscaping and gardening services for Nevada homeowners, led by Salvador Madrigal."
        image="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow mb-4">Our Story</span>
              <h2 className="section-heading">Professional Landscaping, Done Right</h2>
              <div className="mt-5 space-y-4 text-charcoal-600 leading-relaxed">
                <p>SMH Landscape is a Nevada-based landscaping and gardening company providing professional yard care, irrigation repair, and landscape renovation services to homeowners throughout the region.</p>
                <p>Owned and operated by Salvador Madrigal, SMH Landscape focuses on practical, reliable service. From routine maintenance to complete landscape refreshes, the goal is simple: leave every yard cleaner, healthier, and better maintained than we found it.</p>
                <p>We understand Nevada landscapes. The dry climate, desert-friendly plants, and irrigation needs require specific knowledge and care. That is what we bring to every job.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/services" className="btn-primary">Explore Services <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/gallery" className="btn-outline-light">View Our Work</Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src="https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Nevada residential landscape with desert-friendly plants"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-5 -left-5 hidden lg:block">
                <div className="rounded-2xl bg-white p-5 shadow-premium">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-forest-500" />
                    <div>
                      <p className="text-sm font-bold text-charcoal-900">Nevada</p>
                      <p className="text-xs text-charcoal-500">Service Area</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src="https://images.pexels.com/photos/4920293/pexels-photo-4920293.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
                  alt="Professional landscaping work in progress"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <span className="eyebrow-light mb-4">Meet the Owner</span>
              <h2 className="section-heading-light">Salvador Madrigal</h2>
              <p className="mt-2 text-lg text-forest-400 font-semibold">Owner / Landscaping Professional</p>
              <div className="mt-5 space-y-4 text-white/60 leading-relaxed">
                <p>Salvador Madrigal founded SMH Landscape with a commitment to providing Nevada homeowners with reliable, professional yard care. He works hands-on with every project, from irrigation troubleshooting to full landscape renovations.</p>
                <p>His approach is straightforward: understand what the customer needs, plan the right solution, and complete the work with attention to detail. No unnecessary services, no cut corners — just honest, professional landscaping work.</p>
              </div>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-forest-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                {BUSINESS.instagram}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-4">What We Value</span>
            <h2 className="section-heading">Our Approach to Yard Care</h2>
            <p className="mt-4 text-charcoal-600">The principles that guide every project we take on.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-charcoal-200/50 bg-white p-7 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-500/10 mb-4">
                  <Check className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900">{value.title}</h3>
                <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow-light mb-4">What We Do</span>
            <h2 className="section-heading-light">Services We Offer</h2>
            <p className="mt-4 text-white/60">A full range of landscaping and yard care services for Nevada homeowners.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-charcoal-900 p-5 transition-all hover:border-forest-500/30 hover:bg-charcoal-800"
              >
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-forest-400 transition-colors">{service.label}</h3>
                  <p className="text-xs text-white/40 mt-1 line-clamp-1">{service.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-forest-400 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection reviews={REVIEWS.slice(0, 4)} />

      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="section-heading">About SMH Landscape</h2>
              <p className="mt-4 text-charcoal-600">Common questions about our company and services.</p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={ABOUT_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Talk About Your Landscaping Needs"
        subtitle="Whether you need irrigation repair, ongoing maintenance, or a full landscape renovation, we're here to help."
        image="https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
      />
    </>
  );
}
