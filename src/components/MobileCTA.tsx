import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { BUSINESS } from '@/data/site-data';

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-charcoal-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary flex-1 text-sm py-3">
            Get a Free Estimate
          </Link>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80"
            aria-label="Visit Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
