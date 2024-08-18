import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const clientId = process.env.CLIENT_ID as string;
  const redirectUri = process.env.REDIRECT_URI as string;
  const clientSecret = process.env.CLIENT_SECRET as string;
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const storedState = request.cookies.get('spotify_auth_state')?.value;

  if (state === null || state !== storedState) {
    return NextResponse.json(
      { error: 'ステートが一致しておりません。　' },
      { status: 401 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: 'コードが見つかりませんでした。' },
      { status: 400 }
    );
  }

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
  });

  const tokenEndpoint = 'https://accounts.spotify.com/api/token';

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error('アクセストークンの取得に失敗しました。');
    }

    const data = await response.json();

    const accessToken = data.access_token;
    //const refreshToken = data.refresh_token;

    //
    const responseHeaders = new Headers();
    responseHeaders.set(
      'Set-Cookie',
      `spotify_access_token=${accessToken}; HttpOnly; Path=/; Max-Age=3600;`
    );
    /*
    responseHeaders.set(
      'Set-Cookie',
      `spotify_refresh_token=${refreshToken}; HttpOnly; Path=/; Max-age=604800`
    );
    */

    // 仮のリダイレクトURL
    return NextResponse.redirect('http://localhost:3000/savedTracks', {
      headers: responseHeaders,
    });
    // any? のちほど定義
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
