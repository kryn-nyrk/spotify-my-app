import { NextRequest, NextResponse } from 'next/server';
import { getRecommendation } from '@/app/lib/spotify';
import { SpotifyRecommendationResponse } from '@/app/types';

const redirectToLogout = () => {
  return NextResponse.redirect('api/spotify/auth/logout');
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);

  const seed_artists = searchParams.get('seed_artists') || '';
  const seed_tracks = searchParams.get('seed_tracks') || '';
  const seed_genres = searchParams.get('seed_genres') || '';
  const limit = searchParams.get('limit') || '';

  const accessToken = request.cookies.get('spotify-access-token')?.value;

  if (!accessToken) {
    return redirectToLogout();
  }

  try {
    const response: SpotifyRecommendationResponse = await getRecommendation(
      accessToken,
      limit,
      seed_tracks,
      seed_artists,
      seed_genres,
    );
    console.log(response);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({
      error: 'recommendationAPIでエラーが発生しました。',
    });
  }
};
