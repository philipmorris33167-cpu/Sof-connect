import React from 'react';
import { X } from 'lucide-react';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
}

export function WelcomePopup({ isOpen, onClose, onGetStarted }: WelcomePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 w-full h-full">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-y-auto max-h-[90vh]" style={{ minHeight: '65vh' }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-600 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <div className="flex items-center justify-center h-full px-6 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12 text-center">
              Welcome to the One-on-One Meetings Guide
            </h1>
            
            {/* Content with better typography hierarchy */}
            <div className="space-y-6 sm:space-y-8 text-left">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                This interactive guide helps SOF Connect managers run effective One-on-One meetings.
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Explore Principles, understand Why, and master How.
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Practice live in the SIMULATOR and get instant feedback.
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                If you have any questions on the topics use the Chat Consultant in the bottom right.
              </p>
            </div>
            
            {/* Subtle call to action */}
            <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
              <p className="text-lg sm:text-xl text-gray-500 italic">
                Close this window to continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}