'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormMessageProps {
  type:    'success' | 'error'
  message: string
}

export default function FormMessage({ type, message }: FormMessageProps) {
  const isSuccess = type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0,  scale: 1     }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'flex items-start gap-3 rounded-xl p-4 text-sm',
        isSuccess
          ? 'bg-olive/8 border border-olive/20 text-olive'
          : 'bg-warm/8 border border-warm/20 text-warm-600',
      ].join(' ')}
    >
      {isSuccess
        ? <CheckCircle size={18} className="mt-0.5 shrink-0 text-olive" />
        : <AlertCircle size={18} className="mt-0.5 shrink-0 text-warm" />
      }
      <span>{message}</span>
    </motion.div>
  )
}
