export default function FlagEN({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0 L24 24 M24 0 L0 24" stroke="#fff" strokeWidth="3"/>
      <path d="M0 0 L24 24 M24 0 L0 24" stroke="#C8102E" strokeWidth="1.5"/>
      <path d="M12 0 V24 M0 12 H24" stroke="#fff" strokeWidth="4"/>
      <path d="M12 0 V24 M0 12 H24" stroke="#C8102E" strokeWidth="2"/>
    </svg>
  );
}