import type { Metadata } from 'next'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import MountainIcon from '@/components/MountainIcon'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Optivara Group to explore executive performance infrastructure for your organization.',
}

const nextSteps = [
  {
    number: '01',
    heading: 'Brief review',
    description:
      'We review your message and background to understand your situation and goals before we connect.',
  },
  {
    number: '02',
    heading: '20-minute conversation',
    description:
      'A focused introductory call to discuss your organization, your leadership structure, and where Optivara may be relevant.',
  },
  {
    number: '03',
    heading: 'Tailored recommendation',
    description:
      'Based on your situation, we provide a clear picture of what executive performance infrastructure looks like for your organization — and whether we are the right fit.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-36 pb-16 md:pt-44 md:pb-20 bg-cream"
        aria-labelledby="contact-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MountainIcon size={20} />
              <span
                className="text-xs font-body text-gold tracking-widest uppercase"
                style={{ letterSpacing: '0.12em' }}
              >
                Get in touch
              </span>
            </div>
            <h1
              id="contact-heading"
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Start the
              <br />
              conversation.
            </h1>
            <Divider className="mb-8" />
            <p className="text-base md:text-lg font-body text-burgundy/75 leading-prose max-w-xl">
              If you are exploring what executive performance infrastructure could look like for
              your organization, we would welcome an introductory conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section
        className="py-16 md:py-20 bg-cream border-b border-blush/30"
        aria-labelledby="next-steps-heading"
      >
        <Container>
          <div className="mb-10">
            <h2
              id="next-steps-heading"
              className="text-xs font-body font-semibold text-gold tracking-widest uppercase"
              style={{ letterSpacing: '0.12em' }}
            >
              What happens next
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {nextSteps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className="font-heading text-3xl font-bold text-blush"
                    style={{ letterSpacing: '-0.03em' }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-blush/40" aria-hidden="true" />
                </div>
                <h3
                  className="font-heading text-lg text-burgundy font-bold"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {step.heading}
                </h3>
                <p className="text-sm font-body text-burgundy/65 leading-prose">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FORM ── */}
      <section
        id="book"
        className="py-16 md:py-20 bg-cream-dark"
        aria-labelledby="contact-form-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="flex flex-col gap-6 lg:pt-2">
              <h2
                id="contact-form-heading"
                className="font-heading text-2xl md:text-3xl text-burgundy"
                style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}
              >
                Book an introductory call.
              </h2>
              <Divider />
              <p className="text-sm font-body text-burgundy/70 leading-prose">
                Share your details below and we will be in touch to schedule a 20-minute
                introductory conversation.
              </p>
              <p className="text-xs font-body text-burgundy/50">
                All inquiries are handled with complete discretion.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <p className="text-xs font-body text-burgundy/60">Response within one business day</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <p className="text-xs font-body text-burgundy/60">No obligation, no pressure</p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
