import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('spotify_access_token')?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: 'アクセストークンが見つかりませんでした。' },
      { status: 401 }
    );
  }

  const availableGenreSeedsEndpoint =
    'https://api.spotify.com/v1/recommendations/available-genre-seeds';

  try {
    const response = await fetch(availableGenreSeedsEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('ジャンルの取得に失敗しました。');
    }

    const genresData = await response.json();

    return NextResponse.json(genresData);

    // any?
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
