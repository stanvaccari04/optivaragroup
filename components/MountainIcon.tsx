interface MountainIconProps {
  className?: string
  size?: number
}

export default function MountainIcon({ className = '', size = 32 }: MountainIconProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.75)}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 22L10 6L15.5 14.5L20 8L31 22"
        stroke="#A88875"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 22L10 14L14 20"
        stroke="#A88875"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  )
}
