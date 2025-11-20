import React from 'react';
import { AudioWaveform } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <AudioWaveform className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Free Demo</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <span className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-indigo-600 cursor-pointer">Product</span>
              <span className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-indigo-600 cursor-pointer">Solutions</span>
              <span className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-indigo-600 cursor-pointer">Documentation</span>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};