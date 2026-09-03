import { SEO } from '@/components/SEO';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FERTILIZATION_FAQS, REVIEWS, PROJECTS } from '@/data/site-data';

const heroImage = 'https://images.pexels.com/photos/216582/pexels-photo-216582.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';

export function FertilizationPage() {
  return (
    <>
      <SEO
        title="Professional Fertilization in Nevada | SMH Landscape"
        description="Professional fertilization services for healthier Nevada landscapes. Support strong plant growth and lawn health with proper fertilization from SMH Landscape."
        path="/services/fertilization"
        image={heroImage}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Fertilization',
          provider: { '@type': 'LocalBusiness', name: 'SMH Landscape' },
          areaServed: 'Nevada',
        }}
      />
      <ServicePageLayout
        heroImage={heroImage}
        breadcrumbLabel="Fertilization"
        heroTitle="Professional Fertilization for Healthier Landscapes"
        heroSubtitle="Proper fertilization supports healthier plants, stronger roots, and a more vibrant landscape. We help Nevada homeowners keep their yards nourished throughout the year."
        introHeading="Support Your Landscape\'s Health"
        introBody={[
          'Fertilization is an important part of keeping your landscape healthy. The right nutrients help plants grow stronger, resist stress, and maintain their appearance throughout the seasons.',
          'SMH Landscape offers professional fertilization services tailored to your landscape\'s needs. We take into account your plant types, soil conditions, and the Nevada climate to provide appropriate care.',
          'Fertilization can be a one-time service or incorporated into your recurring maintenance plan for consistent landscape health throughout the year.',
        ]}
        benefits={[
          { title: 'Healthier Plants', description: 'Proper nutrients support stronger root systems and more resilient plants.' },
          { title: 'Improved Appearance', description: 'Well-fertilized landscapes look fuller, greener, and more vibrant.' },
          { title: 'Seasonal Support', description: 'Fertilization at the right times helps your landscape through seasonal changes.' },
          { title: 'Customized Approach', description: 'We consider your specific plants, soil, and climate conditions.' },
          { title: 'Maintenance Integration', description: 'Fertilization can be added to your regular maintenance schedule.' },
        ]}
        relatedProject={PROJECTS[0]}
        faqs={FERTILIZATION_FAQS}
        reviews={REVIEWS.slice(4, 8)}
        ctaTitle="Want a Healthier Landscape?"
        ctaSubtitle="Professional fertilization can make a noticeable difference. Request a free estimate to learn more."
        ctaImage={heroImage}
      />
    </>
  );
}
