import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: { label: string; path?: string }[];
  ctaLabel?: string;
  ctaTo?: string;
}

export function PageHero({ title, subtitle, image, breadcrumb, ctaLabel, ctaTo }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-charcoal-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/70 to-charcoal-950" />
      </div>
      <div className="relative container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {breadcrumb && (
            <nav className="mb-5 flex items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
              {breadcrumb.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
                </span>
              ))}
            </nav>
          )}
          <h1 className="font-display text-display-lg font-bold text-white text-balance">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
          {ctaLabel && ctaTo && (
            <div className="mt-8">
              <Link to={ctaTo} className="btn-primary">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
