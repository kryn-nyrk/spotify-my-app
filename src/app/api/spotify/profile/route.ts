import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('spotify_access_token')?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: 'アクセストークンが見つかりませんでした。' },
      { status: 401 }
    );
  }

  const profileEndpoint = 'https://api.spotify.com/v1/me';

  try {
    const response = await fetch(profileEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('プロフィール情報の取得に失敗しました。');
    }

    const profileData = await response.json();

    return NextResponse.json(profileData);
    // any?
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
