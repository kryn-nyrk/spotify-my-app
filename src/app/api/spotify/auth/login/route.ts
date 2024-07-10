// /app/api/spotify/login/route.ts

import { NextRequest, NextResponse } from 'next/server';

// generateRandomString関数の型定義
const generateRandomString = (length: number): string => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export async function GET(request: NextRequest): Promise<NextResponse> {
  const clientId = process.env.CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: 'Environment variables are not set' },
      { status: 500 },
    );
  }

  const scope =
    'streaming user-read-email user-read-private user-library-read playlist-modify-public playlist-modify-private';
  const state = generateRandomString(16);

  // 環境変数がstringであることを確認後にparamsを作成
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`,
  );
}
