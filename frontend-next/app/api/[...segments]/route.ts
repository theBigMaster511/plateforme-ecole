import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

export async function handler(req: NextRequest, context: any) {
    const { segments } = await context.params;
    const pathSegments = segments || [];
    const path = '/' + pathSegments.join('/');
    const searchParams = req.nextUrl.search;

    const url = `${BACKEND_URL}${path}${searchParams}`;

    const headersInit: HeadersInit = {
        'Content-Type': 'application/json',
    };

    // Forward auth cookies
    const cookies = req.headers.get('cookie');
    if (cookies) {
        headersInit['Cookie'] = cookies;
    }

    try {
        const options: RequestInit = {
            method: req.method,
            headers: headersInit,
            credentials: 'include',
        };

        if (req.method !== 'GET' && req.method !== 'HEAD') {
            options.body = await req.text();
        }

        const response = await fetch(url, options);
        const data = await response.text();

        const resHeaders = new Headers(response.headers);
        // Forward Set-Cookie sauf pour sign-up (ne pas écraser la session admin)
        const setCookieHeaders = response.headers.getSetCookie();
        if (!path.startsWith('/auth/sign-up') && setCookieHeaders.length > 0) {
            resHeaders.set('Set-Cookie', setCookieHeaders.join(', '));
        }

        return new NextResponse(data, {
            status: response.status,
            headers: resHeaders,
        });
    } catch (error) {
        console.error('API proxy error:', error);
        return NextResponse.json({ error: 'API request failed' }, { status: 500 });
    }
}

export async function GET(req: NextRequest, context: any) {
    return handler(req, context);
}

export async function POST(req: NextRequest, context: any) {
    return handler(req, context);
}

export async function PUT(req: NextRequest, context: any) {
    return handler(req, context);
}

export async function PATCH(req: NextRequest, context: any) {
    return handler(req, context);
}

export async function DELETE(req: NextRequest, context: any) {
    return handler(req, context);
}

export async function HEAD(req: NextRequest, context: any) {
    return handler(req, context);
}
