import { APP_STORE_URL } from "@/lib/constants";

export default function AppStoreBadge({ className }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <svg
        viewBox="0 0 120 40"
        className="h-[44px] w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="40" rx="6" fill="#000" />
        <rect
          x="0.5"
          y="0.5"
          width="119"
          height="39"
          rx="5.5"
          stroke="#A6A6A6"
          fill="none"
        />
        <text
          x="42"
          y="15"
          fill="#fff"
          fontSize="6.5"
          fontFamily="system-ui, sans-serif"
        >
          Download on the
        </text>
        <text
          x="42"
          y="28"
          fill="#fff"
          fontSize="12"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          App Store
        </text>
        <g transform="translate(12, 7) scale(0.55)">
          <path
            d="M24.769 20.3a5.723 5.723 0 0 1 2.727-4.808 5.861 5.861 0 0 0-4.619-2.498c-1.953-.2-3.84 1.164-4.836 1.164-1.015 0-2.556-1.142-4.21-1.11a6.197 6.197 0 0 0-5.215 3.182c-2.248 3.89-.573 9.617 1.585 12.77 1.079 1.545 2.348 3.273 4.001 3.213 1.617-.065 2.222-1.032 4.175-1.032 1.933 0 2.503 1.032 4.184.993 1.734-.025 2.832-1.559 3.872-3.118a12.8 12.8 0 0 0 1.764-3.607 5.534 5.534 0 0 1-3.428-5.149zM21.533 10.81a5.641 5.641 0 0 0 1.291-4.044 5.746 5.746 0 0 0-3.717 1.924 5.38 5.38 0 0 0-1.325 3.898 4.756 4.756 0 0 0 3.751-1.778z"
            fill="#fff"
          />
        </g>
      </svg>
    </a>
  );
}
