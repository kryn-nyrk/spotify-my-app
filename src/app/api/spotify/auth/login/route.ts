import { NextRequest, NextResponse } from 'next/server';

const generateRandomString = (length: number): string => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const GET = (request: NextRequest) => {
  const clientId = process.env.CLIENT_ID as string;
  const redirectUri = process.env.REDIRECT_URI as string;

  const scope =
    'streaming user-read-email user-read-private user-library-read playlist-modify-public playlist-modify-private';

  const state = generateRandomString(16);

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
  });

  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

  const response = NextResponse.redirect(authUrl);
  response.cookies.set('spotify_auth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 300,
  });

  return response;
};
