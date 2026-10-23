'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  ChevronDown,
  Cloud,
  Code,
  Globe,
  Layers,
  Lightbulb,
  Menu,
  Server,
  Smartphone,
  TrendingUp,
  X,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { serviceCategories } from '@/lib/data/services';

const navigation = [
  { label: 'What we do', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Insights', href: '/insights' },
];

const serviceIcons: Record<string, LucideIcon> = {
  Brain,
  Cloud,
  Code,
  Globe,
  Smartphone,
  Layers,
  TrendingUp,
  Lightbulb,
  Server,
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isMobileWhatWeDoOpen, setIsMobileWhatWeDoOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isWhatWeDoOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !navigationRef.current?.contains(event.target)) {
        setIsWhatWeDoOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isWhatWeDoOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
      setIsWhatWeDoOpen(false);
      setIsMobileWhatWeDoOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-border-light'
          : 'bg-white'
      )}
      role="banner"
    >
      <nav
        ref={navigationRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div className="flex h-16 lg:h-[4.75rem] items-center justify-between">
          <Link
            href="/"
            className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
            aria-label="vastverse - Home"
          >
<span className="brand-lockup brand-lockup--navbar" aria-hidden="true">
              <span className="brand-wordmark">vastverse</span>
              <span className="brand-tagline">innovation from vision</span>
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-7">
            {navigation.map((item) => {
              const isWhatWeDo = item.href === '/services';
              const isActive = isWhatWeDo
                ? pathname.startsWith('/services')
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (isWhatWeDo) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={cn(
                      'inline-flex items-center gap-1.5 py-2 text-[13px] font-medium transition-colors hover:text-primary-700',
                      isActive || isWhatWeDoOpen ? 'text-primary-700' : 'text-text-secondary'
                    )}
                    aria-expanded={isWhatWeDoOpen}
                    aria-controls="what-we-do-menu"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsWhatWeDoOpen((open) => !open)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn('h-3.5 w-3.5 transition-transform', isWhatWeDoOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative py-2 text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 right-0 h-px bg-primary-600 transition-transform duration-200 origin-center ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex lg:items-center">
            <Button size="sm" className="px-5 py-2.5" asChild>
              <Link href="/contact">Let&apos;s talk</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-full text-text-secondary hover:bg-neutral-100 hover:text-text-primary transition-colors"
            onClick={() => {
              setIsMobileWhatWeDoOpen(false);
              setIsMobileMenuOpen(true);
            }}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <AnimatePresence>
          {isWhatWeDoOpen && (
            <motion.div
              id="what-we-do-menu"
              role="region"
              aria-label="What we do"
              initial={{ opacity: 0, y: -8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute left-1/2 top-[calc(100%+0.6rem)] z-50 w-[min(70rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-border-light bg-white shadow-[0_24px_70px_rgba(16,23,34,0.18)]"
              onMouseLeave={() => setIsWhatWeDoOpen(false)}
            >
              <div className="flex items-center justify-between gap-4 border-b border-border-light bg-background-secondary px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <Layers className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Our capabilities</p>
                    <p className="text-xs text-text-tertiary">Technology for every stage of your journey</p>
                  </div>
                </div>
                <span className="hidden text-xs font-medium text-text-tertiary sm:block">
                  {serviceCategories.length} areas of expertise
                </span>
              </div>

              <div className="grid max-h-[min(65vh,34rem)] grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-3">
                {serviceCategories.map((service) => {
                  const ServiceIcon = serviceIcons[service.icon];
                  return (
                    <Link
                      key={service.id}
                      href={`/services?category=${service.id}`}
                      onClick={() => setIsWhatWeDoOpen(false)}
                      className="group flex min-w-0 items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary-50 focus-visible:bg-primary-50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-light bg-white text-primary-700 transition-colors group-hover:border-primary-200 group-hover:bg-primary-100">
                        <ServiceIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block truncate text-sm font-semibold text-text-primary group-hover:text-primary-800">
                          {service.title}
                        </span>
                        <span className="mt-1 block line-clamp-2 text-xs leading-relaxed text-text-tertiary">
                          {service.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 border-t border-border-light bg-white px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <span className="text-xs text-text-tertiary">Need a tailored solution? We can help you find the right approach.</span>
                <Link
                  href="/services"
                  onClick={() => setIsWhatWeDoOpen(false)}
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
                >
                  Explore all capabilities
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              className="mobile-menu-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setIsMobileMenuOpen(false);
              }}
            >
              <div className="flex h-16 items-center justify-between px-4 border-b border-border-light">
                <Link
                  href="/"
                  className="flex items-center hover:opacity-80 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="vastverse - Home"
                >
<span className="brand-lockup brand-lockup--navbar" aria-hidden="true">
                    <span className="brand-wordmark">vastverse</span>
                    <span className="brand-tagline">innovation from vision</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full text-text-secondary hover:bg-neutral-100 hover:text-text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-8 space-y-6">
                <div className="space-y-1">
                  {navigation.map((item) => item.href === '/services' ? (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setIsMobileWhatWeDoOpen((open) => !open)}
                        aria-expanded={isMobileWhatWeDoOpen}
                        aria-controls="mobile-what-we-do-menu"
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium text-text-secondary transition-colors hover:bg-neutral-50 hover:text-text-primary"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn('h-4 w-4 transition-transform', isMobileWhatWeDoOpen && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isMobileWhatWeDoOpen && (
                          <motion.div
                            id="mobile-what-we-do-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-2 pl-3 pt-1">
                              {serviceCategories.map((service) => {
                                const ServiceIcon = serviceIcons[service.icon];
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services?category=${service.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-primary-50 hover:text-primary-800"
                                  >
                                    <ServiceIcon className="h-4 w-4 shrink-0 text-primary-700" aria-hidden="true" />
                                    <span>{service.title}</span>
                                  </Link>
                                );
                              })}
                              <Link
                                href="/services"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-primary-700 hover:bg-primary-50"
                              >
                                Explore all capabilities
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-neutral-50 hover:text-text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-6 border-t border-border-light">
                  <Button className="w-full" asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Let&apos;s talk
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


