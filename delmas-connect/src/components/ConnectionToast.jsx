import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ConnectionToast = ({ show, message = "Connection Secured with Yard" }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-24 md:bottom-20 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-auto bg-emerald-500 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-black text-[10px] md:text-xs shadow-2xl animate-bounce z-[110] flex items-center justify-center gap-2 uppercase tracking-tighter shadow-emerald-500/40">
      <CheckCircle2 size={14} /> 
      <span className="whitespace-nowrap">{message}</span>
    </div>
  );
};

export default ConnectionToast;

