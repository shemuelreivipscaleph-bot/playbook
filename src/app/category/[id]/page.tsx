import { notFound } from 'next/navigation';
import Link from 'next/link';
import { promptCategories } from '@/data/prompts';
import PromptCard from '@/components/PromptCard';

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return promptCategories.map((category) => ({
    id: category.id,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = promptCategories.find((cat) => cat.id === id);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="section">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8 fade-in">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm hover:underline"
              style={{ color: 'hsl(var(--color-text-secondary))' }}
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Categories
            </Link>
          </div>

          {/* Category Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 fade-in">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="mb-4">
              <span className="gradient-text">{category.title}</span>
            </h1>
            <p
              className="text-xl mb-6"
              style={{ color: 'hsl(var(--color-text-secondary))' }}
            >
              {category.description}
            </p>
            <div className="badge badge-primary">
              {category.prompts.length} {category.prompts.length === 1 ? 'Prompt' : 'Prompts'} Available
            </div>
          </div>

          {/* Prompts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {category.prompts.map((prompt, index) => (
              <div key={prompt.id} className="fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <PromptCard prompt={prompt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
