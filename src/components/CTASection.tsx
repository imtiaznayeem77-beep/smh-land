import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export function CTASection({
  title = 'Ready to Improve Your Yard?',
  subtitle = "Let's talk about your landscaping needs. Request a free estimate and we'll help you find the right solution for your outdoor space.",
  image = 'https://images.pexels.com/photos/5365778/pexels-photo-5365778.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/40" />
      </div>
      <div className="relative container-page py-24 lg:py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-heading-light text-balance">{title}</h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">{subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/gallery" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
