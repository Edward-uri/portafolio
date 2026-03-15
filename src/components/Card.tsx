import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: Props) => (
  <div className={`
    bg-neutral-900 border border-neutral-800 rounded-2xl p-6
    ${hover ? 'hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300' : ''}
    ${className}
  `}>
    {children}
  </div>
);
