import mongoose from 'mongoose';

const dentistSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  clinicName: {
    type: String,
    required: true,
  },
  location: {
    type: {
      lat: Number,
      lng: Number,
    },
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  specializations: [{
    type: String,
  }],
  pricingMethod: String,
  treatmentDuration: String,
  workingDays: [{
    type: String,
  }],
  workingHours: {
    start: String,
    end: String,
  },
  staffCount: Number,
  staffRoles: [{
    type: String,
  }],
  hiringPlans: Boolean,
  clinicCount: Number,
  software: String,
  challenges: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Dentist = mongoose.model('Dentist', dentistSchema);