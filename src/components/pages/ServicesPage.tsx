'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Brain,
  Cloud,
  Code,
  Globe,
  Lightbulb,
  Layers,
  Server,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Layout';
import { serviceCategories } from '@/lib/data/services';

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

const initialCategoryIndex = Math.max(
  0,
  serviceCategories.findIndex((service) => service.id === 'custom-software-development')
);

export function ServicesPage({ initialCategoryId }: { initialCategoryId?: string }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(() => {
    const requestedIndex = serviceCategories.findIndex((service) => service.id === initialCategoryId);
    return requestedIndex >= 0 ? requestedIndex : initialCategoryIndex;
  });
  const selectedService = serviceCategories[selectedCategoryIndex] ?? serviceCategories[0];

  if (!selectedService) return null;

  const SelectedIcon = serviceIcons[selectedService.icon];

  return (
    <section className="min-h-[calc(100svh-4.75rem)] bg-background-secondary py-8 sm:py-10 lg:py-12">
      <Container size="xl">
        <header className="mb-7 sm:mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
            What we do
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Technology built around your business.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            Explore the capabilities we bring together to turn complex challenges into useful, scalable products.
          </p>
        </header>

        <div className="grid items-start gap-5 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-7">
          <aside className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm">
            <div className="border-b border-border-light px-5 py-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-tertiary">
                Categories
              </h2>
            </div>
            <div
              className="max-h-64 space-y-1 overflow-y-auto p-2.5 lg:max-h-[38rem]"
              role="group"
              aria-label="Service categories"
            >
              {serviceCategories.map((service, index) => {
                const ServiceIcon = serviceIcons[service.icon];
                const isSelected = selectedCategoryIndex === index;

                return (
                  <button
                    key={service.id}
                    id={`service-category-${service.id}`}
                    type="button"
                    aria-pressed={isSelected}
                    aria-controls="service-category-panel"
                    onClick={() => setSelectedCategoryIndex(index)}
                    className={`group flex w-full items-center justify-between gap-3 rounded-xl border-l-2 px-3.5 py-3 text-left text-sm font-medium transition-colors ${
                      isSelected
                        ? 'border-primary-600 bg-primary-50 text-primary-800'
                        : 'border-transparent text-text-secondary hover:bg-neutral-50 hover:text-text-primary'
                    }`}
                  >
                    <span className="min-w-0 truncate">{service.title}</span>
                    <ServiceIcon
                      className={`h-[1.1rem] w-[1.1rem] shrink-0 ${
                        isSelected ? 'text-primary-700' : 'text-text-tertiary group-hover:text-primary-700'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                id="service-category-panel"
                role="region"
                aria-labelledby={`service-category-${selectedService.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <div className="relative mb-7 flex min-h-48 items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border-light bg-white px-6 py-6 shadow-sm sm:px-9 sm:py-8">
                  <div className="relative z-10 max-w-2xl">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 text-primary-700">
                        <SelectedIcon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h2 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                        {selectedService.title}
                      </h2>
                    </div>
                    <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                      {selectedService.description}
                    </p>
                    <Link
                      href={selectedService.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
                    >
                      Explore this capability
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <div
                    className="relative hidden h-36 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-background-secondary sm:flex"
                    aria-hidden="true"
                  >
                    <span className="absolute h-32 w-32 rounded-full border border-primary-200/70" />
                    <span className="absolute h-24 w-24 rounded-full border border-primary-200/70" />
                    <span className="absolute h-16 w-16 rounded-2xl bg-white shadow-md ring-1 ring-border-light" />
                    <SelectedIcon className="relative h-8 w-8 text-primary-700" />
                    <span className="absolute right-7 top-6 h-2 w-2 rounded-full bg-primary-500" />
                    <span className="absolute bottom-6 left-7 h-2 w-2 rounded-full bg-primary-300" />
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-tertiary">
                    Capabilities included
                  </h3>
                  <span className="text-xs font-medium text-text-tertiary">
                    {selectedService.features.length} capabilities
                  </span>
                </div>

                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {selectedService.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-border-light bg-white px-4 py-4 shadow-sm transition-colors hover:border-primary-200"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-success/30 text-success">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-text-primary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-border-light bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Tools we build with</p>
                    <p className="mt-1 text-xs text-text-tertiary">
                      A modern stack selected for your project needs.
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2" aria-label={`${selectedService.title} technologies`}>
                    {selectedService.technologies.slice(0, 5).map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-border-light bg-background-secondary px-3 py-1.5 text-xs font-medium text-text-secondary"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
