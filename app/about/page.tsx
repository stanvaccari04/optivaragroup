import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import MountainIcon from '@/components/MountainIcon'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Optivara is built on a single conviction: executive performance is infrastructure, and high-performing organizations must govern it accordingly.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-36 pb-16 md:pt-44 md:pb-20 bg-cream"
        aria-labelledby="about-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MountainIcon size={20} />
              <span
                className="text-xs font-body text-gold tracking-widest uppercase"
                style={{ letterSpacing: '0.12em' }}
              >
                About Optivara
              </span>
            </div>
            <h1
              id="about-heading"
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Built on a
              <br />
              single conviction.
            </h1>
            <Divider className="mb-8" />
            <p className="text-base md:text-lg font-body text-burgundy/75 leading-prose max-w-xl">
              Executive performance is infrastructure — and high-performing organizations must
              govern it with the same rigor they apply to every other critical asset.
            </p>
          </div>
        </Container>
      </section>

      {/* ── VIEWPOINT ── */}
      <section
        className="pb-16 md:pb-20 bg-cream border-b border-blush/30"
        aria-labelledby="viewpoint-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div className="lg:pt-1">
              <h2
                id="viewpoint-heading"
                className="font-heading text-sm font-bold text-gold"
                style={{ letterSpacing: '0.08em' }}
              >
                Our viewpoint
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base font-body text-burgundy/75 leading-prose">
                High-performing companies insure data, intellectual property, logistics, and
                financial risk — but routinely under-engineer the physiological and cognitive engine
                that drives every strategic outcome.
              </p>
              <p className="text-base font-body text-burgundy/75 leading-prose">
                Executive health is not a perk. It is not &ldquo;wellness.&rdquo; It is not reactive
                medical support. It is strategic infrastructure for sustained output, decision
                quality, and resilience under pressure.
              </p>
              <p className="text-base font-body text-burgundy font-medium leading-prose">
                In the next decade, the organizations that win in America will be those who treat
                executive capacity like capital — measured, protected, optimized.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MISSION ── */}
      <section
        className="py-16 md:py-20 bg-cream-dark border-b border-blush/30"
        aria-labelledby="mission-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div className="lg:pt-1">
              <h2
                id="mission-heading"
                className="font-heading text-sm font-bold text-gold"
                style={{ letterSpacing: '0.08em' }}
              >
                Mission
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p
                className="font-heading text-2xl md:text-3xl text-burgundy"
                style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}
              >
                To design, implement, and govern health infrastructure that protects and enhances
                executive capacity.
              </p>
              <p className="text-base font-body text-burgundy/65 leading-prose">
                So high-performing leaders sustain peak performance under pressure, over time —
                and organizations never face a preventable leadership performance gap.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT WE DO ── */}
      <section
        className="py-16 md:py-20 bg-cream border-b border-blush/30"
        aria-labelledby="what-we-do-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div className="lg:pt-1">
              <h2
                id="what-we-do-heading"
                className="font-heading text-sm font-bold text-gold"
                style={{ letterSpacing: '0.08em' }}
              >
                What we do
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base font-body text-burgundy/75 leading-prose">
                Optivara works with high-performing organizations to build structured, measurable
                executive health systems. We deploy integrated protocols across sleep, physiology,
                cognitive performance, nutrition, and stress management — calibrated to each
                executive&apos;s demands and governed through structured accountability.
              </p>
              <p className="text-base font-body text-burgundy/75 leading-prose">
                Not coaching. Not wellness programs. Governed infrastructure — integrated,
                accountable, and built to elite standards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── DISCRETION ── */}
      <section
        className="py-16 md:py-20 bg-cream-dark border-b border-blush/30"
        aria-labelledby="discretion-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div className="lg:pt-1">
              <h2
                id="discretion-heading"
                className="font-heading text-sm font-bold text-gold"
                style={{ letterSpacing: '0.08em' }}
              >
                Discretion
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base font-body text-burgundy/75 leading-prose">
                Every engagement is conducted with complete discretion. Our clients operate at the
                highest levels of their organizations, and the nature of this work requires
                absolute confidentiality.
              </p>
              <p className="text-base font-body text-burgundy font-medium leading-prose">
                Trust is non-negotiable. We operate accordingly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-cream">
        <Container narrow>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-heading text-2xl md:text-3xl text-burgundy" style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                If this resonates, we would welcome a conversation.
              </p>
              <p className="text-sm font-body text-burgundy/60 leading-prose">
                Request an executive brief or book an introductory call.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/executive-brief"
                className="px-7 py-3.5 bg-burgundy text-cream text-sm font-body font-semibold border border-burgundy
                  hover:bg-burgundy-dark transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
              >
                Request Executive Brief
              </Link>
              <Link
                href="/contact#book"
                className="px-7 py-3.5 bg-transparent text-burgundy text-sm font-body font-semibold border border-burgundy
                  hover:bg-blush-light transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
              >
                Book Intro Call
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
