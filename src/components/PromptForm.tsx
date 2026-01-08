'use client';

import { useState } from 'react';
import { Prompt, PromptField } from '@/types';
import { N8NService } from '@/lib/n8n';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PromptFormProps {
  prompt: Prompt;
}

export default function PromptForm({ prompt }: PromptFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const generatePromptText = () => {
    let promptText = prompt.template;
    Object.entries(formData).forEach(([key, value]) => {
      promptText = promptText.replace(`{${key}}`, value || `[${key}]`);
    });
    return promptText;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    // Validate required fields
    const missingFields = prompt.fields
      .filter((field) => field.required && !formData[field.id])
      .map((field) => field.label);

    if (missingFields.length > 0) {
      setError(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      setIsLoading(false);
      return;
    }

    try {
      const result = await N8NService.sendPrompt({
        promptId: prompt.id,
        promptTitle: prompt.title,
        promptTemplate: prompt.template,
        category: prompt.category,
        inputs: formData,
      });

      if (result.success && result.data) {
        setResponse(result.data);
        await N8NService.saveResponse(prompt.id, formData, result.data);
      } else {
        const errorMsg = result.error || 'The AI returned an empty response. Please check your AI credentials and workflow in n8n.';
        setError(errorMsg);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderField = (field: PromptField) => {
    const commonProps = {
      id: field.id,
      value: formData[field.id] || '',
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        handleInputChange(field.id, e.target.value),
      placeholder: field.placeholder,
      required: field.required,
    };

    switch (field.type) {
      case 'textarea':
        return <textarea {...commonProps} className="form-textarea" rows={4} />;
      case 'number':
        return <input {...commonProps} type="number" className="form-input" />;
      case 'select':
        return (
          <select
            {...commonProps}
            className="form-select"
            onChange={(e) => handleInputChange(field.id, e.target.value)}
          >
            <option value="">Select an option...</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return <input {...commonProps} type="text" className="form-input" />;
    }
  };

  return (
    <div className="prompt-layout">
      {/* Left Column: Form */}
      <div className="form-column">
        <form onSubmit={handleSubmit}>
          <div className="card">
            {prompt.fields.map((field) => (
              <div key={field.id} className="form-group">
                <label htmlFor={field.id} className="form-label">
                  {field.label}
                  {field.required && <span className="required">*</span>}
                </label>
                {renderField(field)}
              </div>
            ))}
          </div>

          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}

          <div className="flex gap-2 mb-6">
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isLoading ? (
                <>
                  <div className="spinner" />
                  Generating...
                </>
              ) : (
                'Generate Response'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Right Column: Response */}
      <div className="response-column">
        {response ? (
          <div className="response-container mt-0 h-full">
            <div className="response-header">
              <h3 className="response-title">
                <svg
                  className="w-5 h-5"
                  style={{ color: '#10b981', width: '20px', height: '20px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Generated Response
              </h3>
              <button
                onClick={() => navigator.clipboard.writeText(response)}
                className="btn btn-secondary"
              >
                <svg
                  className="w-4 h-4"
                  style={{ width: '16px', height: '16px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </button>
            </div>
            <div className="response-content markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {response}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className="response-placeholder">
            {isLoading ? (
              <div className="flex flex-col items-center gap-4 py-12">
                <div className="spinner" style={{ width: '40px', height: '40px' }} />
                <p className="text-muted">The AI is crafting your strategy...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="placeholder-icon">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">No Response Yet</h4>
                  <p className="text-muted text-sm max-w-xs">
                    Fill out the form on the left and click "Generate Response" to see the AI analysis here.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
