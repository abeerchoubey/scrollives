'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase }         from '@/lib/supabase'
import { teenSignupSchema } from '@/lib/validations'
import Button      from '@/components/ui/Button'
import Input       from '@/components/ui/Input'
import Label       from '@/components/ui/Label'
import Chip        from '@/components/ui/Chip'
import FormMessage from '@/components/ui/FormMessage'

const GOALS = [
  'Read more',
  'Draw',
  'New hobbies',
  'Gym',
  'Eating clean',
  'Meeting new friends',
  'Find purpose in life',
  'Other',
]

const ease = [0.16, 1, 0.3, 1] as const

type ContactMethod = 'whatsapp' | 'instagram' | 'other'

interface FormState {
  full_name:         string
  preferred_contact: ContactMethod
  whatsapp:          string
  instagram:         string
  goals:             string[]
  how_found:         string
}

export default function JoinForm() {
  const [form, setForm] = useState<FormState>({
    full_name:         '',
    preferred_contact: 'whatsapp',
    whatsapp:          '',
    instagram:         '',
    goals:             [],
    how_found:         '',
  })
  const [errors,      setErrors]      = useState<Record<string, string>>({})
  const [submitting,  setSubmitting]  = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [submitError, setSubmitError] = useState('')

  const set = (field: keyof FormState, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const toggleGoal = (goal: string) =>
    set('goals',
      form.goals.includes(goal)
        ? form.goals.filter((g) => g !== goal)
        : [...form.goals, goal]
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitError('')

    const result = teenSignupSchema.safeParse({
      ...form,
      whatsapp:  form.whatsapp  || undefined,
      instagram: form.instagram || undefined,
      how_found: form.how_found || undefined,
    })

    if (!result.success) {
      const fe: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        const key = (err.path[0] as string) || 'contact_details'
        fe[key] = err.message
      })
      setErrors(fe)
      return
    }

    setSubmitting(true)
    try {
      const { error } = await supabase.from('teen_signups').insert([result.data])
      if (error) {
        console.error('Supabase insert failed:', error)
        throw error
      }
      setSubmitted(true)
    } catch (err: any) {
      setSubmitError(`DB Error: ${err.message || 'Permission denied. Please run the SQL artifact.'}`)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-20 px-6 bg-clay">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            transition={{ duration: 0.6, ease }}
            className="rounded-2xl bg-olive p-10 text-center"
          >
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="font-serif text-3xl text-bone mb-3">You&apos;re in.</h2>
            <p className="text-bone/65 leading-relaxed">
              We&apos;ve received your message. Someone from ScrollLives will reach
              out to you soon. In the meantime — put your phone down and do one
              thing you love.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6 bg-clay">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-xl bg-bone rounded-2xl p-8 sm:p-10
                   border border-olive/8 shadow-sm"
      >
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Full Name */}
          <div>
            <Label htmlFor="full_name" required>Full Name</Label>
            <Input
              id="full_name"
              placeholder="Your name"
              value={form.full_name}
              onChange={(e) => set('full_name', e.target.value)}
              error={errors.full_name}
            />
          </div>

          {/* Contact Method */}
          <div>
            <Label required>Preferred contact method</Label>
            <div className="flex gap-3 flex-wrap">
              {(['whatsapp', 'instagram', 'other'] as ContactMethod[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => set('preferred_contact', m)}
                  className={[
                    'px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200',
                    form.preferred_contact === m
                      ? 'bg-olive text-bone border-olive'
                      : 'bg-white text-olive/70 border-olive/20 hover:border-olive/40',
                  ].join(' ')}
                >
                  {m === 'whatsapp' ? 'WhatsApp' : m === 'instagram' ? 'Instagram' : 'Other'}
                </button>
              ))}
            </div>
          </div>

          {/* Conditional contact fields */}
          <AnimatePresence mode="wait">
            {form.preferred_contact === 'whatsapp' && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Label htmlFor="whatsapp" required>WhatsApp number</Label>
                <Input
                  id="whatsapp"
                  placeholder="+91 98765 43210"
                  value={form.whatsapp}
                  onChange={(e) => set('whatsapp', e.target.value)}
                  error={errors.whatsapp || errors.contact_details}
                />
              </motion.div>
            )}
            {form.preferred_contact === 'instagram' && (
              <motion.div
                key="instagram"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Label htmlFor="instagram" required>Instagram handle</Label>
                <Input
                  id="instagram"
                  placeholder="@yourhandle"
                  value={form.instagram}
                  onChange={(e) => set('instagram', e.target.value)}
                  error={errors.instagram || errors.contact_details}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Goals */}
          <div>
            <Label required>Things you want to start doing</Label>
            {errors.goals && (
              <p className="mb-2 text-xs text-warm-500">{errors.goals}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {GOALS.map((goal) => (
                <Chip
                  key={goal}
                  label={goal}
                  selected={form.goals.includes(goal)}
                  onToggle={() => toggleGoal(goal)}
                />
              ))}
            </div>
          </div>

          {/* How found */}
          <div>
            <Label htmlFor="how_found">How did you find us?</Label>
            <Input
              id="how_found"
              placeholder="Instagram, friend, school…"
              value={form.how_found}
              onChange={(e) => set('how_found', e.target.value)}
            />
          </div>

          {/* Submit error */}
          {submitError && (
            <FormMessage type="error" message={submitError} />
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={submitting}
            className="w-full"
          >
            Join ScrollLives
          </Button>
        </form>
      </motion.div>
    </section>
  )
}
