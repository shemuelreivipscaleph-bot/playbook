import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // Use the same environment variable logic
  const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook';
  const baseUrl = N8N_WEBHOOK_URL.endsWith('/') ? N8N_WEBHOOK_URL.slice(0, -1) : N8N_WEBHOOK_URL;
  const url = baseUrl.includes('business-plan') ? baseUrl : `${baseUrl}/business-plan`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body),
    });

    // Proxy the response content and status exactly
    const responseBody = await response.text();
    
    return new NextResponse(responseBody, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
      },
    });

  } catch (error) {
    console.error('Error proxying to n8n:', error);
    return NextResponse.json(
      { error: 'Failed to connect to n8n server. Is it running on port 5678?' }, 
      { status: 502 }
    );
  }
}
