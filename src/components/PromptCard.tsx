'use client';

import { Prompt } from '@/types';
import Link from 'next/link';

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Link href={`/prompt/${prompt.id}`} className="block">
      <div className="card card-interactive group h-full">
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all">
            {prompt.title}
          </h3>
          <p className="text-sm mb-4 flex-1" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            {prompt.description}
          </p>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'hsl(var(--color-text-tertiary))' }}>
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>{prompt.fields.length} fields to complete</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
