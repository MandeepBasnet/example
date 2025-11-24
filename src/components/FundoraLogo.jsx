import React from 'react';
import { cn } from '../utils/cn';

export const FundoraLogo = ({ className, invert = false }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <div className={cn("h-8 w-8 rounded-lg transform rotate-3 flex items-center justify-center font-bold text-lg", invert ? "bg-white text-blue-600" : "bg-blue-600 text-white")}>
      F
    </div>
    <span className={cn("font-bold text-xl tracking-tight", invert ? "text-white" : "text-slate-900")}>Fundora</span>
  </div>
);
