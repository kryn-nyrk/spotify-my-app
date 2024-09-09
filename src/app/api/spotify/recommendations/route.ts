import { NextRequest, NextResponse } from 'next/server';
import { SpotifyRecommendations } from '@/types';

export const GET = async (request: NextRequest) => {
  const accessToken = request.cookies.get('spotify_access_token')?.value;
  const { searchParams } = new URL(request.url);
  const seedTracks = searchParams.get('seed_tracks') || '';
  const seedGenres = searchParams.get('seed_genres') || '';
  const limit = searchParams.get('limit') || '20';

  if (!accessToken) {
    return NextResponse.json(
      { error: 'アクセストークンが見つかりませんでした。' },
      { status: 401 }
    );
  }

  if (!seedTracks) {
    return NextResponse.json(
      { error: 'トラックIDが見つかりませんでした。' },
      { status: 400 }
    );
  }

  const recommendationsEndpoint = `https://api.spotify.com/v1/recommendations?seed_tracks=${seedTracks}&seed_genres=${seedGenres}&limit=${limit}`;

  try {
    const response = await fetch(recommendationsEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'おすすめトラックの取得に失敗しました。' },
        { status: 500 }
      );
    }

    const data: SpotifyRecommendations = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('レコメンデーションズトラックの取得に失敗しました。', error);
    return NextResponse.json(
      {
        error:
          'サーバーで予期しないエラーが発生しました。後ほど再試行してください。',
      },
      { status: 500 }
    );
  }
};
