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
      <div className="sidebar-header" style={{ padding: '1.5rem 1rem' }}>
        <h1 className="sidebar-title" style={{ color: '#1a1a1a', textTransform: 'none', fontSize: '1.25rem', fontWeight: 'bold', lineHeight: '1.3', textAlign: 'center', width: '100%' }}>
          YOUR BUSINESS PLAN PLAYBOOK PROMPTS
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

        <Link
          href="/"
          className={`nav-item ${pathname === '/' ? 'active' : ''}`}
          style={{ paddingLeft: '2.5rem' }}
        >
          Introduction
        </Link>
        
        <Link
          href="/how-to-use"
          className={`nav-item ${pathname === '/how-to-use' ? 'active' : ''}`}
          style={{ paddingLeft: '2.5rem' }}
        >
          How to Use This Guide
        </Link>
        
        <Link
          href="/history"
          className={`nav-item ${pathname === '/history' ? 'active' : ''}`}
          style={{ paddingLeft: '2.5rem' }}
        >
          History
        </Link>

        <div className="nav-section">
          <div className="nav-section-title" style={{ paddingLeft: '2.5rem' }}>Actionable Prompts</div>
          
          {promptCategories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => toggleCategory(category.id)}
                className="nav-item"
                style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  background: 'none', 
                  border: 'none', 
                  paddingLeft: '3rem',
                  fontSize: '0.875rem',
                  color: '#4b5563',
                  fontWeight: openCategories.includes(category.id) ? '600' : '400'
                }}
              >
                {category.title}
              </button>
              
              {openCategories.includes(category.id) && (
                <div style={{ marginBottom: '0.5rem' }}>
                  {category.prompts.map((prompt) => (
                    <Link
                      key={prompt.id}
                      href={`/prompt/${prompt.id}`}
                      className={`nav-item ${pathname === `/prompt/${prompt.id}` ? 'active' : ''}`}
                      style={{ paddingLeft: '4rem', fontSize: '0.8125rem' }}
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
