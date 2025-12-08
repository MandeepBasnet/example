import React from 'react';
import { cn } from '../utils/cn';

export const FundoraLogo = ({ className, invert = false }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <img 
      src="/Fund Rising Finance Invesment Logo (1).png" 
      alt="Fundora Logo" 
      className="h-16 w-auto object-contain"
    />
  </div>
);
