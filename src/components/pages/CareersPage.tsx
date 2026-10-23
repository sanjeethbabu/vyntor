import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Mail, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Layout';

export function CareersPage() {
  return (
    <div className="bg-background-secondary">
      <section className="relative isolate overflow-hidden bg-primary-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-primary-200 sm:right-8"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-8 -top-16 -z-10 h-64 w-64 rounded-full border border-primary-200/70 sm:right-24"
          aria-hidden="true"
        />
        <Container size="xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-3.5 py-2 text-xs font-semibold tracking-wide text-primary-800">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              Careers at vastverse
            </span>
            <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Join our team.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              We&apos;re always looking ahead, but we&apos;re not recruiting right now. There are currently no open positions.
            </p>
          </div>
        </Container>
      </section>

      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:py-12">
        <Container size="xl">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border-light bg-white p-6 shadow-[0_16px_50px_rgba(21,26,36,0.06)] sm:p-9 lg:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-800">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-primary-800">
              No current openings
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              We&apos;ll update this page when recruitment begins.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              Thanks for your interest in building a career with vastverse. Please check back later for new opportunities. We look forward to sharing updates when our recruiting process starts.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-200"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact our team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}




