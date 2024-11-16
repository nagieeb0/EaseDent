import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import RegisterForm from './RegisterForm';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const { t } = useTranslation();
  const [userType, setUserType] = React.useState<'clinic' | 'jobseeker' | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>

          {!userType ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                {t('register.selectType')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setUserType('clinic')}
                  className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('register.clinicOwner')}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('register.clinicOwnerDesc')}
                  </p>
                </button>
                <button
                  onClick={() => setUserType('jobseeker')}
                  className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('register.jobSeeker')}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('register.jobSeekerDesc')}
                  </p>
                </button>
              </div>
            </div>
          ) : (
            <RegisterForm userType={userType} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}