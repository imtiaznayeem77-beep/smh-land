import { SEO } from '@/components/SEO';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { CLEANUP_FAQS, REVIEWS, PROJECTS } from '@/data/site-data';

const heroImage = 'https://images.pexels.com/photos/12596112/pexels-photo-12596112.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';

export function YardCleanupPage() {
  return (
    <>
      <SEO
        title="Yard Cleanup & Palm Trimming in Nevada | SMH Landscape"
        description="Professional yard cleanup, palm trimming, and sago palm care in Nevada. One-time, biweekly, and monthly cleanup services to keep your yard tidy and well-maintained."
        path="/services/yard-cleanup"
        image={heroImage}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Yard Cleanup & Trimming',
          provider: { '@type': 'LocalBusiness', name: 'SMH Landscape' },
          areaServed: 'Nevada',
        }}
      />
      <ServicePageLayout
        heroImage={heroImage}
        breadcrumbLabel="Yard Cleanup & Trimming"
        heroTitle="Professional Yard Cleanup & Trimming"
        heroSubtitle="Palm trimming, sago palm care, and thorough yard cleanups — available as one-time, biweekly, or monthly service to keep your Nevada yard tidy and healthy."
        introHeading="Keep Your Yard Clean and Tidy"
        introBody={[
          'Yard cleanups are one of the most effective ways to refresh the appearance of your landscape. Whether you need palm trimming, sago palm care, or a general yard cleanup, SMH Landscape can help.',
          'Our cleanup services include palm trimming, sago palm care, debris removal, and light yard maintenance. We offer one-time, biweekly, and monthly options so you can choose the frequency that works for your yard.',
          'Regular trimming keeps your palms and plants healthy, while periodic cleanups prevent debris from building up and keep your landscape looking its best year-round.',
        ]}
        benefits={[
          { title: 'Palm Trimming', description: 'Professional palm trimming to keep your trees healthy and looking their best.' },
          { title: 'Sago Palm Care', description: 'Specialized care and trimming for sago palms on your property.' },
          { title: 'Yard Cleanups', description: 'Debris removal, leaf clearing, and general yard tidying.' },
          { title: 'One-Time Service', description: 'A single cleanup visit for a quick refresh before an event or season change.' },
          { title: 'Recurring Options', description: 'Biweekly or monthly cleanups to keep your yard consistently tidy.' },
        ]}
        relatedProject={PROJECTS[2]}
        faqs={CLEANUP_FAQS}
        reviews={REVIEWS.slice(4, 8)}
        ctaTitle="Need a Yard Cleanup?"
        ctaSubtitle="Whether it's palm trimming or a full yard cleanup, we can help. Request a free estimate today."
        ctaImage={heroImage}
      />
    </>
  );
}
