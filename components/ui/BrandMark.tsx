export default function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 38 38" fill="none">
        <rect x="2" y="2" width="15" height="15" rx="5" fill="currentColor" />
        <rect x="21" y="2" width="15" height="15" rx="5" fill="currentColor" opacity=".48" />
        <rect x="2" y="21" width="15" height="15" rx="5" fill="currentColor" opacity=".48" />
        <path d="M21 21h8a7 7 0 0 1 7 7v8h-8a7 7 0 0 1-7-7v-8Z" fill="currentColor" />
      </svg>
    </span>
  );
}
