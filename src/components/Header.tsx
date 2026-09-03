import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Instagram } from 'lucide-react';
import { NAV_LINKS, SERVICES, BUSINESS } from '@/data/site-data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-charcoal-950/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="SMH Landscape home">
              <img
                src={BUSINESS.logo}
                alt="SMH Landscape logo"
                className="h-9 w-auto lg:h-11 object-contain"
                width={44}
                height={44}
              />
              <span className="font-display text-lg font-bold tracking-tight text-white hidden sm:block">
                SMH <span className="text-forest-400">Landscape</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.label === 'Services' ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        location.pathname.startsWith('/services')
                          ? 'text-forest-400'
                          : 'text-white/80 hover:text-white'
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                        >
                          <div className="w-80 rounded-2xl border border-white/10 bg-charcoal-900/95 p-3 shadow-premium backdrop-blur-xl">
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                to={service.path}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                              >
                                <div className="mt-0.5 h-10 w-10 shrink-0 rounded-lg bg-forest-500/20 flex items-center justify-center">
                                  <img src={service.image} alt="" className="h-full w-full rounded-lg object-cover" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-white group-hover:text-forest-400 transition-colors">
                                    {service.label}
                                  </p>
                                  <p className="text-xs text-white/50 mt-0.5 line-clamp-1">{service.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-forest-400'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Visit SMH Landscape on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <Link to="/contact" className="btn-primary text-sm">
                Get a Free Estimate
              </Link>
            </div>

            <button
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-charcoal-950/95 backdrop-blur-xl" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-charcoal-900 flex flex-col"
            >
              <div className="flex items-center justify-between h-16 px-5 border-b border-white/5">
                <img src={BUSINESS.logo} alt="SMH Landscape logo" className="h-9 w-auto object-contain" />
                <button
                  className="flex items-center justify-center h-10 w-10 rounded-lg text-white"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-6">
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.path}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-forest-500/15 text-forest-400'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6">
                  <p className="px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Services</p>
                  <div className="flex flex-col gap-1">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to={service.path}
                        className={`rounded-xl px-4 py-2.5 text-sm transition-colors ${
                          location.pathname === service.path
                            ? 'bg-forest-500/15 text-forest-400'
                            : 'text-white/60 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 p-5 space-y-3">
                <Link to="/contact" className="btn-primary w-full">
                  Get a Free Estimate
                </Link>
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  <Instagram className="h-4 w-4" />
                  {BUSINESS.instagram}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
