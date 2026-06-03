export type ContactMethod = 'whatsapp' | 'instagram' | 'other'

export type SchoolRole =
  | 'student'
  | 'teacher'
  | 'parent'
  | 'school_staff'
  | 'counselor'
  | 'other'

export type VolunteerContactMethod = 'email' | 'whatsapp' | 'instagram'

export interface TeenSignupData {
  full_name: string
  preferred_contact: ContactMethod
  whatsapp?: string
  instagram?: string
  goals: string[]
  how_found?: string
  status?: string
}

export interface SchoolInquiryData {
  full_name: string
  role: SchoolRole
  organisation_name: string
  city: string
  interests: string[]
  email: string
  status?: string
}

export interface VolunteerApplicationData {
  full_name: string
  age: number
  city: string
  preferred_contact: VolunteerContactMethod
  email: string
  whatsapp?: string
  instagram?: string
  team_interest: string[]
  status?: string
}
