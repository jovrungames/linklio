// backend/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const allowedOrigins = [
		'http://localhost:5174',
		'https://linklio-frontend.vercel.app' // ← production URL
	];

	const origin = request.headers.get('origin') || '';
	const response = NextResponse.next();

	if (allowedOrigins.includes(origin)) {
		response.headers.set('Access-Control-Allow-Origin', origin);
	}

	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (request.method === 'OPTIONS') {
		return new NextResponse(null, { status: 204, headers: response.headers });
	}

	return response;
}

export const config = {
	matcher: '/api/:path*'
};
