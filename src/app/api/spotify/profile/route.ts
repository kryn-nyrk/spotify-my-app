import { NextRequest, NextResponse } from 'next/server';
import { getMyProfile } from '@/app/lib/spotify';

const redirectToLogout = () => {
  const response = NextResponse.redirect('api/spotify/auth/logout');
  return response;
};

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('spotify-access-token')?.value;

  if (!accessToken) {
    return redirectToLogout;
  }

  try {
    const myProfile = await getMyProfile(accessToken);
    return NextResponse.json(myProfile);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 },
    );
  }
}
