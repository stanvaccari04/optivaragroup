import { ReactNode } from 'react'
import MountainIcon from './MountainIcon'

interface PillarCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export default function PillarCard({ title, description, icon }: PillarCardProps) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-cream-dark border border-blush/40">
      <div className="flex items-center gap-3">
        {icon || <MountainIcon size={28} />}
      </div>
      <h3
        className="text-xl font-heading font-bold text-burgundy"
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </h3>
      <p className="text-sm font-body text-burgundy/75 leading-prose">{description}</p>
    </div>
  )
}
