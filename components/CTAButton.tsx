import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function CTAButton({
  href,
  variant = 'primary',
  children,
  className = '',
  size = 'md',
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const variantClasses =
    variant === 'primary'
      ? 'bg-burgundy text-cream border border-burgundy hover:bg-burgundy-dark hover:border-burgundy-dark active:bg-burgundy-dark'
      : 'bg-transparent text-burgundy border border-burgundy hover:bg-blush-light active:bg-blush'

  return (
    <Link
      href={href}
      className={`
        inline-block font-body font-semibold tracking-wide
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
        ${sizeClasses[size]}
        ${variantClasses}
        ${className}
      `}
      style={{ borderRadius: '3px', fontWeight: 600, letterSpacing: '0.02em' }}
    >
      {children}
    </Link>
  )
}
