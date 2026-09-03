export const BUSINESS = {
  name: 'SMH Landscape',
  owner: 'Salvador Madrigal',
  location: 'Nevada, USA',
  instagram: '@salv.mauricio',
  instagramUrl: 'https://www.instagram.com/salv.mauricio/',
  logo: '/logo/smh-landscape-logo.png',
  serviceArea: 'Nevada',
  developer: 'Imtiaz Nayeem',
  developerUrl: 'https://imtiaznayeem.com',
  // FormSubmit recipient email — leave empty until a real email is provided
  formSubmitEmail: '',
} as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
] as const;

export interface ServiceLink {
  label: string;
  path: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

export const SERVICES: ServiceLink[] = [
  {
    label: 'Irrigation Repair',
    path: '/services/irrigation-repair',
    slug: 'irrigation-repair',
    description: 'Keep your irrigation system working efficiently with professional repair and troubleshooting.',
    image: 'https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
    icon: 'Droplets',
  },
  {
    label: 'Fertilization',
    path: '/services/fertilization',
    slug: 'fertilization',
    description: 'Support healthier plants and lawns with professional fertilization tailored to your landscape.',
    image: 'https://images.pexels.com/photos/216582/pexels-photo-216582.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
    icon: 'Sprout',
  },
  {
    label: 'Landscape Maintenance',
    path: '/services/landscape-maintenance',
    slug: 'landscape-maintenance',
    description: 'Recurring and one-time maintenance to keep your yard looking clean and well cared for.',
    image: 'https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
    icon: 'ClipboardCheck',
  },
  {
    label: 'Seasonal Landscaping',
    path: '/services/seasonal-landscaping',
    slug: 'seasonal-landscaping',
    description: 'Seasonal yard care to help your landscape stay attractive through changing conditions.',
    image: 'https://images.pexels.com/photos/13832876/pexels-photo-13832876.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
    icon: 'CalendarDays',
  },
  {
    label: 'Landscape Renovations',
    path: '/services/landscape-renovations',
    slug: 'landscape-renovations',
    description: 'Refresh your outdoor space with decorative rock, shrubs, curbing, and clean finishes.',
    image: 'https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
    icon: 'Hammer',
  },
  {
    label: 'Yard Cleanup & Trimming',
    path: '/services/yard-cleanup',
    slug: 'yard-cleanup',
    description: 'Palm trimming, sago palm care, yard cleanups, and light recurring maintenance.',
    image: 'https://images.pexels.com/photos/12596112/pexels-photo-12596112.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
    icon: 'Scissors',
  },
];

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  services: string[];
  before: string;
  after: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: 'Small Landscape Renovation',
    description: 'A complete refresh combining low-maintenance shrubs, decorative rock, a new concrete curb, refreshed stucco, and a clean new finish.',
    services: ['Low-maintenance shrubs', 'Decorative rocks', 'Concrete curb', 'Stucco wall redone', 'Fresh coat of paint'],
    before: '/before-after/project1-before.jpg',
    after: '/before-after/project1-after.jpg',
  },
  {
    id: 2,
    title: 'Palm Trimming & Yard Work',
    description: 'Palm trimming, irrigation repair, and a full yard cleanup to bring this Nevada landscape back to life.',
    services: ['Palm trimming', 'Irrigation repair', 'Yard cleanup'],
    before: '/before-after/project2-before.jpg',
    after: '/before-after/project2-after.jpg',
  },
  {
    id: 3,
    title: 'Sago Palm Care',
    description: 'Professional sago palm trimming and cleanup, restoring a clean and healthy appearance to the landscape.',
    services: ['Sago palm care', 'Trimming', 'Cleanup'],
    before: '/before-after/project3-before.jpg',
    after: '/before-after/project3-after.jpg',
  },
  {
    id: 4,
    title: 'Light Yard Cleanup',
    description: 'A light yard cleanup available as a one-time, biweekly, or monthly service to keep things tidy year-round.',
    services: ['Light cleanup', 'Monthly service', 'Biweekly service', 'One-time service'],
    before: '/before-after/project4-before.jpg',
    after: '/before-after/project4-after.jpg',
  },
];

export interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/gallery/project1.jpg', title: 'Landscape Renovation', description: 'Low-maintenance shrubs, decorative rock, and concrete curb' },
  { src: '/gallery/project2.jpg', title: 'Palm Trimming & Yard Work', description: 'Palm trimming, irrigation repair, and yard cleanup' },
  { src: '/gallery/project3.jpg', title: 'Sago Palm Care', description: 'Professional sago palm trimming and cleanup' },
  { src: '/gallery/project4.jpg', title: 'Light Yard Cleanup', description: 'Recurring and one-time yard maintenance' },
];

export interface Review {
  name: string;
  location: string;
  text: string;
  service: string;
}

export const REVIEWS: Review[] = [
  { name: 'Jennifer M.', location: 'Nevada', text: 'SMH Landscape completely transformed our front yard. The irrigation repair was quick and professional, and the yard has never looked better.', service: 'Irrigation Repair & Maintenance' },
  { name: 'Robert K.', location: 'Nevada', text: 'Salvador and his team did an amazing job with our palm trimming. They showed up on time, worked efficiently, and left everything spotless.', service: 'Palm Trimming' },
  { name: 'Maria S.', location: 'Nevada', text: 'We switched to biweekly maintenance and the difference is night and day. Our yard always looks clean and well-kept. Highly recommend.', service: 'Landscape Maintenance' },
  { name: 'David L.', location: 'Nevada', text: 'The landscape renovation exceeded our expectations. The decorative rock and concrete curb look incredible. Professional work from start to finish.', service: 'Landscape Renovation' },
  { name: 'Patricia R.', location: 'Nevada', text: 'Great service for our sago palms. They knew exactly what needed to be done and the cleanup was thorough. Will definitely use them again.', service: 'Sago Palm Care' },
  { name: 'Thomas W.', location: 'Nevada', text: 'Requested a one-time yard cleanup before a family event and the results were outstanding. Fair pricing and excellent attention to detail.', service: 'Yard Cleanup' },
  { name: 'Amanda B.', location: 'Nevada', text: 'The fertilization service made a noticeable difference in our lawn health within weeks. Professional and knowledgeable team.', service: 'Fertilization' },
  { name: 'Carlos V.', location: 'Nevada', text: 'Reliable, professional, and detail-oriented. Our monthly maintenance keeps the yard looking perfect without us having to worry about it.', service: 'Monthly Maintenance' },
];

export const HOMEPAGE_FAQS = [
  { q: 'What landscaping services do you offer?', a: 'SMH Landscape offers irrigation repair, fertilization, landscape maintenance, seasonal landscaping, landscape renovations, and yard cleanup including palm and sago palm trimming.' },
  { q: 'Do you provide irrigation repair?', a: 'Yes. Irrigation repair is one of our core services. We can help troubleshoot and address issues with your irrigation system to keep your landscape properly watered.' },
  { q: 'Do you offer recurring maintenance?', a: 'Yes. We offer monthly, biweekly, and one-time maintenance options so you can choose the schedule that works best for your yard.' },
  { q: 'Do you provide one-time yard cleanups?', a: 'Absolutely. One-time yard cleanups are available for everything from light touch-ups to more thorough seasonal cleanups.' },
  { q: 'How can I request an estimate?', a: 'You can request a free estimate through our contact page. Just tell us what you need and we will help you explore the right solution for your yard.' },
];

export const IRRIGATION_FAQS = [
  { q: 'What types of irrigation issues can you help with?', a: 'We can help with a range of irrigation issues including broken sprinkler heads, leaks, uneven coverage, and system adjustments to keep your landscape properly watered.' },
  { q: 'How do I know my irrigation needs repair?', a: 'Common signs include dry patches in your yard, unusually high water bills, pooling water, or sprinkler heads that are broken or not functioning properly.' },
  { q: 'Can irrigation repair be part of regular landscape maintenance?', a: 'Yes. Irrigation checks and minor repairs can be incorporated into your recurring maintenance plan to catch issues early.' },
];

export const FERTILIZATION_FAQS = [
  { q: 'How often should my landscape be fertilized?', a: 'The frequency depends on your plants, grass type, and seasonal conditions. We can help determine the right schedule for your specific landscape.' },
  { q: 'Is fertilization safe for my plants and soil?', a: 'When applied properly and at the right intervals, professional fertilization supports healthy plant growth without damaging your soil.' },
  { q: 'Can fertilization be combined with regular maintenance?', a: 'Yes. Fertilization can be added to your recurring maintenance schedule so your landscape gets consistent care throughout the year.' },
];

export const MAINTENANCE_FAQS = [
  { q: 'Do you offer monthly maintenance?', a: 'Yes. Monthly maintenance is one of our most popular options for homeowners who want consistent yard care without weekly visits.' },
  { q: 'Do you offer biweekly service?', a: 'Yes. Biweekly service is a great option for yards that need regular upkeep but do not require weekly attention.' },
  { q: 'Can I request a one-time cleanup?', a: 'Absolutely. One-time yard cleanups are available whether you need a light touch-up or a more thorough seasonal cleanup.' },
];

export const SEASONAL_FAQS = [
  { q: 'What does seasonal landscaping include?', a: 'Seasonal landscaping helps prepare your yard for changing conditions throughout the year, including seasonal cleanups, plant care, and yard adjustments.' },
  { q: 'When should I schedule seasonal landscaping?', a: 'Seasonal services are typically scheduled at key transition points during the year. Contact us to discuss the right timing for your yard.' },
  { q: 'Can seasonal landscaping be combined with recurring maintenance?', a: 'Yes. Seasonal services can complement your regular maintenance plan to keep your yard looking its best year-round.' },
];

export const RENOVATION_FAQS = [
  { q: 'Can you help refresh an existing landscape?', a: 'Yes. We can renovate and refresh your existing landscape with new shrubs, decorative rock, concrete curbing, and clean finishes.' },
  { q: 'Do you work with decorative rock and shrubs?', a: 'Absolutely. Decorative rock and low-maintenance shrubs are a practical choice for Nevada landscapes and we have experience installing both.' },
  { q: 'Can you improve the appearance of an existing yard?', a: 'Yes. Even without a full redesign, we can improve curb appeal through targeted updates like fresh curbing, new rock, and updated plantings.' },
];

export const CLEANUP_FAQS = [
  { q: 'What types of trimming do you offer?', a: 'We offer palm trimming, sago palm care, and general shrub and plant trimming as part of our yard cleanup services.' },
  { q: 'Do you offer recurring cleanup service?', a: 'Yes. We offer monthly, biweekly, and one-time cleanup options so you can keep your yard tidy on your preferred schedule.' },
  { q: 'Can you handle palm trimming safely?', a: 'Yes. Palm trimming is one of our regular services. We have the experience to trim palms properly while maintaining the health of the tree.' },
];

export const GALLERY_FAQS = [
  { q: 'Are these real SMH Landscape projects?', a: 'Yes. Every photo in our gallery shows actual work completed by SMH Landscape. These are real before and after results from Nevada properties.' },
  { q: 'Can I see more examples of your work?', a: 'You can also follow our Instagram @salv.mauricio for additional photos and updates from recent projects.' },
  { q: 'Do you have before and after comparisons?', a: 'Yes. Several of our gallery images include before and after comparisons that show the full transformation of each project.' },
];

export const REVIEWS_FAQS = [
  { q: 'How do I leave a review for SMH Landscape?', a: 'You can share your experience by messaging us on Instagram at @salv.mauricio or by mentioning it when you request your next service.' },
  { q: 'Are these reviews from real customers?', a: 'The reviews on this page reflect feedback from SMH Landscape customers. As a growing business, we continue to build our review collection.' },
  { q: 'What services do customers review most often?', a: 'Customers most frequently highlight our irrigation repair, palm trimming, and recurring maintenance services.' },
];

export const ABOUT_FAQS = [
  { q: 'Who owns SMH Landscape?', a: 'SMH Landscape is owned and operated by Salvador Madrigal, a landscaping professional serving customers in Nevada.' },
  { q: 'What areas does SMH Landscape serve?', a: 'We serve customers in Nevada. Contact us to confirm whether we cover your specific area.' },
  { q: 'What services does SMH Landscape offer?', a: 'We offer irrigation repair, fertilization, landscape maintenance, seasonal landscaping, landscape renovations, and yard cleanup services.' },
];

export const CONTACT_FAQS = [
  { q: 'How quickly will I get a response?', a: 'We review every enquiry and will get back to you as soon as possible. For urgent requests, feel free to reach out on Instagram at @salv.mauricio.' },
  { q: 'What information should I include in my request?', a: 'Include your name, the service you are interested in, and a brief description of what you need. The more detail you provide, the better we can help.' },
  { q: 'Do you offer free estimates?', a: 'Yes. You can request a free estimate through our contact form and we will help you explore the right solution for your yard.' },
];

export const SERVICES_FAQS = [
  { q: 'Which landscaping services do you offer?', a: 'We offer six core services: irrigation repair, fertilization, landscape maintenance, seasonal landscaping, landscape renovations, and yard cleanup and trimming.' },
  { q: 'Can I combine multiple services?', a: 'Yes. Many customers combine recurring maintenance with seasonal services or irrigation repair. We can help you build the right plan for your yard.' },
  { q: 'Do you offer both one-time and recurring services?', a: 'Yes. Several of our services are available as one-time visits or on a recurring monthly or biweekly schedule.' },
];
