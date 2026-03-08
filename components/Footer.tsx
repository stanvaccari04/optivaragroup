import Link from 'next/link'
import Image from 'next/image'
import MountainIcon from './MountainIcon'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Approach', href: '/approach' },
  { label: 'Values', href: '/values' },
  { label: 'Executive Brief', href: '/executive-brief' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-burgundy-dark text-cream/80" role="contentinfo">
      <div className="mx-auto max-w-container px-6 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-10 border-b border-cream/10">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo-stacked.jpeg"
              alt="Optivara Group"
              width={160}
              height={90}
              className="w-32 h-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-xs font-body leading-relaxed text-cream/60 max-w-xs">
              Health infrastructure for high-performing leaders.
            </p>
            <div className="flex items-center gap-2">
              <MountainIcon size={20} className="opacity-60" />
            </div>
          </div>

          {/* Nav column */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-body tracking-widest text-gold/70 uppercase mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              Navigation
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-cream/60 hover:text-cream transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 rounded-sm w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA column */}
          <div className="flex flex-col gap-5">
            <p
              className="text-xs font-body tracking-widest text-gold/70 uppercase mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              Get Started
            </p>
            <Link
              href="/executive-brief"
              className="inline-block px-6 py-3 text-xs font-body font-semibold bg-cream text-burgundy
                hover:bg-cream-dark transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 w-fit"
              style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
            >
              Request Executive Brief
            </Link>
            <Link
              href="/contact#book"
              className="inline-block px-6 py-3 text-xs font-body font-semibold border border-cream/40 text-cream/80
                hover:border-cream/70 hover:text-cream transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 w-fit"
              style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
            >
              Book Intro Call
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-xs font-body text-cream/40">
            &copy; {year} Optivara Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-xs font-body text-cream/40 hover:text-cream/70 transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 rounded-sm"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
