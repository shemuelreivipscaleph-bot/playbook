import { notFound } from 'next/navigation';
import { promptCategories } from '@/data/prompts';
import PromptForm from '@/components/PromptForm';

interface PromptPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const allPrompts = promptCategories.flatMap((category) =>
    category.prompts.map((prompt) => ({
      id: prompt.id,
    }))
  );
  return allPrompts;
}

export default async function PromptPage({ params }: PromptPageProps) {
  const { id } = await params;
  
  let prompt = null;
  let category = null;

  for (const cat of promptCategories) {
    const foundPrompt = cat.prompts.find((p) => p.id === id);
    if (foundPrompt) {
      prompt = foundPrompt;
      category = cat;
      break;
    }
  }

  if (!prompt || !category) {
    notFound();
  }

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">{prompt.title}</h1>
        <p className="content-description">{prompt.description}</p>
      </div>

      <PromptForm prompt={prompt} />
    </div>
  );
}
