function Logo() {
  return (
    <div className="brand-logo">
      <svg
        viewBox="0 0 160 160"
        width="42"
        height="42"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="80"
          cy="80"
          r="72"
          fill="#F7F3ED"
          stroke="#D7CABE"
          strokeWidth="2"
        />

        <circle
          cx="80"
          cy="80"
          r="66"
          stroke="#4A3427"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />

        <path
          d="M52 68 C52 98, 62 108, 80 108 C98 108, 108 98, 108 68 Z"
          fill="#3D271D"
        />

        <path
          d="M108 74 C116 74, 122 80, 122 88 C122 96, 116 102, 108 102"
          stroke="#3D271D"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        <path
          d="M44 114 C58 119, 102 119, 116 114"
          stroke="#8C6E54"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M68 56 C65 48, 73 44, 70 36"
          stroke="#C28B5B"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M80 54 C77 46, 85 42, 82 32"
          stroke="#C28B5B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <path
          d="M92 56 C89 48, 97 44, 94 36"
          stroke="#C28B5B"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M40 80 C36 70, 42 64, 46 68 C44 74, 42 78, 40 80 Z"
          fill="#8C6E54"
        />

        <path
          d="M120 80 C124 70, 118 64, 114 68 C116 74, 118 78, 120 80 Z"
          fill="#8C6E54"
        />
      </svg>

      <span>Lumina Cafe & Roastery</span>
    </div>
  );
}

export default Logo;