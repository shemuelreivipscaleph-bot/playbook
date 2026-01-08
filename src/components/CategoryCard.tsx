'use client';

import { PromptCategory } from '@/types';
import Link from 'next/link';

interface CategoryCardProps {
  category: PromptCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`} className="block">
      <div className="card card-interactive group">
        <div className="flex items-start gap-4">
          <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
              {category.title}
            </h3>
            <p className="text-sm" style={{ color: 'hsl(var(--color-text-secondary))' }}>
              {category.description}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="badge badge-primary">
                {category.prompts.length} {category.prompts.length === 1 ? 'Prompt' : 'Prompts'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
