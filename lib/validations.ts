import { z } from 'zod'

export const teenSignupSchema = z
  .object({
    full_name:         z.string().min(2, 'Please enter your full name.'),
    preferred_contact: z.enum(['whatsapp', 'instagram', 'other']),
    whatsapp:          z.string().optional(),
    instagram:         z.string().optional(),
    goals:             z.array(z.string()).min(1, 'Please select at least one goal.'),
    how_found:         z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.preferred_contact === 'whatsapp') return !!data.whatsapp?.trim()
      if (data.preferred_contact === 'instagram') return !!data.instagram?.trim()
      return true
    },
    {
      message: 'Please fill in your contact details.',
      path:    ['contact_details'],
    }
  )

export const schoolInquirySchema = z.object({
  full_name:         z.string().min(2, 'Please enter your full name.'),
  role:              z.enum(['student', 'teacher', 'parent', 'school_staff', 'counselor', 'other']),
  organisation_name: z.string().min(2, 'Please enter your school or organisation.'),
  city:              z.string().min(2, 'Please enter your city.'),
  interests:         z.array(z.string()).min(1, 'Please select at least one interest.'),
  email:             z.string().email('Please enter a valid email address.'),
})

export const volunteerSchema = z.object({
  full_name:         z.string().min(2, 'Please enter your full name.'),
  age:               z.coerce.number().min(13, 'You must be at least 13.').max(100, 'Please enter a valid age.'),
  preferred_contact: z.enum(['email', 'whatsapp', 'instagram']),
  email:             z.string().email('Please enter a valid email address.'),
  whatsapp:          z.string().optional(),
  instagram:         z.string().optional(),
  city:              z.string().min(2, 'Please enter your city.'),
  team_interest:     z.array(z.string()).min(1, 'Please select at least one team.'),
})

export type TeenSignupInput       = z.infer<typeof teenSignupSchema>
export type SchoolInquiryInput    = z.infer<typeof schoolInquirySchema>
export type VolunteerInput        = z.infer<typeof volunteerSchema>
