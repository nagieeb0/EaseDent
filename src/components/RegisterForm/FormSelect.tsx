import React from 'react';
import Select, { Props as SelectProps } from 'react-select';
import { useTheme } from '../../context/ThemeContext';

interface FormSelectProps extends Omit<SelectProps, 'theme'> {
  label: string;
  error?: string;
}

export default function FormSelect({ label, error, ...props }: FormSelectProps) {
  const { theme } = useTheme();

  const customStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: theme === 'dark' ? '#1f2937' : 'white',
      borderColor: error ? '#ef4444' : '#d1d5db',
      '&:hover': {
        borderColor: error ? '#ef4444' : '#6366f1',
      },
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: theme === 'dark' ? '#1f2937' : 'white',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected
        ? theme === 'dark'
          ? '#4f46e5'
          : '#6366f1'
        : state.isFocused
        ? theme === 'dark'
          ? '#374151'
          : '#f3f4f6'
        : 'transparent',
      color: state.isSelected
        ? 'white'
        : theme === 'dark'
        ? '#e5e7eb'
        : '#1f2937',
    }),
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <Select
        {...props}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#6366f1',
            primary75: '#818cf8',
            primary50: '#a5b4fc',
            primary25: '#c7d2fe',
          },
        })}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}