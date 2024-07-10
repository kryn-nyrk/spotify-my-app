import { NextRequest, NextResponse } from 'next/server';
import { getUserSavedTracks } from '../../../lib/spotify';
import { SpotifySavedTracksResponse } from '@/app/types';

const redirectToLogout = () => {
  const response = NextResponse.redirect('api/spotify/auth/logout');
  return response;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);

  const limit = searchParams.get('limit') || '20';
  const offset = searchParams.get('offset') || '0';

  const accessToken = request.cookies.get('spotify-access-token')?.value;

  if (!accessToken) {
    return redirectToLogout;
  }

  try {
    const savedTracks: SpotifySavedTracksResponse[] = await getUserSavedTracks(
      accessToken,
      limit,
      offset,
    );
    return NextResponse.json(savedTracks);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tracks' },
      { status: 500 },
    );
  }
}
