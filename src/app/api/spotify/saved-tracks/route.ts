import { NextRequest, NextResponse } from 'next/server';
import { SpotifySavedTracks } from '@/types';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('spotify_access_token')?.value;
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  if (!accessToken) {
    return NextResponse.json(
      { error: 'アクセストークンが見つかりませんでした。' },
      { status: 401 }
    );
  }

  const params = new URLSearchParams({
    offset: offset as string,
    limit: limit as string,
  });

  const savedTracksEndpoint = `https://api.spotify.com/v1/me/tracks?${params.toString()}`;
  try {
    const response = await fetch(savedTracksEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('お気に入りトラックの取得に失敗しました。');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
