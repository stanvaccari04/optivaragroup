interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: SelectOption[]
  error?: string
  required?: boolean
  placeholder?: string
}

export default function Select({
  id,
  name,
  label,
  value,
  onChange,
  options,
  error,
  required = false,
  placeholder = 'Select an option...',
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-body font-semibold text-burgundy/80 tracking-wide"
        style={{ letterSpacing: '0.03em' }}
      >
        {label}
        {required && (
          <span className="ml-1 text-gold" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? 'true' : undefined}
          className={`w-full appearance-none px-4 py-3 bg-cream border text-sm font-body text-burgundy
            transition-colors duration-200 cursor-pointer
            focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-1
            ${!value ? 'text-burgundy/40' : 'text-burgundy'}
            ${error ? 'border-burgundy/60 bg-blush/20' : 'border-blush hover:border-blush-dark focus:border-gold'}`}
          style={{ borderRadius: '3px' }}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom chevron */}
        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L6 6.5L11 1"
              stroke="#A88875"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs font-body text-burgundy font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
