import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  slotName?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '', slotName = 'Advertisement' }) => {
  return (
    <div className={`relative bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-400 overflow-hidden min-h-[100px] ${className}`}>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <span className="text-xs uppercase tracking-widest font-semibold text-gray-300 z-10">Ad Space</span>
      <span className="text-sm font-medium text-gray-400 z-10">{slotName}</span>
      {/* 
        To implement real AdSense:
        1. Replace this component content with the <ins> tag provided by Google.
        2. Ensure the script is loaded in index.html
      */}
    </div>
  );
};

export default AdPlaceholder;