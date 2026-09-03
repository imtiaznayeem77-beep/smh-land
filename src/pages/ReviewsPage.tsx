import { motion } from 'framer-motion';
import { Star, Quote, Instagram } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ReviewsSection } from '@/components/ReviewsSection';
import { REVIEWS, REVIEWS_FAQS, BUSINESS } from '@/data/site-data';

export function ReviewsPage() {
  return (
    <>
      <SEO
        title="Reviews | SMH Landscape Customer Feedback"
        description="Read reviews from SMH Landscape customers in Nevada. See what homeowners say about our irrigation repair, maintenance, palm trimming, and landscaping services."
        path="/reviews"
        image="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: { '@type': 'LocalBusiness', name: 'SMH Landscape' },
        }}
      />
      <PageHero
        title="Customer Reviews"
        subtitle="Feedback from Nevada homeowners who trusted SMH Landscape with their yard care, irrigation repair, and landscaping projects."
        image="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Reviews' }]}
      />

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow mb-4">Customer Feedback</span>
            <h2 className="section-heading">What Customers Say</h2>
            <p className="mt-4 text-charcoal-600">Real reviews from homeowners who have worked with SMH Landscape. As a growing business, we continue to build our review collection with every project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex flex-col rounded-2xl border border-charcoal-200/50 bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-forest-500 text-forest-500" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-forest-400/20 mb-3" />
                <p className="text-sm text-charcoal-700 leading-relaxed flex-1">{review.text}</p>
                <div className="mt-5 pt-4 border-t border-charcoal-100">
                  <p className="text-sm font-semibold text-charcoal-900">{review.name}</p>
                  <p className="text-xs text-charcoal-500">{review.location} · {review.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-forest p-10 lg:p-16 text-center">
            <div className="relative z-10 max-w-xl mx-auto">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h2 className="section-heading-light">Follow SMH Landscape on Instagram</h2>
              <p className="mt-4 text-white/70">See more of our latest work, project updates, and behind-the-scenes content on our Instagram.</p>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-light"
              >
                <Instagram className="h-4 w-4" />
                {BUSINESS.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="section-heading">Reviews FAQ</h2>
              <p className="mt-4 text-charcoal-600">Common questions about reviews and feedback.</p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={REVIEWS_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Become Our Next Happy Customer?"
        subtitle="Request a free estimate and experience the professional service our customers are talking about."
      />
    </>
  );
}
