import { SEO } from '@/components/SEO';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { SEASONAL_FAQS, REVIEWS, PROJECTS } from '@/data/site-data';

const heroImage = 'https://images.pexels.com/photos/13832876/pexels-photo-13832876.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';

export function SeasonalLandscapingPage() {
  return (
    <>
      <SEO
        title="Seasonal Landscaping in Nevada | SMH Landscape"
        description="Seasonal landscaping solutions for Nevada yards. Prepare your landscape for changing conditions with professional seasonal yard care from SMH Landscape."
        path="/services/seasonal-landscaping"
        image={heroImage}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Seasonal Landscaping',
          provider: { '@type': 'LocalBusiness', name: 'SMH Landscape' },
          areaServed: 'Nevada',
        }}
      />
      <ServicePageLayout
        heroImage={heroImage}
        breadcrumbLabel="Seasonal Landscaping"
        heroTitle="Seasonal Landscaping Solutions for Nevada Yards"
        heroSubtitle="Keep your landscape attractive through every season. Seasonal yard care helps your plants, beds, and outdoor space stay healthy as conditions change throughout the year."
        introHeading="Year-Round Landscape Care"
        introBody={[
          'Nevada landscapes face different challenges throughout the year. Seasonal landscaping services help your yard adapt and stay attractive no matter what the weather brings.',
          'SMH Landscape offers seasonal yard care that addresses the specific needs of your landscape at different times of the year. From seasonal cleanups to plant care and yard adjustments, we help keep your outdoor space looking its best in every season.',
          'Seasonal services can be scheduled as one-time visits or incorporated into your recurring maintenance plan for consistent, year-round care.',
        ]}
        benefits={[
          { title: 'Seasonal Cleanups', description: 'Clear debris and refresh your landscape as the seasons change.' },
          { title: 'Plant Care', description: 'Seasonal trimming, pruning, and care to keep plants healthy year-round.' },
          { title: 'Yard Adjustments', description: 'Update your landscape to match seasonal conditions and needs.' },
          { title: 'Flexible Scheduling', description: 'Schedule seasonal services at key transition points throughout the year.' },
          { title: 'Maintenance Integration', description: 'Seasonal care can complement your regular maintenance plan.' },
        ]}
        relatedProject={PROJECTS[3]}
        faqs={SEASONAL_FAQS}
        reviews={REVIEWS.slice(4, 8)}
        ctaTitle="Prepare Your Yard for the Season Ahead"
        ctaSubtitle="Seasonal landscaping keeps your yard looking great all year. Request a free estimate to get started."
        ctaImage={heroImage}
      />
    </>
  );
}
