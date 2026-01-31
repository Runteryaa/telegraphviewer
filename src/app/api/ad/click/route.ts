import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new NextResponse('Missing URL', { status: 400 });
  }

  // Perform a 307 Temporary Redirect to preserve method, or 302 Found.
  // This effectively masks the link until the user clicks it.
  return NextResponse.redirect(url);
}
