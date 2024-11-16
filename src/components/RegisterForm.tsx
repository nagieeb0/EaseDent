import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';

// Remove Google Maps imports as we'll use a simpler location input for now
interface RegisterFormProps {
  userType: 'clinic' | 'jobseeker';
  onClose: () => void;
}

type Step = {
  id: string;
  title: string;
};

const clinicSteps: Step[] = [
  { id: 'general', title: 'General Information' },
  { id: 'pricing', title: 'Pricing & Scheduling' },
  { id: 'staffing', title: 'Staffing' },
  { id: 'management', title: 'Clinic Management' },
];

const jobSeekerSteps: Step[] = [
  { id: 'personal', title: 'Personal Information' },
  { id: 'professional', title: 'Professional Details' },
  { id: 'preferences', title: 'Job Preferences' },
];

const specializations = [
  'General Dentistry',
  'Orthodontics',
  'Periodontics',
  'Endodontics',
  'Oral Surgery',
  'Pediatric Dentistry',
  'Prosthodontics',
  'Cosmetic Dentistry',
];

const workingDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function RegisterForm({ userType, onClose }: RegisterFormProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = userType === 'clinic' ? clinicSteps : jobSeekerSteps;

  const [formData, setFormData] = useState(
    userType === 'clinic' 
      ? {
          fullName: '',
          clinicName: '',
          address: '',
          city: '',
          country: '',
          experience: '',
          specializations: [] as string[],
          pricingMethod: '',
          treatmentDuration: '',
          workingDays: [] as string[],
          workingHours: { start: '', end: '' },
          staffCount: '',
          staffRoles: [] as string[],
          hiringPlans: false,
          clinicCount: '',
          software: '',
          challenges: '',
        }
      : {
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          specializations: [] as string[],
          preferredLocations: [] as string[],
          expectedSalary: '',
          availability: '',
          resume: null as File | null,
        }
  );

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement form submission to backend
      console.log('Submitting form data:', formData);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderClinicForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Clinic Name
              </label>
              <input
                type="text"
                value={formData.clinicName}
                onChange={(e) => handleInputChange('clinicName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Street address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>
        );
      // Add other clinic form steps...
      default:
        return null;
    }
  };

  const renderJobSeekerForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>
        );
      // Add other job seeker form steps...
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <nav aria-label="Progress">
          <ol className="flex items-center">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={cn(
                  index !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                  'relative'
                )}
              >
                <div className="flex items-center">
                  <div
                    className={cn(
                      'h-8 w-8 rounded-full flex items-center justify-center',
                      currentStep > index
                        ? 'bg-primary-600'
                        : currentStep === index
                        ? 'border-2 border-primary-600'
                        : 'border-2 border-gray-300'
                    )}
                  >
                    <span
                      className={cn(
                        'text-sm font-medium',
                        currentStep > index
                          ? 'text-white'
                          : currentStep === index
                          ? 'text-primary-600'
                          : 'text-gray-500'
                      )}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p
                      className={cn(
                        'text-sm font-medium',
                        currentStep >= index ? 'text-primary-600' : 'text-gray-500'
                      )}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={cn(
                      'absolute top-4 w-full h-0.5',
                      currentStep > index ? 'bg-primary-600' : 'bg-gray-300'
                    )}
                  />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {userType === 'clinic' ? renderClinicForm() : renderJobSeekerForm()}

        <div className="flex justify-between pt-5">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type={currentStep === steps.length - 1 ? 'submit' : 'button'}
            onClick={currentStep === steps.length - 1 ? undefined : handleNext}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
}