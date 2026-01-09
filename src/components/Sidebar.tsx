'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { promptCategories } from '@/data/prompts';

export default function Sidebar() {
  const pathname = usePathname();
  // Keep track of which categories are open
  const [openCategories, setOpenCategories] = useState<string[]>(['strategy']);

  const toggleCategory = (id: string) => {
    setOpenCategories(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header" style={{ padding: '1.5rem 1rem', paddingBottom: '2.5rem', borderBottom: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
        <h1 className="sidebar-title" style={{ color: '#1a1a1a', textTransform: 'uppercase', fontSize: '1.25rem', fontWeight: 'bold', lineHeight: '1.3', textAlign: 'center', width: '100%', letterSpacing: '0.05em' }}>
          Your Business Plan Playbook Prompts
        </h1>
      </div>

      <nav style={{ position: 'relative' }}>
        {/* Vertical line accent */}
        <div style={{
          position: 'absolute',
          left: '1.5rem',
          top: '0',
          bottom: '0',
          width: '1px',
          background: '#e5e7eb',
          zIndex: 0
        }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link
            href="/"
            className={`nav-item ${pathname === '/' ? 'active' : ''}`}
            style={{ paddingLeft: '2.5rem', fontSize: '1rem', fontWeight: 500 }}
          >
            Introduction
          </Link>

          <Link
            href="/how-to-use"
            className={`nav-item ${pathname === '/how-to-use' ? 'active' : ''}`}
            style={{ paddingLeft: '2.5rem', fontSize: '1rem', fontWeight: 500 }}
          >
            How to Use This Guide
          </Link>

          <Link
            href="/history"
            className={`nav-item ${pathname === '/history' ? 'active' : ''}`}
            style={{ paddingLeft: '2.5rem', fontSize: '1rem', fontWeight: 500 }}
          >
            History
          </Link>
        </div>

        <div className="nav-section" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          <div className="nav-section-title" style={{ paddingLeft: '2.5rem', fontSize: '0.875rem', color: '#6b7280', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ACTIONABLE PROMPTS</div>

          {promptCategories.map((category) => (
            <div key={category.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                onClick={() => toggleCategory(category.id)}
                className="nav-item"
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  paddingLeft: '3rem',
                  paddingRight: '1rem',
                  fontSize: '0.95rem',
                  color: '#4b5563',
                  fontWeight: openCategories.includes(category.id) ? '600' : '500',
                  fontFamily: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{category.title}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: openCategories.includes(category.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: '#9ca3af'
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openCategories.includes(category.id) && (
                <div style={{ marginBottom: '0.5rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {category.prompts.map((prompt) => (
                    <Link
                      key={prompt.id}
                      href={`/prompt/${prompt.id}`}
                      className={`nav-item ${pathname === `/prompt/${prompt.id}` ? 'active' : ''}`}
                      style={{ paddingLeft: '4rem', fontSize: '0.875rem' }}
                    >
                      {prompt.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
