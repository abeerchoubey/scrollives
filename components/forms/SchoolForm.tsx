'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase }            from '@/lib/supabase'
import { schoolInquirySchema } from '@/lib/validations'
import Button      from '@/components/ui/Button'
import Input       from '@/components/ui/Input'
import Label       from '@/components/ui/Label'
import SelectField from '@/components/ui/SelectField'
import Chip        from '@/components/ui/Chip'
import FormMessage from '@/components/ui/FormMessage'

const INTERESTS = [
  'Getting a workshop',
  'ScrollLives talk demo',
  'Partnership',
  'Updates / events',
  'Other',
]

const ROLES = [
  { value: 'student',     label: 'Student'      },
  { value: 'teacher',     label: 'Teacher'      },
  { value: 'parent',      label: 'Parent'       },
  { value: 'school_staff', label: 'School Staff' },
  { value: 'counselor',   label: 'Counselor'    },
  { value: 'other',       label: 'Other'        },
]

const ease = [0.16, 1, 0.3, 1] as const

interface FormState {
  full_name:         string
  role:              string
  organisation_name: string
  city:              string
  interests:         string[]
  email:             string
}

export default function SchoolForm() {
  const [form, setForm] = useState<FormState>({
    full_name:         '',
    role:              '',
    organisation_name: '',
    city:              '',
    interests:         [],
    email:             '',
  })
  const [errors,      setErrors]      = useState<Record<string, string>>({})
  const [submitting,  setSubmitting]  = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [submitError, setSubmitError] = useState('')

  const set = (field: keyof FormState, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const toggleInterest = (interest: string) =>
    set('interests',
      form.interests.includes(interest)
        ? form.interests.filter((i) => i !== interest)
        : [...form.interests, interest]
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitError('')

    const result = schoolInquirySchema.safeParse(form)

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
      const { error } = await supabase.from('school_inquiries').insert([result.data])
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
            className="rounded-2xl bg-olive p-10 text-center"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h2 className="font-serif text-3xl text-bone mb-3">We&apos;ll be in touch.</h2>
            <p className="text-bone/65 leading-relaxed">
              Thank you for reaching out. Someone from the ScrollLives team will
              contact you within 2–3 days to discuss next steps.
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

          {/* Role */}
          <div>
            <Label htmlFor="role" required>Your role</Label>
            <SelectField
              id="role"
              placeholder="Select your role"
              options={ROLES}
              value={form.role}
              onChange={(e) => set('role', e.target.value)}
              error={errors.role}
            />
          </div>

          {/* Organisation Name */}
          <div>
            <Label htmlFor="organisation_name" required>Organisation / School Name</Label>
            <Input
              id="organisation_name"
              placeholder="School or organisation name"
              value={form.organisation_name}
              onChange={(e) => set('organisation_name', e.target.value)}
              error={errors.organisation_name}
            />
          </div>

          {/* City */}
          <div>
            <Label htmlFor="city" required>City</Label>
            <Input
              id="city"
              placeholder="Mumbai, Delhi, Bangalore…"
              value={form.city}
              onChange={(e) => set('city', e.target.value)}
              error={errors.city}
            />
          </div>

          {/* Interests */}
          <div>
            <Label required>Interested in</Label>
            {errors.interests && (
              <p className="mb-2 text-xs text-warm-500">{errors.interests}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  selected={form.interests.includes(interest)}
                  onToggle={() => toggleInterest(interest)}
                />
              ))}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" required>Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@school.edu"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              error={errors.email}
            />
          </div>

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
            Send enquiry
          </Button>
        </form>
      </motion.div>
    </section>
  )
}
