import { NextRequest, NextResponse } from 'next/server';
import { getSearchTracks } from '../../../lib/spotify';
import { SpotifyTrack } from '../../../types';

const redirectToLogout = () => {
  return NextResponse.redirect('api/spotify/auth/logout');
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query') || '';
  const limit = searchParams.get('limit') || '20';
  const offset = searchParams.get('offset') || '0';

  const accessToken = request.cookies.get('spotify-access-token')?.value;

  if (!accessToken) {
    return redirectToLogout();
  }

  try {
    const tracks: SpotifyTrack[] = await getSearchTracks(
      accessToken,
      query,
      limit,
      offset,
    );

    return NextResponse.json({
      items: tracks,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'アクセストークンが無効です。' },
      { status: 401 },
    );
  }
};
