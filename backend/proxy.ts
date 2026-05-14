import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isAllowedOrigin = (origin: string) => {
	if (/^http:\/\/localhost:\d+$/.test(origin)) return true;
	if (origin === 'https://linklio.vercel.app') return true;
	return false;
};

export function middleware(request: NextRequest) {
	const origin = request.headers.get('origin') || '';
	const response = NextResponse.next();

	if (isAllowedOrigin(origin)) {
		response.headers.set('Access-Control-Allow-Origin', origin);
		response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	}

	if (request.method === 'OPTIONS') {
		return new NextResponse(null, { status: 204, headers: response.headers });
	}

	return response;
}

export const config = {
	matcher: '/api/:path*'
};
