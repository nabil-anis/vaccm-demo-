import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      
      {/* Main Content Area - Centered */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center pb-32">
        <div className="w-full max-w-md space-y-8">
          
          {/* Icon / Brand Mark */}
          <div className="mx-auto w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-slate-200 rotate-3 hover:rotate-6 transition-transform duration-300 border border-slate-100">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full opacity-20 blur-lg"></div>
              <svg 
                className="relative w-10 h-10 text-slate-800" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Free Demo
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xs mx-auto">
              Choose how you want to connect. Use <strong>Voice</strong> on the left or <strong>Chat</strong> on the right.
            </p>
          </div>

        </div>
      </main>

      {/* Persistent Bottom Bar - Dual Labels */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-t border-slate-200 px-4 py-4 pb-8 sm:pb-6 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-14">
          
          {/* LEFT: Voice Label */}
          <div className="flex items-center gap-4 pl-16 sm:pl-20 transition-opacity duration-500">
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Voice</span>
              <span className="text-xs font-medium text-slate-400">Tap to speak</span>
            </div>
          </div>

          {/* Center Divider (Desktop only) */}
          <div className="hidden sm:block w-px h-8 bg-slate-200 mx-4"></div>

          {/* RIGHT: Chat Label */}
          <div className="flex items-center gap-4 pr-16 sm:pr-20 transition-opacity duration-500">
            <div className="flex flex-col items-end text-right">
              <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Chat</span>
              <span className="text-xs font-medium text-slate-400">Type to chat</span>
            </div>
          </div>

        </div>
      </div>

      {/* WIDGET 1: VOICE (Bottom Left) */}
      <vapi-widget 
        public-key="c67177dc-9ee2-4ba0-a69d-beacc25a56ff"
        assistant-id="16ec4ca8-3658-4902-87ec-117ead96fa70"
        mode="voice"
        theme="dark"
        base-bg-color="#000000"
        accent-color="#4f46e5" 
        cta-button-color="#4f46e5"
        cta-button-text-color="#ffffff"
        border-radius="large"
        size="full"
        position="bottom-left" 
        title="Voice Assistant"
        start-button-text="Start Call"
        end-button-text="End Call"
        chat-first-message="Hey, How can I help you today?"
        chat-placeholder="Type your message..."
        voice-show-transcript="true"
        consent-required="true"
        consent-title="Terms and conditions"
        consent-content='By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.'
        consent-storage-key="vapi_widget_consent_voice"
      ></vapi-widget>

      {/* WIDGET 2: CHAT (Bottom Right) */}
      <vapi-widget
        public-key="c67177dc-9ee2-4ba0-a69d-beacc25a56ff"
        assistant-id="16ec4ca8-3658-4902-87ec-117ead96fa70"
        mode="chat"
        theme="dark"
        base-bg-color="#000000"
        accent-color="#14B8A6"
        cta-button-color="#000000"
        cta-button-text-color="#ffffff"
        border-radius="large"
        size="full"
        position="bottom-right"
        title="TALK WITH AI"
        start-button-text="Start"
        end-button-text="End Call"
        chat-first-message="Hey, How can I help you today?"
        chat-placeholder="Type your message..."
        voice-show-transcript="true"
        consent-required="true"
        consent-title="Terms and conditions"
        consent-content='By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.'
        consent-storage-key="vapi_widget_consent"
      ></vapi-widget>
    </div>
  );
};

export default App;