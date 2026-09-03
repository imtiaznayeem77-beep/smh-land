import { Star, Quote } from 'lucide-react';
import { Review } from '@/data/site-data';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col rounded-2xl border border-charcoal-200/50 bg-white p-6 shadow-card">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-forest-500 text-forest-500" />
        ))}
      </div>
      <Quote className="h-7 w-7 text-forest-400/20 mb-3" />
      <p className="text-sm text-charcoal-700 leading-relaxed flex-1">{review.text}</p>
      <div className="mt-5 pt-4 border-t border-charcoal-100">
        <p className="text-sm font-semibold text-charcoal-900">{review.name}</p>
        <p className="text-xs text-charcoal-500">{review.location} · {review.service}</p>
      </div>
    </div>
  );
}

export function ReviewsSection({ reviews, title = 'What Customers Say' }: { reviews: Review[]; title?: string }) {
  return (
    <section className="py-20 lg:py-28 bg-natural-light">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4">Customer Feedback</span>
          <h2 className="section-heading">{title}</h2>
          <p className="mt-4 text-charcoal-600">Real feedback from homeowners who trusted SMH Landscape with their yard care needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
