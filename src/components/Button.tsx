import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  download?: boolean;
  external?: boolean;
}

export const Button = ({
  children, href, onClick, variant = 'primary', download, external,
}: Props) => {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5';

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20',
    outline: 'border border-neutral-700 hover:border-indigo-500/50 text-neutral-300 hover:text-white',
    ghost:   'text-neutral-400 hover:text-white',
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return <button onClick={onClick} className={className}>{children}</button>;
};
