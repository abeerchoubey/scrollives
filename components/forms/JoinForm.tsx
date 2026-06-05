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
      // Redirect to Discord after a short delay so the user sees the success state
      setTimeout(() => {
        window.open('https://discord.gg/DzDE3UnYgH', '_blank', 'noopener,noreferrer')
      }, 2500)
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
            className="rounded-2xl bg-olive p-10 sm:p-14 text-center"
          >
            <div className="text-5xl mb-5">🌱</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-bone mb-4">You&apos;re in.</h2>
            <p className="text-bone/65 leading-relaxed mb-8 max-w-sm mx-auto">
              We&apos;ve received your message. Join our Discord server to meet the
              community, find your chapter, and start your journey.
            </p>
            <motion.a
              href="https://discord.gg/DzDE3UnYgH"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl
                         bg-[#5865F2] text-white font-semibold text-lg
                         shadow-lg hover:shadow-xl hover:bg-[#4752C4]
                         transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
              </svg>
              Join our Discord server
            </motion.a>
            <p className="text-bone/35 text-xs mt-5">Redirecting automatically in a few seconds…</p>
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
