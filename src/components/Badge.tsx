interface Props { label: string }

export const Badge = ({ label }: Props) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full
    bg-indigo-500/10 text-indigo-400 border border-indigo-500/20
    hover:bg-indigo-500/20 transition-colors cursor-default">
    {label}
  </span>
);
