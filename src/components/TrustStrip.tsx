import { Droplets, Sprout, ClipboardCheck, CalendarDays, Sparkles, Scissors } from 'lucide-react';

const items = [
  { icon: Droplets, label: 'Irrigation Repair' },
  { icon: ClipboardCheck, label: 'Landscape Maintenance' },
  { icon: Sprout, label: 'Fertilization' },
  { icon: CalendarDays, label: 'Seasonal Landscaping' },
  { icon: Sparkles, label: 'Yard Cleanups' },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-charcoal-900">
      <div className="container-page py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <item.icon className="h-5 w-5 text-forest-400" />
              <span className="text-sm font-medium text-white/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
