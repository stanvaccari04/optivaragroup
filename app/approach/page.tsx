import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import MountainIcon from '@/components/MountainIcon'

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Optivara builds governed executive health systems — not coaching, not advice. Four-phase infrastructure: Design, Implement, Govern, Measure.',
}

const phases = [
  {
    number: '01',
    phase: 'Design',
    heading: 'Understanding the full picture.',
    body: [
      'We begin by mapping the physiological and cognitive landscape of each executive. Load patterns, stress response, recovery capacity, sleep architecture, performance drivers.',
      'No assumptions. No generic templates. A precise understanding of where capacity exists, where it is under-engineered, and where the highest-leverage interventions lie.',
    ],
  },
  {
    number: '02',
    phase: 'Implement',
    heading: 'Deploying integrated systems.',
    body: [
      'We deploy structured protocols across sleep, nutrition, physical conditioning, cognitive performance, and stress management — not as isolated programs, but as one integrated system.',
      'Each element is calibrated to the executive\'s schedule, role demands, and organizational context. Built around real life, not ideal conditions.',
    ],
  },
  {
    number: '03',
    phase: 'Govern',
    heading: 'Accountability built in.',
    body: [
      'Structured governance is not optional — it is the mechanism that separates infrastructure from advice. Regular performance reviews, systematic protocol adjustments, and clear lines of accountability.',
      'We don\'t provide tips. We build governed execution.',
    ],
  },
  {
    number: '04',
    phase: 'Measure',
    heading: 'Performance as a business metric.',
    body: [
      'Every intervention is tracked, quantified, and reported. Not in wellness language — in performance terms that matter to high-performing organizations.',
      'What cannot be measured cannot be managed. What cannot be managed cannot be governed.',
    ],
  },
]

export default function ApproachPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-36 pb-20 md:pt-44 md:pb-28 bg-cream"
        aria-labelledby="approach-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MountainIcon size={20} />
              <span
                className="text-xs font-body text-gold tracking-widest uppercase"
                style={{ letterSpacing: '0.12em' }}
              >
                How we work
              </span>
            </div>
            <h1
              id="approach-heading"
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              A governed system,
              <br />
              not coaching.
            </h1>
            <Divider className="mb-8" />
            <p className="text-base md:text-lg font-body text-burgundy/75 leading-prose max-w-xl">
              Optivara does not offer advice, programs, or motivational support. We design,
              implement, and govern integrated health systems — built to the standard of the
              executives and organizations we serve.
            </p>
          </div>
        </Container>
      </section>

      {/* ── PHASES ── */}
      <section className="pb-20 md:pb-28 bg-cream" aria-label="Approach phases">
        <Container>
          <div className="flex flex-col gap-0">
            {phases.map((item, idx) => (
              <div
                key={item.number}
                className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-14 md:py-20
                  ${idx < phases.length - 1 ? 'border-b border-blush/40' : ''}`}
              >
                {/* Left: number + phase label */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-4 md:pt-1">
                  <span
                    className="text-3xl md:text-4xl font-heading font-bold text-blush"
                    style={{ letterSpacing: '-0.03em' }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-xs font-body font-semibold text-gold tracking-widest uppercase"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {item.phase}
                  </span>
                </div>

                {/* Right: content */}
                <div className="flex flex-col gap-5">
                  <h2
                    className="font-heading text-2xl md:text-3xl text-burgundy"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {item.heading}
                  </h2>
                  {item.body.map((para, i) => (
                    <p
                      key={i}
                      className={`text-sm font-body leading-prose ${
                        i === item.body.length - 1 && item.number === '03'
                          ? 'text-burgundy font-medium'
                          : 'text-burgundy/70'
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-16 md:py-20 bg-cream-dark border-t border-blush/30">
        <Container narrow>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-heading text-xl md:text-2xl text-burgundy" style={{ letterSpacing: '-0.01em' }}>
                Ready to see this applied to your organization?
              </p>
              <p className="text-sm font-body text-burgundy/60 leading-prose">
                Request an executive brief to understand what this looks like in practice.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/executive-brief"
                className="px-7 py-3.5 bg-burgundy text-cream text-sm font-body font-semibold border border-burgundy
                  hover:bg-burgundy-dark transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 whitespace-nowrap"
                style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
              >
                Request Executive Brief
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
