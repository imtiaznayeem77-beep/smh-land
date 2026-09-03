const steps = [
  { number: '01', title: 'Tell Us What You Need', description: 'Share what your yard needs — from irrigation repair to regular maintenance or a full landscape refresh.' },
  { number: '02', title: 'Plan the Right Solution', description: 'We discuss the best approach for your landscape, your schedule, and your budget.' },
  { number: '03', title: 'Complete the Work', description: 'We get to work with professional care and attention to detail, keeping your property clean throughout.' },
  { number: '04', title: 'Enjoy a Cleaner Yard', description: 'Relax and enjoy a healthier, better-maintained outdoor space you can be proud of.' },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-natural-light">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-4">How It Works</span>
          <h2 className="section-heading">A Simple, Professional Process</h2>
          <p className="mt-4 text-charcoal-600">From first conversation to finished yard, we keep things straightforward and reliable.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="rounded-2xl border border-charcoal-200/50 bg-white p-7 shadow-card h-full">
                <span className="font-display text-4xl font-bold text-forest-500/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-charcoal-900">{step.title}</h3>
                <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-forest-500/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
