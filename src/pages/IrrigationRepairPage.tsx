import { SEO } from '@/components/SEO';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { IRRIGATION_FAQS, REVIEWS, PROJECTS } from '@/data/site-data';

const heroImage = 'https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';

export function IrrigationRepairPage() {
  return (
    <>
      <SEO
        title="Irrigation Repair in Nevada | SMH Landscape"
        description="Professional irrigation repair services for Nevada landscapes. Troubleshooting, sprinkler repair, and irrigation system maintenance to keep your yard properly watered."
        path="/services/irrigation-repair"
        image={heroImage}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Irrigation Repair',
          provider: { '@type': 'LocalBusiness', name: 'SMH Landscape' },
          areaServed: 'Nevada',
        }}
      />
      <ServicePageLayout
        heroImage={heroImage}
        breadcrumbLabel="Irrigation Repair"
        heroTitle="Irrigation Repair for Nevada Landscapes"
        heroSubtitle="A properly functioning irrigation system is essential for keeping your Nevada landscape healthy. We can help troubleshoot and repair irrigation issues to keep your yard properly watered."
        introHeading="Keep Your Irrigation System Working Efficiently"
        introBody={[
          'In Nevada\'s dry climate, your irrigation system is one of the most important parts of your landscape. When something isn\'t working right, it can quickly lead to dry patches, wasted water, or unhealthy plants.',
          'SMH Landscape offers irrigation repair services to help identify and address issues with your system. Whether it\'s a broken sprinkler head, a leak, uneven coverage, or an adjustment that needs to be made, we can help get things working properly again.',
          'Irrigation repair can also be incorporated into your regular maintenance plan, so issues are caught early before they cause damage to your landscape.',
        ]}
        benefits={[
          { title: 'Troubleshooting', description: 'We identify the source of irrigation issues and recommend the right fix.' },
          { title: 'Sprinkler Repair', description: 'Broken or malfunctioning sprinkler heads can be replaced or adjusted.' },
          { title: 'Leak Detection', description: 'Leaks waste water and can damage your landscape. We help locate and address them.' },
          { title: 'System Adjustments', description: 'Uneven coverage or overspray can be corrected to improve efficiency.' },
          { title: 'Maintenance Integration', description: 'Irrigation checks can be part of your recurring maintenance visits.' },
        ]}
        relatedProject={PROJECTS[1]}
        faqs={IRRIGATION_FAQS}
        reviews={REVIEWS.slice(0, 4)}
        ctaTitle="Having Irrigation Issues?"
        ctaSubtitle="Don\'t let a small irrigation problem turn into a bigger one. Request a free estimate and we\'ll help get your system working properly."
        ctaImage={heroImage}
      />
    </>
  );
}
