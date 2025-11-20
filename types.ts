import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vapi-widget': {
        'assistant-id': string;
        'public-key': string;
        [key: string]: any;
      };
      // Allow any other element to resolve (fixes missing standard HTML tags)
      [elem: string]: any;
    }
  }
}