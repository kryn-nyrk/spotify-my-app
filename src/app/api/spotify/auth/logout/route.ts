import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect('http://localhost:3000');

  // cookieを破棄する
  response.cookies.set('spotify-access-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
  });
  return response;
}
