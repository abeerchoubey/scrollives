'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  placeholder?: string
  options: { value: string; label: string }[]
}

export default function SelectField({
  error,
  placeholder,
  options,
  className = '',
  ...props
}: SelectFieldProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <select
          className={[
            'w-full appearance-none rounded-lg border bg-white px-4 py-3 pr-10',
            'font-sans text-sm text-olive',
            'transition-all duration-200',
            error
              ? 'border-warm/60 focus:border-warm focus:ring-2 focus:ring-warm/10'
              : 'border-olive/15 focus:border-olive/40 focus:ring-2 focus:ring-olive/8',
            className,
          ].join(' ')}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-olive/40"
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-warm-500">{error}</p>}
    </div>
  )
}
