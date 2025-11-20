import React from 'react';
import { Mic, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-32 space-y-24 lg:space-y-32">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-indigo-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-indigo-100" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden border border-slate-200 bg-white">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 mix-blend-multiply opacity-10"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                        <Mic className="w-24 h-24 text-indigo-600 mx-auto mb-6 opacity-80" />
                        <p className="text-lg font-medium text-slate-600">Interactive Voice Demo</p>
                        <p className="text-sm text-slate-400 mt-2">Click the widget to start</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-indigo-600 font-semibold tracking-wide uppercase mb-4">
                Voice Assistant
              </h2>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
                Experience the future of <span className="text-indigo-600">Conversation</span>.
              </h1>
              <div className="mt-6 text-slate-500 space-y-6">
                <p className="text-lg">
                  This is a live demonstration of Vapi technology. Engage with our AI assistant in real-time with natural, human-like responses. 
                </p>
                <p className="text-base leading-7">
                  Simply click the microphone icon or the widget button in the bottom right corner to begin speaking. The assistant can answer questions, provide information, and hold a fluid conversation.
                </p>
              </div>
              <div className="mt-10 border-t border-slate-200 pt-8 flex gap-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                  Learn More
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                  View Documentation <ArrowRight className="ml-2 w-4 h-4"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};