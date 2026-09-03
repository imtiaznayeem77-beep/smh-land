import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-colors ${
              isOpen
                ? 'border-forest-500/30 bg-forest-500/5'
                : 'border-charcoal-200/40 bg-white hover:border-forest-500/20'
            }`}
          >
            <button
              ref={(el) => { refs.current[index] = el; }}
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-content-${index}`}
            >
              <span className={`text-base font-semibold ${isOpen ? 'text-forest-700' : 'text-charcoal-900'}`}>
                {item.q}
              </span>
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
                isOpen ? 'bg-forest-500 text-white rotate-45' : 'bg-charcoal-100 text-charcoal-600'
              }`}>
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-charcoal-600 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
