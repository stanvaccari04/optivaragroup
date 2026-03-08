import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import PillarCard from '@/components/PillarCard'
import MountainIcon from '@/components/MountainIcon'
import ExecutiveBriefForm from '@/components/forms/ExecutiveBriefForm'

export const metadata: Metadata = {
  title: 'Executive Performance Infrastructure',
  description:
    'Optivara builds measurable health infrastructure that protects and scales executive performance inside high-performing organizations. Integrated. Governed. Measurable.',
}

function IntegrationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="5" stroke="#A88875" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="11" stroke="#A88875" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
      <path d="M14 3V8M14 20V25M3 14H8M20 14H25" stroke="#A88875" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function GovernanceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="22" height="17" rx="1" stroke="#A88875" strokeWidth="1.5" />
      <path d="M9 8V5C9 3.895 9.895 3 11 3H17C18.105 3 19 3.895 19 5V8" stroke="#A88875" strokeWidth="1.5" />
      <path d="M9 16H19M9 20H15" stroke="#A88875" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MeasurementIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 24L9 16L14 19L19 10L24 14" stroke="#A88875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 24H24" stroke="#A88875" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="19" cy="10" r="2" fill="#A88875" opacity="0.5" />
    </svg>
  )
}

const outcomes = [
  {
    label: 'Decision quality',
    description: 'Sustained cognitive sharpness when the stakes are highest.',
  },
  {
    label: 'Resilience under pressure',
    description: 'Physiological and mental capacity that holds under prolonged demand.',
  },
  {
    label: 'Sustained output',
    description: 'Performance that does not degrade over the leadership arc.',
  },
  {
    label: 'Continuity protection',
    description: 'Reduced risk of performance gaps at the leadership level.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="bg-cream overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] min-h-[640px] md:min-h-[720px]">
          {/* Text column */}
          <div className="flex items-center pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-10 lg:px-16 xl:px-24 max-w-[1200px] mx-auto w-full lg:max-w-none">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <MountainIcon size={20} />
                <span
                  className="text-xs font-body text-gold tracking-widest uppercase"
                  style={{ letterSpacing: '0.12em' }}
                >
                  Optivara Group
                </span>
              </div>
              <h1
                id="hero-heading"
                className="font-heading text-5xl md:text-6xl lg:text-7xl text-burgundy mb-6"
                style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
              >
                Executive Performance
                <br />
                Infrastructure.
              </h1>
              <Divider className="mb-8" />
              <p className="text-lg md:text-xl font-body text-burgundy/75 leading-prose mb-5 max-w-xl">
                Measurable health infrastructure that protects and scales executive performance
                inside high-performing organizations.
              </p>
              <p
                className="text-sm font-body text-gold tracking-widest mb-10"
                style={{ letterSpacing: '0.12em' }}
              >
                Integrated. Governed. Measurable.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/executive-brief"
                  className="px-8 py-4 bg-burgundy text-cream text-sm font-body font-semibold border border-burgundy
                    hover:bg-burgundy-dark hover:border-burgundy-dark active:bg-burgundy-dark
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
                >
                  Request Executive Brief
                </Link>
                <Link
                  href="/contact#book"
                  className="px-8 py-4 bg-transparent text-burgundy text-sm font-body font-semibold border border-burgundy
                    hover:bg-blush-light active:bg-blush
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
                >
                  Book Intro Call
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative right panel — hidden on mobile */}
          <div
            className="hidden lg:flex flex-col justify-end relative bg-blush-light border-l border-blush/40"
            aria-hidden="true"
          >
            {/* Stacked credential lines */}
            <div className="p-12 flex flex-col gap-8">
              {[
                { num: '3', label: 'Integrated pillars' },
                { num: '100%', label: 'Governed execution' },
                { num: '0', label: 'Unmanaged variables' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-t border-blush pt-6">
                  <span
                    className="font-heading text-4xl text-burgundy/20 font-bold"
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    {item.num}
                  </span>
                  <span className="text-xs font-body text-burgundy/50 uppercase tracking-widest" style={{ letterSpacing: '0.1em' }}>
                    {item.label}
                  </span>
                </div>
              ))}
              {/* Mountain watermark */}
              <div className="absolute bottom-10 right-10 opacity-10">
                <MountainIcon size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE UNMANAGED RISK ── */}
      <section
        className="py-20 md:py-28 bg-cream-dark border-y border-blush/30"
        aria-labelledby="risk-heading"
      >
        <Container narrow>
          <div className="flex flex-col gap-6">
            <span
              className="text-xs font-body text-gold tracking-widest uppercase"
              style={{ letterSpacing: '0.12em' }}
            >
              The unmanaged risk
            </span>
            <h2
              id="risk-heading"
              className="font-heading text-3xl md:text-4xl text-burgundy"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
            >
              The most expensive risk in a high-performing organization is rarely in the balance sheet.
            </h2>
            <Divider width="short" />
            <p className="text-base font-body text-burgundy/75 leading-prose">
              High-performing companies insure capital, operations, and intellectual property — but
              often leave the single most critical performance driver unmanaged: leadership capacity.
            </p>
            <p className="text-base font-body text-burgundy/75 leading-prose">
              Cognitive degradation is gradual. Physical reserve depletes quietly. And when performance
              at the top begins to slip, the cost is rarely visible until it is already expensive.
            </p>
            <p className="text-base font-body text-burgundy font-medium">
              Quiet degradation becomes expensive.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-20 md:py-28 bg-cream" aria-labelledby="pillars-heading">
        <Container>
          <div className="mb-12">
            <span
              className="text-xs font-body text-gold tracking-widest uppercase block mb-4"
              style={{ letterSpacing: '0.12em' }}
            >
              What we build
            </span>
            <h2
              id="pillars-heading"
              className="font-heading text-3xl md:text-4xl text-burgundy"
              style={{ letterSpacing: '-0.02em' }}
            >
              Three pillars. One governed system.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PillarCard
              icon={<IntegrationIcon />}
              title="Integration"
              description="Sleep, physiology, stress, training, and cognition — not managed in silos, but engineered as one interconnected system. Every variable informs the others."
            />
            <PillarCard
              icon={<GovernanceIcon />}
              title="Governance"
              description="Structured oversight and accountability built into every engagement. Regular reviews, systematic adjustments, and clear lines of responsibility. Not advice. Execution."
            />
            <PillarCard
              icon={<MeasurementIcon />}
              title="Measurement"
              description="Every intervention is tracked and quantified. Performance data reported in business terms — because what cannot be measured cannot be managed."
            />
          </div>
        </Container>
      </section>

      {/* ── NOT WELLNESS ── */}
      <section
        className="py-20 md:py-28 bg-burgundy"
        aria-labelledby="not-wellness-heading"
      >
        <Container narrow>
          <div className="flex flex-col gap-6">
            <span
              className="text-xs font-body text-gold/70 tracking-widest uppercase"
              style={{ letterSpacing: '0.12em' }}
            >
              A different category
            </span>
            <h2
              id="not-wellness-heading"
              className="font-heading text-4xl md:text-5xl text-cream"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Not perks.
              <br />
              Not apps.
              <br />
              Not slogans.
            </h2>
            <div className="h-px w-12 bg-gold/40" role="separator" aria-hidden="true" />
            <p
              className="font-heading text-2xl md:text-3xl text-cream font-bold"
              style={{ letterSpacing: '-0.02em' }}
            >
              Infrastructure.
            </p>
            <p className="text-base font-body text-cream/70 leading-prose max-w-lg">
              Executive health is not corporate wellness. It is not a perk, a platform, or a
              motivational program. It is strategic infrastructure for sustained output, decision
              quality, and resilience under pressure.
            </p>
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-sm font-body font-semibold text-gold
                hover:text-gold-light transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 w-fit"
              style={{ letterSpacing: '0.02em' }}
            >
              See our approach
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-20 md:py-28 bg-cream" aria-labelledby="outcomes-heading">
        <Container>
          <div className="mb-12">
            <span
              className="text-xs font-body text-gold tracking-widest uppercase block mb-4"
              style={{ letterSpacing: '0.12em' }}
            >
              Business outcomes
            </span>
            <h2
              id="outcomes-heading"
              className="font-heading text-3xl md:text-4xl text-burgundy"
              style={{ letterSpacing: '-0.02em' }}
            >
              What protected performance looks like.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
            {outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="py-7 border-t border-blush/50 flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <MountainIcon size={18} />
                  <h3 className="text-base font-heading font-bold text-burgundy">
                    {outcome.label}
                  </h3>
                </div>
                <p className="text-sm font-body text-burgundy/65 leading-prose pl-0 md:pl-7">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── DISCRETION ── */}
      <section className="py-14 bg-cream-dark border-y border-blush/30">
        <Container narrow>
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 mt-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="9" stroke="#A88875" strokeWidth="1.2" />
                <path d="M7 10L9 12L13 8" stroke="#A88875" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm font-body text-burgundy/70 leading-prose italic">
              Every engagement is handled with absolute discretion. Our clients operate at the
              highest levels — trust is non-negotiable, and we operate accordingly.
            </p>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section
        id="request-brief"
        className="py-20 md:py-28 bg-cream"
        aria-labelledby="form-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col justify-center gap-6">
              <span
                className="text-xs font-body text-gold tracking-widest uppercase"
                style={{ letterSpacing: '0.12em' }}
              >
                Get started
              </span>
              <h2
                id="form-heading"
                className="font-heading text-3xl md:text-4xl text-burgundy"
                style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
              >
                Ready to build executive performance infrastructure?
              </h2>
              <Divider />
              <p className="text-sm font-body text-burgundy/70 leading-prose">
                Request your executive brief. We will review your situation and provide a tailored
                overview of how Optivara builds structured performance infrastructure for your
                organization.
              </p>
              <p className="text-xs font-body text-burgundy/50">
                Typical response within one business day.
              </p>
            </div>
            <div>
              <ExecutiveBriefForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
