import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <span className="text-slate-400 hover:text-slate-500 cursor-pointer">Privacy Policy</span>
          <span className="text-slate-400 hover:text-slate-500 cursor-pointer">Terms</span>
          <span className="text-slate-400 hover:text-slate-500 cursor-pointer">Contact</span>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-slate-400">
            &copy; {new Date().getFullYear()} Free Demo Voice AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};