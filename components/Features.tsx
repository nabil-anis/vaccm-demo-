import React from 'react';
import { Zap, ShieldCheck, Sparkles, Globe } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      name: 'Real-time Latency',
      description: 'Experience ultra-low latency voice interactions that feel instant and natural.',
      icon: Zap,
    },
    {
      name: 'Secure & Private',
      description: 'Your voice data is processed securely with enterprise-grade privacy standards.',
      icon: ShieldCheck,
    },
    {
      name: 'Intelligent Context',
      description: 'The assistant remembers context throughout the conversation for better responses.',
      icon: Sparkles,
    },
    {
      name: 'Global Availability',
      description: 'Deployed on the edge, ensuring reliable access from anywhere in the world.',
      icon: Globe,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to build voice AI
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This demo showcases the core capabilities of modern Voice AI agents. From interruption handling to emotion detection.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start">
                <div className="rounded-lg bg-indigo-600 p-2 ring-1 ring-indigo-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-slate-900">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-slate-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};