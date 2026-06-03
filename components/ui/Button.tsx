'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

type Variant = 'primary' | 'secondary' | 'warm' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'variant'> {
  variant?: Variant
  size?:    Size
  loading?: boolean
  href?:    string
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-olive text-bone border border-olive hover:bg-olive-500',
  secondary: 'bg-transparent text-olive border border-olive hover:bg-olive hover:text-bone',
  warm:      'bg-warm text-bone border border-warm hover:bg-warm-500',
  ghost:     'bg-transparent text-olive border border-transparent hover:bg-clay',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant  = 'primary',
  size     = 'md',
  loading  = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <motion.button
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled  ? { scale: 0.98 } : {}}
      transition={{ duration: 0.15 }}
      disabled={isDisabled}
      className={[
        'inline-flex items-center justify-center gap-2',
        'rounded-lg font-sans font-medium tracking-tight',
        'transition-colors duration-200',
        variantClasses[variant],
        sizeClasses[size],
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className,
      ].join(' ')}
      {...props}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Sending…
        </span>
      ) : children}
    </motion.button>
  )
}
