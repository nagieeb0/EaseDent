import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';
import DentalLogo from './DentalLogo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <DentalLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                EaseDent
              </span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-center md:text-left">
              Empowering dental professionals with smart solutions
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Features
              </a>
              <br />
              <a href="#ai-solutions" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                AI Solutions
              </a>
              <br />
              <a href="#career" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Career
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Developer Contact
            </h3>
            <div className="space-y-3">
              <a href="mailto:Nagieeb96@gmail.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Mail className="h-5 w-5" />
                <span>Nagieeb96@gmail.com</span>
              </a>
              <a href="tel:+201141465543" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Phone className="h-5 w-5" />
                <span>+201141465543</span>
              </a>
              <a href="https://github.com/yourusername" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} EaseDent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}