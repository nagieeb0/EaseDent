import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface StepIndicatorProps {
  steps: { id: string; title: string }[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav className="mb-8">
      <ol className="flex items-center w-full">
        {steps.map((step, index) => (
          <li
            key={step.id}
            className={cn(
              'flex items-center',
              index !== steps.length - 1 ? 'w-full' : ''
            )}
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: currentStep >= index ? 1 : 0.8,
                  opacity: 1 
                }}
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-full transition-colors',
                  currentStep > index
                    ? 'bg-primary text-white'
                    : currentStep === index
                    ? 'border-2 border-primary text-primary'
                    : 'border-2 border-gray-300 text-gray-300'
                )}
              >
                {index + 1}
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn(
                  'mt-2 text-sm font-medium',
                  currentStep >= index ? 'text-primary' : 'text-gray-500'
                )}
              >
                {step.title}
              </motion.span>
            </div>
            {index !== steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: currentStep > index ? 1 : 0,
                  originX: 0 
                }}
                transition={{ duration: 0.5 }}
                className="w-full h-0.5 mx-2 bg-primary"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}