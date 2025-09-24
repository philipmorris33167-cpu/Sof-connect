import React from 'react';
import { X } from 'lucide-react';

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimulatorModal({ isOpen, onClose }: SimulatorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 w-full h-full">
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
        <button
          onClick={onClose}
          className="p-2 sm:p-3 bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-md min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
        </button>
      </div>
      
      <iframe 
        src="https://app.skillie.ai/chatbot-embed/198/prompt/620" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        loading="lazy" 
        allow="clipboard-write; microphone;"
        title="One-on-One Simulator"
      />
    </div>
  );
}