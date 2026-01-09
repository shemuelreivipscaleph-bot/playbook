import { N8NWebhookPayload, N8NWebhookResponse } from '@/types';

// FORCING CLOUD URL because .env is not loading
// const N8N_WEBHOOK_URL = '/api/n8n'; 
const N8N_WEBHOOK_URL = 'https://n8n.srv1151765.hstgr.cloud/webhook';

export class N8NService {
  static WEBHOOK_URL = N8N_WEBHOOK_URL;
  /**
   * Send prompt data to n8n webhook
   */
  static async sendPrompt(payload: N8NWebhookPayload): Promise<N8NWebhookResponse> {
    // If the URL already ends with 'business-plan', use it as is. Otherwise, add it.
    const baseUrl = this.WEBHOOK_URL.endsWith('/') ? this.WEBHOOK_URL.slice(0, -1) : this.WEBHOOK_URL;
    const url = baseUrl.includes('business-plan') ? baseUrl : `${baseUrl}/business-plan`;

    // Map promptTitle to ProjectName for the sheet lookup
    const finalPayload = {
      ...payload,
      ProjectName: payload.promptTitle,
      // We don't send promptTemplate anymore to force n8n to use the sheet
      promptTemplate: undefined
    };

    console.log('Sending request to n8n:', url, finalPayload);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(finalPayload),
      });

      const responseText = await response.text();
      console.log('N8N Raw Response:', responseText);

      if (!responseText) {
        throw new Error('N8N returned an empty response. Check if your workflow is hitting the "Respond to Webhook" node.');
      }

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        throw new Error('N8N returned invalid JSON. Check your "Respond to Webhook" node settings.');
      }

      // Check for proxy/server errors
      if (data.error) {
        throw new Error(data.error);
      }

      // Check for n8n native errors (like 404 Not Registered)
      if (data.code && data.message) {
        throw new Error(data.message + (data.hint ? ` ${data.hint}` : ''));
      }

      // Handle different n8n response formats (including raw OpenAI output)
      const resultData =
        data.result ||
        data.data ||
        data.content ||
        data.output ||
        data.response ||
        (data.message && data.message.content) ||
        (data.choices && data.choices[0]?.message?.content) ||
        (data.text) ||
        (typeof data === 'string' ? data : null);

      return {
        success: true,
        data: resultData
      };
    } catch (error) {
      console.error('Error sending prompt to n8n:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Save response to n8n (for history/tracking)
   */
  static async saveResponse(
    promptId: string,
    inputs: Record<string, string | string[]>,
    response: string
  ): Promise<boolean> {
    try {
      if (!this.WEBHOOK_URL) return false;

      await fetch(`${this.WEBHOOK_URL}/save-response`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          promptId,
          inputs,
          response,
          timestamp: new Date().toISOString(),
        }),
      });
      return true;
    } catch (error) {
      console.error('Error saving response:', error);
      return false;
    }
  }

  /**
   * Get user's prompt history from n8n
   */
  static async getHistory(userId?: string): Promise<any[]> {
    try {
      const url = userId
        ? `${N8N_WEBHOOK_URL}/get-history?userId=${userId}`
        : `${N8N_WEBHOOK_URL}/get-history`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.history || [];
    } catch (error) {
      console.error('Error fetching history:', error);
      return [];
    }
  }
}
