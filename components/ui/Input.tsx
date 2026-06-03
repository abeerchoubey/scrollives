'use client'

import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export default function Input({ error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        className={[
          'w-full rounded-lg border bg-white px-4 py-3',
          'font-sans text-sm text-olive placeholder:text-olive/40',
          'transition-all duration-200',
          error
            ? 'border-warm/60 focus:border-warm focus:ring-2 focus:ring-warm/10'
            : 'border-olive/15 focus:border-olive/40 focus:ring-2 focus:ring-olive/8',
          className,
        ].join(' ')}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-xs text-warm-500">{error}</p>
      )}
    </div>
  )
}
