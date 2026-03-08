'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Approach', href: '/approach' },
  { label: 'Values', href: '/values' },
  { label: 'Executive Brief', href: '/executive-brief' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-blush/40 shadow-[0_2px_12px_rgba(94,37,51,0.06)]'
          : 'bg-cream/90 backdrop-blur-sm border-b border-blush/20'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-container px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-[72px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
          aria-label="Optivara Group — Home"
        >
          <Image
            src="/images/logo-inline.jpeg"
            alt="Optivara Group"
            width={180}
            height={44}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-xs font-body tracking-wide transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 rounded-sm
                  ${
                    isActive
                      ? 'text-burgundy font-semibold'
                      : 'text-burgundy/70 hover:text-burgundy font-medium'
                  }`}
                style={{ letterSpacing: '0.04em', fontWeight: isActive ? 600 : 500 }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact#book"
            className="px-5 py-2.5 text-xs font-body font-semibold text-burgundy border border-burgundy/60
              hover:bg-blush-light hover:border-burgundy active:bg-blush transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
          >
            Book Intro Call
          </Link>
          <Link
            href="/executive-brief"
            className="px-5 py-2.5 text-xs font-body font-semibold bg-burgundy text-cream border border-burgundy
              hover:bg-burgundy-dark hover:border-burgundy-dark active:bg-burgundy-dark transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
          >
            Request Executive Brief
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2 -mr-2
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-5 h-px bg-burgundy transition-transform duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-burgundy transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-burgundy transition-transform duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-cream border-t border-blush/30`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 text-sm font-body border-b border-blush/30 last:border-0
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1
                  ${isActive ? 'text-burgundy font-semibold' : 'text-burgundy/75 font-medium hover:text-burgundy'}`}
                style={{ fontWeight: isActive ? 600 : 500 }}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="/contact#book"
              className="w-full text-center py-3 text-sm font-body font-semibold text-burgundy border border-burgundy
                hover:bg-blush-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{ borderRadius: '3px' }}
              tabIndex={mobileOpen ? 0 : -1}
            >
              Book Intro Call
            </Link>
            <Link
              href="/executive-brief"
              className="w-full text-center py-3 text-sm font-body font-semibold bg-burgundy text-cream border border-burgundy
                hover:bg-burgundy-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{ borderRadius: '3px' }}
              tabIndex={mobileOpen ? 0 : -1}
            >
              Request Executive Brief
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
