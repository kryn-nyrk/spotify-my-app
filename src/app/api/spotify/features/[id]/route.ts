import { NextResponse, NextRequest } from 'next/server';
import { getAudioFeatures } from '../../../../lib/spotify';

type Params = {
  id: string;
};

const redirectToLogout = () => {
  const response = NextResponse.redirect('api/spotify/auth/logout');
  return response;
};

export const GET = async (
  request: NextRequest,
  { params }: { params: Params },
) => {
  const { id } = params;

  const accessToken = request.cookies.get('spotify-access-token')?.value;

  if (!accessToken) {
    return redirectToLogout();
  }

  try {
    const audioFeatures = await getAudioFeatures(accessToken, id);
    return NextResponse.json(audioFeatures);
  } catch (error) {
    return NextResponse.json(
      { error: 'api/featuresにてエラーが発生しました。' },
      { status: 401 },
    );
  }
};
