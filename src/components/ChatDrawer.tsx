import React from 'react';
import { X } from 'lucide-react';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatDrawer({ isOpen, onClose }: ChatDrawerProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 w-full sm:w-[420px] max-w-full ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Chat Consultant</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-xl sm:text-2xl leading-none min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="h-full pb-16 sm:pb-20">
        <iframe 
          src="https://app.skillie.ai/chatbot-embed/198/prompt/619" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allow="clipboard-write; microphone;"
          title="Chat Consultant"
        />
      </div>
    </div>
  );
}