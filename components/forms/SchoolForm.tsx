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
            className="rounded-2xl bg-olive p-10 sm:p-14 text-center"
          >
            <div className="text-5xl mb-5">🎓</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-bone mb-4">We&apos;ll contact you ASAP.</h2>
            <p className="text-bone/65 leading-relaxed mb-8 max-w-sm mx-auto">
              Thank you for reaching out. Someone from the ScrollLives team will
              contact you as soon as possible. You can also join our Discord to
              talk directly with the team right now.
            </p>

            {/* Big Discord button */}
            <motion.a
              href="https://discord.gg/vbxDjkG9eU"
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
                         transition-all duration-300 w-full sm:w-auto justify-center mb-6"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
              </svg>
              Join our Discord to talk directly
            </motion.a>

            {/* Secondary contact links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/scrollives?igsh=djVwMDY2ZW93MjVh&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-bone/10 text-bone/70 text-sm font-medium
                           border border-bone/15 hover:bg-bone/15 hover:text-bone
                           transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a
                href="mailto:hello@scrollives.org"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-bone/10 text-bone/70 text-sm font-medium
                           border border-bone/15 hover:bg-bone/15 hover:text-bone
                           transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email us
              </a>
            </div>
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
