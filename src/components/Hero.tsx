import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Brain, Calendar, LineChart, ShoppingBag } from 'lucide-react';
import RegisterModal from './RegisterModal';

export default function Hero() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const features = [
    { icon: Calendar, label: 'Clinic Management', href: '#clinic-management', hoverText: 'Streamline Your Practice' },
    { icon: Brain, label: 'AI Solutions', href: '#ai-solutions', hoverText: 'AI-Powered Pricing & Analytics' },
    { icon: LineChart, label: 'Career Growth', href: '#career-development', hoverText: 'Advance Your Career' },
    { icon: ShoppingBag, label: 'Dental Shopping', href: '#dental-shopping', hoverText: 'Premium Supplies' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-primary/5 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-gray-900 dark:text-white block mb-2">
              {t('hero.title1')}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {t('hero.subtitle')}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 blur transition-opacity group-hover:opacity-75" />
            </button>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {features.map(({ icon: Icon, label, href, hoverText }) => (
              <button
                key={label}
                onClick={() => scrollToSection(href)}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 transition-transform group-hover:scale-125" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary-600 dark:text-primary-400 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {label}
                </span>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {hoverText}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}