import { Link } from 'react-router-dom';
import { Instagram, MapPin, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SERVICES, BUSINESS } from '@/data/site-data';

export function Footer() {
  return (
    <footer className="relative bg-charcoal-950 border-t border-white/5">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img src={BUSINESS.logo} alt="SMH Landscape logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Professional landscaping and gardening services serving customers in Nevada. From irrigation repair to landscape renovations and ongoing yard care.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-forest-400 hover:text-forest-400"
                aria-label="Follow SMH Landscape on Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Pages</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-forest-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link to={service.path} className="text-sm text-white/60 hover:text-forest-400 transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-forest-400 shrink-0" />
                {BUSINESS.serviceArea}
              </p>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-forest-400 transition-colors"
              >
                <Instagram className="h-4 w-4 text-forest-400 shrink-0" />
                {BUSINESS.instagram}
              </a>
            </div>
            <Link to="/contact" className="btn-primary text-sm w-full sm:w-auto">
              Request a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 SMH Landscape. All rights reserved.</p>
          <p className="text-xs text-white/40">
            Website Designed & Developed by{' '}
            <a
              href={BUSINESS.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-forest-400 transition-colors"
            >
              {BUSINESS.developer}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
