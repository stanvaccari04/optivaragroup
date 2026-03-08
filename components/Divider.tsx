interface DividerProps {
  className?: string
  width?: 'full' | 'short' | 'medium'
}

export default function Divider({ className = '', width = 'short' }: DividerProps) {
  const widthClass =
    width === 'full' ? 'w-full' : width === 'medium' ? 'w-24' : 'w-12'

  return (
    <div
      className={`${widthClass} h-px bg-gold ${className}`}
      role="separator"
      aria-hidden="true"
    />
  )
}
