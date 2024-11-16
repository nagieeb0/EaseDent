import { z } from 'zod';

export const clinicSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  clinicName: z.string().min(2, 'Clinic name is required'),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  experience: z.string().min(1, 'Years of experience is required'),
  specializations: z.array(z.string()).min(1, 'Select at least one specialization'),
  pricingMethod: z.string().min(1, 'Select a pricing method'),
  treatmentDuration: z.string().min(1, 'Treatment duration is required'),
  workingDays: z.array(z.string()).min(1, 'Select at least one working day'),
  workingHours: z.object({
    start: z.string().min(1, 'Start time is required'),
    end: z.string().min(1, 'End time is required'),
  }),
  staffCount: z.string().min(1, 'Staff count is required'),
  staffRoles: z.array(z.string()),
  hiringPlans: z.boolean(),
  clinicCount: z.string().min(1, 'Number of clinics is required'),
  software: z.string(),
  challenges: z.string(),
});

export const jobSeekerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  experience: z.string().min(1, 'Years of experience is required'),
  specializations: z.array(z.string()).min(1, 'Select at least one specialization'),
  preferredLocations: z.array(z.string()).min(1, 'Select at least one preferred location'),
  expectedSalary: z.string().min(1, 'Expected salary is required'),
  availability: z.string().min(1, 'Availability is required'),
  resume: z.any().optional(),
});