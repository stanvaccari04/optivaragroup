'use client'

import { useState, FormEvent } from 'react'
import Input from './Input'
import Textarea from './Textarea'

interface FormData {
  name: string
  email: string
  company: string
  role: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  role?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!formData.name.trim()) errs.name = 'Name is required.'
    if (!formData.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.company.trim()) errs.company = 'Company is required.'
    if (!formData.role.trim()) errs.role = 'Role is required.'
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    setServerError('')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact' }),
      })
      const data = await res.json()
      if (data.ok) {
        setSubmitted(true)
      } else {
        setServerError('Something went wrong. Please try again.')
      }
    } catch {
      setServerError('Unable to submit. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        className="py-12 px-8 text-center border border-blush/40 bg-cream-dark"
        role="status"
        aria-live="polite"
        style={{ borderRadius: '3px' }}
      >
        <div className="flex justify-center mb-5">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="18" cy="18" r="17" stroke="#A88875" strokeWidth="1.5" />
            <path
              d="M11 18L15.5 22.5L25 13"
              stroke="#A88875"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-burgundy mb-3">
          Message received.
        </h3>
        <p className="text-sm font-body text-burgundy/70 max-w-sm mx-auto leading-prose">
          We will review your message and be in touch shortly to schedule a conversation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="contact-name"
          name="name"
          label="Full name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          autoComplete="name"
          placeholder="Your name"
        />
        <Input
          id="contact-email"
          name="email"
          label="Work email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
        <Input
          id="contact-company"
          name="company"
          label="Company"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
          required
          autoComplete="organization"
          placeholder="Organization name"
        />
        <Input
          id="contact-role"
          name="role"
          label="Role / Title"
          value={formData.role}
          onChange={handleChange}
          error={errors.role}
          required
          autoComplete="organization-title"
          placeholder="CEO, CFO, COO..."
        />
        <div className="md:col-span-2">
          <Textarea
            id="contact-message"
            name="message"
            label="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your situation or what you are looking to achieve..."
          />
        </div>
      </div>

      {serverError && (
        <p className="mt-4 text-xs font-body text-burgundy font-medium" role="alert">
          {serverError}
        </p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3.5 bg-burgundy text-cream text-sm font-body font-semibold border border-burgundy
            hover:bg-burgundy-dark hover:border-burgundy-dark active:bg-burgundy-dark
            disabled:opacity-60 disabled:cursor-not-allowed
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          style={{ borderRadius: '3px', letterSpacing: '0.02em' }}
          aria-busy={submitting}
        >
          {submitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
      <p className="mt-3 text-xs font-body text-burgundy/40">
        All inquiries are handled with complete discretion.
      </p>
    </form>
  )
}
