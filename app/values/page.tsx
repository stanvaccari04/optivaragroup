import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import ValueCard from '@/components/ValueCard'
import MountainIcon from '@/components/MountainIcon'

export const metadata: Metadata = {
  title: 'Our Values',
  description:
    'The principles that govern how Optivara builds and delivers executive performance infrastructure.',
}

const values = [
  {
    number: '1',
    title: 'Measured performance over marketing noise',
    description:
      'If it cannot be measured, it cannot be optimized. We operate in outcomes, not impressions. Every protocol has a metric; every metric has a standard.',
  },
  {
    number: '2',
    title: 'Integration over fragmentation',
    description:
      'Sleep, physiology, stress, training, and cognition are not separate programs — they are interdependent variables in one system. We engineer them as such.',
  },
  {
    number: '3',
    title: 'Accountability over advice',
    description:
      'We do not provide tips, suggestions, or motivational frameworks. We build governed execution with structured accountability at every stage.',
  },
  {
    number: '4',
    title: 'Discretion as standard',
    description:
      'Our clients operate at the highest levels of their organizations. Confidentiality is not a feature we offer — it is a baseline we never compromise.',
  },
  {
    number: '5',
    title: 'Long-term capacity over short-term hacks',
    description:
      'Sustainable peak performance outlasts any trend, shortcut, or optimization theatre. We build for the long arc of a leadership career — not the next quarter.',
  },
  {
    number: '6',
    title: 'Elite standards',
    description:
      'High-performing leaders require infrastructure built to their level — not adapted from consumer wellness or generic health advice. We operate at their standard.',
  },
]

export default function ValuesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-36 pb-16 md:pt-44 md:pb-20 bg-cream"
        aria-labelledby="values-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MountainIcon size={20} />
              <span
                className="text-xs font-body text-gold tracking-widest uppercase"
                style={{ letterSpacing: '0.12em' }}
              >
                What we stand for
              </span>
            </div>
            <h1
              id="values-heading"
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Built to elite standards.
            </h1>
            <Divider className="mb-8" />
            <p className="text-base md:text-lg font-body text-burgundy/75 leading-prose max-w-xl">
              These are the principles that govern how we build, what we commit to, and the
              standard to which we hold ourselves and our work.
            </p>
          </div>
        </Container>
      </section>

      {/* ── VALUES GRID ── */}
      <section className="pb-20 md:pb-28 bg-cream" aria-label="Core values">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {values.map((value) => (
              <ValueCard
                key={value.number}
                number={value.number}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── MANIFESTO BAND ── */}
      <section className="py-20 md:py-28 bg-burgundy" aria-label="Manifesto">
        <Container narrow>
          <div className="flex flex-col gap-5">
            <span
              className="text-xs font-body text-gold/70 tracking-widest uppercase"
              style={{ letterSpacing: '0.12em' }}
            >
              Our manifesto
            </span>
            <div
              className="font-heading text-2xl md:text-3xl text-cream flex flex-col gap-3"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}
            >
              <p>We build infrastructure.</p>
              <p className="text-cream/70">Not perks.</p>
              <p className="text-cream/70">Not apps.</p>
              <p className="text-cream/70">Not motivational slogans.</p>
            </div>
            <div className="h-px w-12 bg-gold/30 my-2" role="separator" aria-hidden="true" />
            <p className="text-base font-body text-cream/70 leading-prose max-w-lg">
              High-performing leaders carry enterprise weight — capital allocation decisions,
              strategic pivots, investor confidence, culture trajectory. And yet their health
              is left to fragmented vendors, generic platforms, and personal guesswork.
            </p>
            <p className="text-base font-body text-cream/70 leading-prose max-w-lg">
              We believe executive health is enterprise risk management. We design structured,
              measurable, integrated systems that protect cognitive sharpness, physical resilience,
              and long-term output.
            </p>
            <p className="text-sm font-body font-semibold text-gold mt-2">
              Health infrastructure for high-performing leaders.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-cream-dark border-b border-blush/30">
        <Container narrow>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-heading text-xl md:text-2xl text-burgundy" style={{ letterSpacing: '-0.01em' }}>
                These standards apply to every engagement.
              </p>
              <p className="text-sm font-body text-burgundy/60 leading-prose">
                Request a brief to see what they look like in practice.
              </p>
            </div>
            <Link
              href="/executive-brief"
              className="px-7 py-3.5 bg-burgundy text-cream text-sm font-body font-semibold border border-burgundy
                hover:bg-burgundy-dark transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 whitespace-nowrap flex-shrink-0"
              style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
            >
              Request Executive Brief
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
