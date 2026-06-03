import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export default function Label({ children, required, className = '', ...props }: LabelProps) {
  return (
    <label
      className={['block text-sm font-medium text-olive/80 mb-2', className].join(' ')}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-warm">*</span>}
    </label>
  )
}
