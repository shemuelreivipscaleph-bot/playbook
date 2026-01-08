'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 glass-strong border-b" style={{ borderColor: 'hsl(var(--color-border))' }}>
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-2xl group-hover:scale-110 transition-transform">📋</div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Business Plan Playbook</h1>
              <p className="text-xs" style={{ color: 'hsl(var(--color-text-tertiary))' }}>
                AI-Powered Business Planning
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {!isHome && (
              <Link href="/" className="btn btn-ghost">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Link>
            )}
            <Link href="/history" className="btn btn-secondary">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              History
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
