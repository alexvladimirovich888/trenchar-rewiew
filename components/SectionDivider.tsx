import React from 'react';

interface SectionDividerProps {
  title: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
  return (
    <div className="w-full my-8">
      <div className="w-full h-1 bg-black mb-1"></div>
      <div className="w-full h-2 bg-black mb-2"></div>
      <h2 className="font-bureaucracy font-bold text-xl uppercase tracking-widest text-black mb-2">
        {title}
      </h2>
      <div className="w-full h-[1px] bg-black"></div>
    </div>
  );
};