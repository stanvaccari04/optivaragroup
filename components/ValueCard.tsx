interface ValueCardProps {
  number: string
  title: string
  description: string
}

export default function ValueCard({ number, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col gap-3 py-8 border-t border-blush/50">
      <div className="flex items-baseline gap-4">
        <span
          className="text-xs font-body font-semibold text-gold tracking-widest"
          style={{ fontWeight: 600 }}
        >
          {String(number).padStart(2, '0')}
        </span>
        <h3
          className="text-lg font-heading font-bold text-burgundy"
          style={{ letterSpacing: '-0.01em' }}
        >
          {title}
        </h3>
      </div>
      <p className="text-sm font-body text-burgundy/70 leading-prose pl-0 md:pl-8">
        {description}
      </p>
    </div>
  )
}
