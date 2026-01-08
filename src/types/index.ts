export interface PromptCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  prompts: Prompt[];
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  template: string;
  fields: PromptField[];
  category: string;
}

export interface PromptField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'multiselect';
  placeholder?: string;
  required: boolean;
  options?: string[];
}

export interface PromptResponse {
  promptId: string;
  userInputs: Record<string, string | string[]>;
  generatedContent: string;
  timestamp: Date;
}

export interface N8NWebhookPayload {
  promptId: string;
  promptTitle: string;
  promptTemplate: string;
  category: string;
  inputs: Record<string, string | string[]>;
  userId?: string;
}

export interface N8NWebhookResponse {
  success: boolean;
  data?: string;
  error?: string;
}
