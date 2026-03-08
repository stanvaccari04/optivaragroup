interface TextareaProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  required?: boolean
  placeholder?: string
  rows?: number
}

export default function Textarea({
  id,
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  rows = 4,
}: TextareaProps) {
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
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : undefined}
        className={`w-full px-4 py-3 bg-cream border text-sm font-body text-burgundy placeholder:text-burgundy/30
          resize-none transition-colors duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-1
          ${error ? 'border-burgundy/60 bg-blush/20' : 'border-blush hover:border-blush-dark focus:border-gold'}`}
        style={{ borderRadius: '3px' }}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs font-body text-burgundy font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
