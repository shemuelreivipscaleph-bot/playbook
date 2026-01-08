import { NextResponse } from 'next/server';

export async function POST(request: Request, { params }: { params: Promise<{ path: string[] }> }) {
    // Await params in Next.js 15+ (and 16)
    const resolvedParams = await params;
    const path = resolvedParams.path.join('/');

    const body = await request.json();

    // Environment variable for the REAL n8n server
    const N8N_HOST = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook';

    // Clean base URL and prevent double paths
    let baseUrl = N8N_HOST.endsWith('/') ? N8N_HOST.slice(0, -1) : N8N_HOST;

    // If the base URL creates a double path (e.g. .../business-plan/business-plan), fix it
    if (baseUrl.endsWith(`/${path}`)) {
        baseUrl = baseUrl.substring(0, baseUrl.length - path.length - 1);
    }

    // Construct target URL
    const targetUrl = `${baseUrl}/${path}`;

    console.log(`[Proxy] Forwarding to: ${targetUrl}`);

    try {
        const response = await fetch(targetUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body),
        });

        const responseBody = await response.text();

        console.log(`[Proxy] N8N Status: ${response.status}`);
        console.log(`[Proxy] N8N Body (first 500 chars): ${responseBody.substring(0, 500)}`);

        return new NextResponse(responseBody, {
            status: response.status,
            headers: {
                'Content-Type': response.headers.get('Content-Type') || 'application/json',
            },
        });

    } catch (error) {
        console.error(`Error proxying to n8n (${targetUrl}):`, error);
        return NextResponse.json(
            { error: 'Failed to connect to n8n server.' },
            { status: 502 }
        );
    }
}

export async function GET(request: Request, { params }: { params: Promise<{ path: string[] }> }) {
    const resolvedParams = await params;
    const path = resolvedParams.path.join('/');

    const N8N_HOST = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook';
    // Clean base URL and prevent double paths
    let baseUrl = N8N_HOST.endsWith('/') ? N8N_HOST.slice(0, -1) : N8N_HOST;

    if (baseUrl.endsWith(`/${path}`)) {
        baseUrl = baseUrl.substring(0, baseUrl.length - path.length - 1);
    }

    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    const targetUrl = `${baseUrl}/${path}${queryString ? `?${queryString}` : ''}`;

    console.log(`[Proxy] Forwarding GET to: ${targetUrl}`);

    try {
        const response = await fetch(targetUrl);
        const contentType = response.headers.get('Content-Type') || '';
        const responseBody = await response.text();

        console.log(`[Proxy] N8N GET Status: ${response.status}`);

        return new NextResponse(responseBody, {
            status: response.status,
            headers: {
                'Content-Type': contentType,
            },
        });

    } catch (error) {
        console.error(`Error proxying to n8n (${targetUrl}):`, error);
        return NextResponse.json(
            { error: 'Failed to connect to n8n server.' },
            { status: 502 }
        );
    }
}
