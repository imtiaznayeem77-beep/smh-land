import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Sprout, ClipboardCheck, CalendarDays, Hammer, Scissors, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SERVICES, REVIEWS, SERVICES_FAQS } from '@/data/site-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, Sprout, ClipboardCheck, CalendarDays, Hammer, Scissors,
};

const benefits = [
  'One-time, biweekly, or monthly service options',
  'Irrigation repair and troubleshooting',
  'Professional palm and sago palm trimming',
  'Seasonal yard care and cleanups',
  'Landscape renovations with decorative rock and shrubs',
  'Reliable, detail-oriented service',
];

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Landscaping Services in Nevada | SMH Landscape"
        description="Explore professional landscaping services from SMH Landscape: irrigation repair, fertilization, landscape maintenance, seasonal landscaping, renovations, and yard cleanup in Nevada."
        path="/services"
        image="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'SMH Landscape Services',
          itemListElement: SERVICES.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.label,
            url: `https://smhlandscape.com${s.path}`,
          })),
        }}
      />
      <PageHero
        title="Landscaping Services Designed Around Your Outdoor Space"
        subtitle="From irrigation repair to landscape renovations, SMH Landscape offers the services Nevada homeowners need to keep their yards healthy, clean, and looking their best."
        image="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
        ctaLabel="Get a Free Estimate"
        ctaTo="/contact"
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Droplets;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="group relative block overflow-hidden rounded-2xl border border-charcoal-200/50 bg-white shadow-card transition-all duration-500 hover:shadow-card-hover"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.label}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-forest-500/90 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-forest-600 transition-colors">{service.label}</h3>
                      <p className="mt-3 text-sm text-charcoal-600 leading-relaxed">{service.description}</p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-forest-600">
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

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src="https://images.pexels.com/photos/16787453/pexels-photo-16787453.png?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Contemporary Nevada garden with succulents and desert landscaping"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow-light mb-4">Why Choose SMH Landscape</span>
              <h2 className="section-heading-light">Flexible, Professional Service</h2>
              <p className="mt-4 text-white/60">Whether you need a one-time cleanup or ongoing maintenance, we offer flexible options to fit your yard and your schedule.</p>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-500/20">
                      <Check className="h-3.5 w-3.5 text-forest-400" />
                    </div>
                    <p className="text-sm text-white/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ReviewsSection reviews={REVIEWS.slice(0, 4)} title="Service Reviews" />

      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="section-heading">Services FAQ</h2>
              <p className="mt-4 text-charcoal-600">Common questions about our landscaping services.</p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={SERVICES_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Tell us what your yard needs and we'll help you explore the right landscaping solution."
      />
    </>
  );
}
