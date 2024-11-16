import React from 'react';
import { 
  Calendar, 
  CreditCard, 
  FileText, 
  PieChart,
  Brain,
  TrendingUp,
  MessageSquare,
  Target,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  ShoppingBag,
  Package,
  Truck,
  BadgePercent,
  Stethoscope,
  ShieldCheck,
  Clock,
  Tag
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();
  
  const features = [
    {
      title: 'Clinic Management',
      description: 'Comprehensive tools for running your practice efficiently',
      items: [
        { icon: Calendar, text: 'Smart Appointment Scheduling' },
        { icon: FileText, text: 'Digital Patient Records' },
        { icon: CreditCard, text: 'Integrated Billing System' },
        { icon: ShoppingBag, text: 'Dental Supply Management' }
      ]
    },
    {
      title: 'AI Solutions',
      description: 'Cutting-edge AI technology to optimize your practice',
      items: [
        { icon: Brain, text: 'Dynamic Pricing Engine' },
        { icon: TrendingUp, text: 'Predictive Analytics' },
        { icon: MessageSquare, text: 'Patient Feedback Analysis' },
        { icon: BadgePercent, text: 'Smart Inventory Optimization' }
      ]
    },
    {
      title: 'Career Development',
      description: 'Resources to advance your professional journey',
      items: [
        { icon: Briefcase, text: 'Job Matching System' },
        { icon: Award, text: 'Qualification Testing' },
        { icon: GraduationCap, text: 'Continuous Learning' },
        { icon: Package, text: 'Equipment Training' }
      ]
    },
    {
      title: 'Dental Shopping',
      description: 'Premium dental supplies and equipment at your fingertips',
      items: [
        { icon: Stethoscope, text: 'Professional Equipment' },
        { icon: ShieldCheck, text: 'Quality Assurance' },
        { icon: Clock, text: 'Express Delivery' },
        { icon: Tag, text: 'Exclusive Deals' }
      ]
    }
  ];

  return (
    <div className="py-24 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-32">
        {features.map((section, idx) => (
          <div key={section.title} className="scroll-mt-24" id={section.title.toLowerCase().replace(' ', '-')}>
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
                {section.description}
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.text} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200" />
                      <div className="relative p-6 bg-card ring-1 ring-border rounded-lg hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-card-foreground">{item.text}</h3>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}