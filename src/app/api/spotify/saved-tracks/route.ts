import { NextRequest, NextResponse } from 'next/server';
import { SpotifySavedTracks } from '@/types';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('spotify_access_token')?.value;
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '20';
  const offset = searchParams.get('offset') || '0';

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
      if (response.status === 401) {
        {
          error: 'アクセストークンが無効です。再ログインしてください。';
        }
        {
          status: 401;
        }
      }
      const errorMessage = `お気に入りトラックの取得に失敗しました。　　ステータス: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data: SpotifySavedTracks = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('お気に入りトラックの取得に失敗しました。', error.message);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。後ほど再試行してください。' },
      { status: 500 }
    );
  }
}
