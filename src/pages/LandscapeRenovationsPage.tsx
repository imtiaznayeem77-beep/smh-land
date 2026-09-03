import { SEO } from '@/components/SEO';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { RENOVATION_FAQS, REVIEWS, PROJECTS } from '@/data/site-data';

const heroImage = 'https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';

export function LandscapeRenovationsPage() {
  return (
    <>
      <SEO
        title="Landscape Renovations in Nevada | SMH Landscape"
        description="Professional landscape renovation services in Nevada. Refresh your outdoor space with decorative rock, low-maintenance shrubs, concrete curbing, and clean finishes."
        path="/services/landscape-renovations"
        image={heroImage}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Landscape Renovations',
          provider: { '@type': 'LocalBusiness', name: 'SMH Landscape' },
          areaServed: 'Nevada',
        }}
      />
      <ServicePageLayout
        heroImage={heroImage}
        breadcrumbLabel="Landscape Renovations"
        heroTitle="Refresh Your Outdoor Space"
        heroSubtitle="A landscape renovation can completely transform the look and feel of your yard. From decorative rock to low-maintenance shrubs, we help Nevada homeowners reimagine their outdoor spaces."
        introHeading="Transform Your Yard"
        introBody={[
          'Sometimes your landscape needs more than maintenance — it needs a refresh. SMH Landscape offers renovation services that can update and improve the appearance of your entire yard.',
          'Our renovation work includes low-maintenance shrubs, decorative rock, concrete curbing, stucco wall refreshes, and clean new finishes. We focus on practical, Nevada-appropriate landscaping that looks great and is easy to maintain.',
          'Whether you want to update a small area or refresh your entire front yard, we can help plan and complete a renovation that fits your property and your style.',
        ]}
        benefits={[
          { title: 'Low-Maintenance Shrubs', description: 'Choose plants that look great and require less upkeep in Nevada\'s climate.' },
          { title: 'Decorative Rock', description: 'A practical, attractive alternative that suits desert-friendly landscapes.' },
          { title: 'Concrete Curbing', description: 'Clean, defined edges that give your landscape a polished, finished look.' },
          { title: 'Stucco Refresh', description: 'Update walls and borders with a fresh coat for a clean, new appearance.' },
          { title: 'Complete Transformation', description: 'From small updates to full yard renovations, we handle the entire process.' },
        ]}
        relatedProject={PROJECTS[0]}
        faqs={RENOVATION_FAQS}
        reviews={REVIEWS.slice(0, 4)}
        ctaTitle="Ready to Refresh Your Landscape?"
        ctaSubtitle="A renovation can completely change how you feel about your yard. Request a free estimate to explore the possibilities."
        ctaImage={heroImage}
      />
    </>
  );
}
