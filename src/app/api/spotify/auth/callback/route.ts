import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@/app/lib/spotify';
import { SpotifyTokenResponse } from '@/app/types';

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Code is missing' }, { status: 400 });
  }

  try {
    const tokenResponse: SpotifyTokenResponse = await getAccessToken(code);
    const accessToken = tokenResponse.access_token;

    const response = NextResponse.redirect('http://localhost:3000');

    response.cookies.set('spotify-access-token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: tokenResponse.expires_in, // expiration in seconds
      path: '/',
      //domain: 'localhost:3000', //　開発環境用
    });

    return response;
  } catch (error) {
    console.error('Error fetching token:', error);
    return NextResponse.json(
      { error: 'Failed to fetch the token' },
      { status: 500 },
    );
  }
};
