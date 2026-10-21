import {
  Check,
  Search,
  Lightbulb,
  PenTool,
  Hammer,
  Rocket,
} from 'lucide-react';
import { Container } from '@/components/ui/Layout';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    shortTitle: 'Understand the challenge',
    description: 'We learn how your business works, who you serve, and what success should look like.',
    details: [
      'Business and user research',
      'Technical landscape review',
      'Requirements and success criteria',
    ],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategize',
    shortTitle: 'Make a clear plan',
    description: 'Together, we shape the solution, choose the right technology, and map out delivery.',
    details: [
      'Solution architecture',
      'Technology and roadmap',
      'Milestones, risks, and budget',
    ],
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    shortTitle: 'Make it intuitive',
    description: 'We turn ideas into clear user journeys and testable designs before development begins.',
    details: [
      'User journeys and wireframes',
      'Interactive prototypes',
      'Accessible visual design',
    ],
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Build & Validate',
    shortTitle: 'Build with confidence',
    description: 'We work in focused sprints, share progress often, and validate quality as we go.',
    details: [
      'Agile development cycles',
      'Automated tests and code reviews',
      'Regular working demos',
    ],
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch & Support',
    shortTitle: 'Launch and keep improving',
    description: 'We release carefully, monitor performance, and stay alongside you as your product grows.',
    details: [
      'Reliable deployment',
      'Monitoring and team handover',
      'Ongoing support and improvement',
    ],
  },
];

export function HowWeWork() {
  return (
    <section className="bg-white" aria-labelledby="process-heading">
      <Container size="xl">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <span className="eyebrow mb-3">Our Process</span>
          <h2
            id="process-heading"
            className="text-3xl font-semibold leading-tight text-text-primary sm:text-4xl"
          >
            A clear path from idea to impact.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-text-secondary">
            Five collaborative steps keep your project focused, transparent, and moving forward.
          </p>
        </div>

        <ol className="process-flow" aria-label="Project process steps">
          {processSteps.map((step) => {
            const StepIcon = step.icon;

            return (
              <li key={step.number} className="process-flow__step">
                <div className="process-flow__marker" aria-hidden="true">
                  <StepIcon className="h-5 w-5" />
                </div>
                <div className="process-flow__content">
                  <p className="process-flow__eyebrow">
                    <span>Step {step.number}</span>
                    <span className="process-flow__separator" aria-hidden="true">/</span>
                    {step.shortTitle}
                  </p>
                  <h3 className="process-flow__title">{step.title}</h3>
                  <p className="process-flow__description">{step.description}</p>
                  <ul className="process-flow__details" aria-label={`${step.title} activities`}>
                    {step.details.map((detail) => (
                      <li key={detail}>
                        <Check className="h-4 w-4" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
