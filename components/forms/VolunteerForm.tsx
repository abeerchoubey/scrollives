'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase }         from '@/lib/supabase'
import { volunteerSchema }  from '@/lib/validations'
import Button      from '@/components/ui/Button'
import Input       from '@/components/ui/Input'
import Label       from '@/components/ui/Label'
import Chip        from '@/components/ui/Chip'
import FormMessage from '@/components/ui/FormMessage'

const TEAMS = [
  'Outreach & Public Speaking',
  'Digital Management Team',
  'Content creation',
  'Community support',
  'Other',
]

const ease = [0.16, 1, 0.3, 1] as const

type VolContactMethod = 'email' | 'whatsapp' | 'instagram'

interface FormState {
  full_name:         string
  age:               string
  preferred_contact: VolContactMethod
  email:             string
  whatsapp:          string
  instagram:         string
  city:              string
  team_interest:     string[]
}

export default function VolunteerForm() {
  const [form, setForm] = useState<FormState>({
    full_name:         '',
    age:               '',
    preferred_contact: 'email',
    email:             '',
    whatsapp:          '',
    instagram:         '',
    city:              '',
    team_interest:     [],
  })
  const [errors,      setErrors]      = useState<Record<string, string>>({})
  const [submitting,  setSubmitting]  = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [submitError, setSubmitError] = useState('')

  const set = (field: keyof FormState, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const toggleTeam = (team: string) =>
    set('team_interest',
      form.team_interest.includes(team)
        ? form.team_interest.filter((t) => t !== team)
        : [...form.team_interest, team]
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitError('')

    const result = volunteerSchema.safeParse({
      ...form,
      age:       Number(form.age),
      whatsapp:  form.whatsapp  || undefined,
      instagram: form.instagram || undefined,
    })

    if (!result.success) {
      const fe: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        const key = err.path[0] as string
        fe[key] = err.message
      })
      setErrors(fe)
      return
    }

    setSubmitting(true)
    try {
      const { error } = await supabase
        .from('volunteer_applications')
        .insert([result.data])
      if (error) {
        console.error('Supabase insert failed:', error)
        throw error
      }
      setSubmitted(true)
    } catch (err) {
      setSubmitError('Something went wrong. Please try again.')
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
            className="rounded-2xl bg-warm p-10 text-center"
          >
            <div className="text-4xl mb-4">✨</div>
            <h2 className="font-serif text-3xl text-bone mb-3">Welcome to the team.</h2>
            <p className="text-bone/70 leading-relaxed">
              Your application is in. The ScrollLives team will reach out to you
              soon. We&apos;re glad you&apos;re here.
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

          {/* Age */}
          <div>
            <Label htmlFor="age" required>Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="e.g. 17"
              min={13}
              max={100}
              value={form.age}
              onChange={(e) => set('age', e.target.value)}
              error={errors.age}
            />
          </div>

          {/* City */}
          <div>
            <Label htmlFor="city" required>City</Label>
            <Input
              id="city"
              placeholder="Mumbai, Delhi…"
              value={form.city}
              onChange={(e) => set('city', e.target.value)}
              error={errors.city}
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" required>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              error={errors.email}
            />
          </div>

          {/* Preferred contact */}
          <div>
            <Label required>Preferred contact method</Label>
            <div className="flex gap-3 flex-wrap">
              {(['email', 'whatsapp', 'instagram'] as VolContactMethod[]).map((m) => (
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
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Conditional contact detail fields */}
          <AnimatePresence>
            {form.preferred_contact === 'whatsapp' && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Label htmlFor="whatsapp">WhatsApp number</Label>
                <Input
                  id="whatsapp"
                  placeholder="+91 98765 43210"
                  value={form.whatsapp}
                  onChange={(e) => set('whatsapp', e.target.value)}
                  error={errors.whatsapp}
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
                <Label htmlFor="instagram">Instagram handle</Label>
                <Input
                  id="instagram"
                  placeholder="@yourhandle"
                  value={form.instagram}
                  onChange={(e) => set('instagram', e.target.value)}
                  error={errors.instagram}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Team interests */}
          <div>
            <Label required>Join ScrollLives Team</Label>
            {errors.team_interest && (
              <p className="mb-2 text-xs text-warm-500">{errors.team_interest}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {TEAMS.map((team) => (
                <Chip
                  key={team}
                  label={team}
                  selected={form.team_interest.includes(team)}
                  onToggle={() => toggleTeam(team)}
                />
              ))}
            </div>
          </div>

          {submitError && (
            <FormMessage type="error" message={submitError} />
          )}

          <Button
            type="submit"
            variant="warm"
            size="lg"
            loading={submitting}
            className="w-full"
          >
            Apply to volunteer
          </Button>
        </form>
      </motion.div>
    </section>
  )
}
