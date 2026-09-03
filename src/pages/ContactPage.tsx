import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Instagram, MapPin, Check, Send, AlertCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ReviewsSection } from '@/components/ReviewsSection';
import { CONTACT_FAQS, REVIEWS, BUSINESS, SERVICES } from '@/data/site-data';

const FORMSUBMIT_EMAIL = BUSINESS.formSubmitEmail;

export function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name) newErrors.name = 'Please enter your full name.';
    if (!email) newErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address.';
    if (!message) newErrors.message = 'Please tell us what you need.';

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors = validate(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (FORMSUBMIT_EMAIL) {
      e.currentTarget.submit();
    } else {
      setSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title="Contact SMH Landscape | Request a Free Estimate in Nevada"
        description="Contact SMH Landscape for professional landscaping services in Nevada. Request a free estimate for irrigation repair, maintenance, yard cleanup, or landscape renovations."
        path="/contact"
        image="https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact SMH Landscape',
        }}
      />
      <PageHero
        title="Let's Improve Your Landscape"
        subtitle="Tell us what you need and we'll help you explore the right landscaping solution for your yard."
        image="https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <span className="eyebrow mb-4">Get in Touch</span>
              <h2 className="section-heading">Request a Free Estimate</h2>
              <p className="mt-4 text-charcoal-600 leading-relaxed">
                Fill out the form and we'll get back to you to discuss your landscaping needs. Whether it's irrigation repair, ongoing maintenance, or a full landscape renovation, we're here to help.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-charcoal-200/50 bg-white p-5 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-500/10">
                    <MapPin className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal-900">Service Area</p>
                    <p className="text-sm text-charcoal-500">{BUSINESS.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-charcoal-200/50 bg-white p-5 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-500/10">
                    <Instagram className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal-900">Instagram</p>
                    <a
                      href={BUSINESS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-charcoal-500 hover:text-forest-600 transition-colors"
                    >
                      {BUSINESS.instagram}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-forest-500/5 border border-forest-500/20 p-5">
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  No phone number or email listed yet? You can also reach us directly on Instagram at{' '}
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-forest-600 hover:underline"
                  >
                    {BUSINESS.instagram}
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-forest-500/20 bg-white p-12 text-center shadow-card min-h-[400px]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-500/10 mb-6">
                    <Check className="h-8 w-8 text-forest-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900">Thanks! Your request has been received.</h3>
                  <p className="mt-3 text-charcoal-600 max-w-md">
                    SMH Landscape will get back to you shortly. For urgent requests, feel free to reach out on Instagram at {BUSINESS.instagram}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 btn-outline-light"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form
                  action={FORMSUBMIT_EMAIL ? `https://formsubmit.co/${FORMSUBMIT_EMAIL}` : undefined}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-charcoal-200/50 bg-white p-7 lg:p-8 shadow-card"
                  noValidate
                >
                  {/* FormSubmit configuration */}
                  {FORMSUBMIT_EMAIL && <input type="hidden" name="_subject" value="New SMH Landscape Website Enquiry" />}
                  {FORMSUBMIT_EMAIL && <input type="hidden" name="_template" value="table" />}
                  {FORMSUBMIT_EMAIL && <input type="hidden" name="_captcha" value="true" />}

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-charcoal-900 mb-1.5">
                        Full Name <span className="text-forest-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 transition-colors focus:outline-2 focus:outline-forest-500 ${
                          errors.name ? 'border-red-400' : 'border-charcoal-200'
                        }`}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900 mb-1.5">
                          Email <span className="text-forest-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 transition-colors focus:outline-2 focus:outline-forest-500 ${
                            errors.email ? 'border-red-400' : 'border-charcoal-200'
                          }`}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-900 mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-xl border border-charcoal-200 px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 transition-colors focus:outline-2 focus:outline-forest-500"
                          placeholder="(Optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-charcoal-900 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-xl border border-charcoal-200 px-4 py-3 text-sm text-charcoal-900 transition-colors focus:outline-2 focus:outline-forest-500 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map(s => (
                          <option key={s.slug} value={s.label}>{s.label}</option>
                        ))}
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="frequency" className="block text-sm font-semibold text-charcoal-900 mb-1.5">
                        Preferred Service Frequency
                      </label>
                      <select
                        id="frequency"
                        name="frequency"
                        className="w-full rounded-xl border border-charcoal-200 px-4 py-3 text-sm text-charcoal-900 transition-colors focus:outline-2 focus:outline-forest-500 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>Select frequency</option>
                        <option value="One-Time">One-Time</option>
                        <option value="Biweekly">Biweekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-charcoal-900 mb-1.5">
                        Message <span className="text-forest-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 transition-colors focus:outline-2 focus:outline-forest-500 resize-y ${
                          errors.message ? 'border-red-400' : 'border-charcoal-200'
                        }`}
                        placeholder="Tell us about your yard and what you need..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4" />
                      Send Request
                    </button>

                    {!FORMSUBMIT_EMAIL && (
                      <p className="text-xs text-charcoal-400 text-center">
                        Note: The contact form recipient email will be configured once provided. Your request will still be acknowledged.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection reviews={REVIEWS.slice(0, 4)} title="What Customers Say" />

      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="section-heading">Contact FAQ</h2>
              <p className="mt-4 text-charcoal-600">Common questions about reaching out to SMH Landscape.</p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={CONTACT_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Fill out the form above or reach out on Instagram. We're ready to help with your landscaping needs."
      />
    </>
  );
}
