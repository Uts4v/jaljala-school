/** Placeholder crest — replace with the official school logo when available. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Jaljala English Boarding School crest">
      <path d="M24 2 44 9v14c0 12-8.5 20-20 23C12.5 43 4 35 4 23V9Z" fill="var(--primary)" />
      <path d="M24 6 40 11.5V23c0 9.6-6.6 16.3-16 19-9.4-2.7-16-9.4-16-19V11.5Z" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
      <path d="M12 30 19 19l4 6 4-9 9 14Z" fill="var(--gold)" />
      <text x="24" y="38" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="var(--on-navy)" fontFamily="Inter, sans-serif" letterSpacing="1">JEBS</text>
    </svg>
  );
}
