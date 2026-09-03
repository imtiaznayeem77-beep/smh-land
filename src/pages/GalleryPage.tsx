import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { GALLERY_IMAGES, GALLERY_FAQS, PROJECTS } from '@/data/site-data';

const galleryItems = [
  { src: GALLERY_IMAGES[0].src, title: GALLERY_IMAGES[0].title, description: GALLERY_IMAGES[0].description, size: 'large' },
  { src: GALLERY_IMAGES[1].src, title: GALLERY_IMAGES[1].title, description: GALLERY_IMAGES[1].description, size: 'medium' },
  { src: GALLERY_IMAGES[2].src, title: GALLERY_IMAGES[2].title, description: GALLERY_IMAGES[2].description, size: 'medium' },
  { src: GALLERY_IMAGES[3].src, title: GALLERY_IMAGES[3].title, description: GALLERY_IMAGES[3].description, size: 'medium' },
];

export function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex(prev => prev === null ? prev : (prev + 1) % galleryItems.length);
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex(prev => prev === null ? prev : (prev - 1 + galleryItems.length) % galleryItems.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <SEO
        title="Gallery | SMH Landscape Projects in Nevada"
        description="View real SMH Landscape projects including landscape renovations, palm trimming, sago palm care, and yard cleanups completed for Nevada homeowners."
        path="/gallery"
        image="/gallery/project1.jpg"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'SMH Landscape Project Gallery',
        }}
      />
      <PageHero
        title="Our Work"
        subtitle="Real projects completed by SMH Landscape for Nevada homeowners. Every photo shows actual work — from landscape renovations to palm trimming and yard cleanups."
        image="/gallery/project1.jpg"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow mb-4">Real Projects</span>
            <h2 className="section-heading">SMH Landscape Project Gallery</h2>
            <p className="mt-4 text-charcoal-600">These are actual before and after results from Nevada properties. Click any image to view it full screen.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {galleryItems.map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-2xl text-left ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <div className={`relative ${i === 0 ? 'aspect-square lg:aspect-[4/3]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 lg:py-28 bg-charcoal-950">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-light mb-4">Before & After</span>
            <h2 className="section-heading-light">The Full Transformations</h2>
            <p className="mt-4 text-white/60">See the complete before and after for each project in our gallery.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={project.before} alt={`${project.title} before`} className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 rounded-full bg-charcoal-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">Before</span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={project.after} alt={`${project.title} after`} className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 rounded-full bg-forest-500/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">After</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-natural-light">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="section-heading">Gallery FAQ</h2>
              <p className="mt-4 text-charcoal-600">Common questions about our project gallery.</p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={GALLERY_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        subtitle="If you're interested in similar work for your yard, request a free estimate and we'll help you plan the right project."
      />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[85vh] w-auto object-contain rounded-xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white">{galleryItems[lightboxIndex].title}</h3>
                <p className="text-sm text-white/60">{galleryItems[lightboxIndex].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
