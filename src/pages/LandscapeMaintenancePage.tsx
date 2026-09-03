import { SEO } from '@/components/SEO';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { MAINTENANCE_FAQS, REVIEWS, PROJECTS } from '@/data/site-data';

const heroImage = 'https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';

export function LandscapeMaintenancePage() {
  return (
    <>
      <SEO
        title="Landscape Maintenance in Nevada | SMH Landscape"
        description="Professional landscape maintenance services in Nevada. Monthly, biweekly, and one-time maintenance options to keep your yard clean, healthy, and looking its best."
        path="/services/landscape-maintenance"
        image={heroImage}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Landscape Maintenance',
          provider: { '@type': 'LocalBusiness', name: 'SMH Landscape' },
          areaServed: 'Nevada',
        }}
      />
      <ServicePageLayout
        heroImage={heroImage}
        breadcrumbLabel="Landscape Maintenance"
        heroTitle="Keep Your Landscape Looking Its Best"
        heroSubtitle="Regular maintenance keeps your yard healthy, clean, and attractive. Choose from monthly, biweekly, or one-time service options that fit your needs."
        introHeading="Flexible Maintenance for Every Yard"
        introBody={[
          'Consistent maintenance is the key to a landscape that always looks its best. Whether you need regular upkeep or a one-time refresh, SMH Landscape offers flexible maintenance options to fit your yard and your schedule.',
          'Our maintenance services include lawn and yard upkeep, trimming, cleanup, and general landscape care. We work with Nevada homeowners to keep their outdoor spaces looking clean and well-maintained throughout the year.',
          'Choose the schedule that works for you — monthly, biweekly, or one-time service. We can also adjust your maintenance plan as your landscape\'s needs change with the seasons.',
        ]}
        benefits={[
          { title: 'Monthly Service', description: 'Regular monthly visits keep your yard consistently maintained without frequent interruptions.' },
          { title: 'Biweekly Service', description: 'Every two weeks is a popular option for yards that need regular upkeep.' },
          { title: 'One-Time Service', description: 'Need a single visit? One-time maintenance is available for a quick refresh.' },
          { title: 'Trimming & Pruning', description: 'Keep plants, shrubs, and trees healthy with regular trimming.' },
          { title: 'Yard Cleanup', description: 'Leaves, debris, and clutter removed to keep your yard looking tidy.' },
        ]}
        relatedProject={PROJECTS[3]}
        faqs={MAINTENANCE_FAQS}
        reviews={REVIEWS.slice(0, 4)}
        ctaTitle="Ready for a Better-Maintained Yard?"
        ctaSubtitle="Choose the maintenance schedule that fits your yard. Request a free estimate today."
        ctaImage={heroImage}
      />
    </>
  );
}
