import type { Metadata } from 'next'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import MountainIcon from '@/components/MountainIcon'
import ExecutiveBriefForm from '@/components/forms/ExecutiveBriefForm'

export const metadata: Metadata = {
  title: 'Request Executive Brief',
  description:
    'Request your Optivara Executive Brief — a tailored overview of how we build health infrastructure for your leadership team.',
}

const whatItIs = [
  'A tailored overview of how Optivara builds executive performance infrastructure for your specific situation.',
  'An assessment of where the highest-leverage opportunities exist within your leadership structure.',
  'A clear picture of what governed health infrastructure looks like in practice — with no obligation.',
]

const howItWorks = [
  'Submit your details using the form below.',
  'We review your situation and prepare a relevant, personalized brief.',
  'We schedule a 20-minute introductory conversation to walk through it together.',
]

const whoItIsFor = [
  'C-suite executives managing sustained, high-demand leadership roles.',
  'CHROs and leadership teams responsible for executive performance continuity.',
  'Founders and senior leaders in high-growth or high-pressure environments.',
]

export default function ExecutiveBriefPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-36 pb-16 md:pt-44 md:pb-20 bg-cream"
        aria-labelledby="brief-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MountainIcon size={20} />
              <span
                className="text-xs font-body text-gold tracking-widest uppercase"
                style={{ letterSpacing: '0.12em' }}
              >
                Get started
              </span>
            </div>
            <h1
              id="brief-heading"
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Request your
              <br />
              Executive Brief.
            </h1>
            <Divider className="mb-8" />
            <p className="text-base md:text-lg font-body text-burgundy/75 leading-prose max-w-xl">
              A personalized briefing on how Optivara builds executive performance infrastructure —
              tailored to your situation, delivered without obligation.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHAT / HOW / WHO ── */}
      <section className="pb-16 md:pb-20 bg-cream" aria-label="Brief details">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* What it is */}
            <div className="flex flex-col gap-5 p-8 bg-cream-dark border border-blush/40" style={{ borderRadius: '3px' }}>
              <h2 className="text-xs font-body font-semibold text-gold tracking-widest uppercase" style={{ letterSpacing: '0.12em' }}>
                What it is
              </h2>
              <ul className="flex flex-col gap-4" aria-label="What the Executive Brief includes">
                {whatItIs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-0.5" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-body text-burgundy/70 leading-prose">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* How it works */}
            <div className="flex flex-col gap-5 p-8 bg-burgundy border border-burgundy" style={{ borderRadius: '3px' }}>
              <h2 className="text-xs font-body font-semibold text-gold/80 tracking-widest uppercase" style={{ letterSpacing: '0.12em' }}>
                How it works
              </h2>
              <ol className="flex flex-col gap-4" aria-label="How the Executive Brief process works">
                {howItWorks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 text-xs font-body font-bold text-gold mt-0.5"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-body text-cream/80 leading-prose">{item}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Who it's for */}
            <div className="flex flex-col gap-5 p-8 bg-cream-dark border border-blush/40" style={{ borderRadius: '3px' }}>
              <h2 className="text-xs font-body font-semibold text-gold tracking-widest uppercase" style={{ letterSpacing: '0.12em' }}>
                Who it&apos;s for
              </h2>
              <ul className="flex flex-col gap-4" aria-label="Who the Executive Brief is for">
                {whoItIsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-0.5" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-body text-burgundy/70 leading-prose">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FORM ── */}
      <section
        className="py-16 md:py-20 bg-cream-dark border-t border-blush/30"
        aria-labelledby="brief-form-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="flex flex-col gap-6 lg:pt-2">
              <h2
                id="brief-form-heading"
                className="font-heading text-2xl md:text-3xl text-burgundy"
                style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}
              >
                Tell us about your situation.
              </h2>
              <Divider />
              <p className="text-sm font-body text-burgundy/70 leading-prose">
                Complete the form and we will prepare a brief tailored to your organization and
                goals. Every inquiry is handled with complete discretion.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <p className="text-xs font-body text-burgundy/60">Response within one business day</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <p className="text-xs font-body text-burgundy/60">No obligation or hard sell</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <p className="text-xs font-body text-burgundy/60">Handled with complete discretion</p>
                </div>
              </div>
            </div>
            <div>
              <ExecutiveBriefForm showContext />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
