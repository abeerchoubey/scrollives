'use client'

import { motion } from 'framer-motion'

interface ChipProps {
  label:    string
  selected: boolean
  onToggle: () => void
}

export default function Chip({ label, selected, onToggle }: ChipProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={[
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium',
        'border transition-colors duration-200 select-none',
        selected
          ? 'bg-olive text-bone border-olive'
          : 'bg-white text-olive/70 border-olive/20 hover:border-olive/40 hover:text-olive',
      ].join(' ')}
    >
      {selected && (
        <span className="mr-1.5 text-warm-200">✓</span>
      )}
      {label}
    </motion.button>
  )
}
