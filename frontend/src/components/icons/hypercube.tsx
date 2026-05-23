export function HypercubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="3.5,7 12,2 20.5,7 12,12" fill="currentColor" opacity="0.15" />
      <polygon points="3.5,7 12,12 12,22 3.5,17" fill="currentColor" opacity="0.25" />
      <polygon points="20.5,7 12,12 12,22 20.5,17" fill="currentColor" opacity="0.2" />
      <polygon
        points="12,2 20.5,7 20.5,17 12,22 3.5,17 3.5,7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="12" y1="12" x2="3.5" y2="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="20.5" y2="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
