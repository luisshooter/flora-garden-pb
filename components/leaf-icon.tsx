export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 4C10 8 6 18 10 30c8 4 18 0 22-10C28 12 24 6 20 4Z" />
      <path d="M11 29 29 11" />
    </svg>
  );
}
