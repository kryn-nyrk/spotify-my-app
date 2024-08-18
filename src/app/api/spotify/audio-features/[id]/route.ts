import { NextResponse, NextRequest } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const accessToken = request.cookies.get('spotify_access_token')?.value;
  const trackId = params.id;

  if (!accessToken) {
    return NextResponse.json(
      { error: 'アクセストークンが見つかりませんでした。' },
      { status: 401 }
    );
  }

  if (!trackId) {
    return NextResponse.json(
      { error: 'トラックIDが見つかりませんでした。' },
      { status: 400 }
    );
  }

  const audioFeaturesEndpoint = `https://api.spotify.com/v1/audio-features/${trackId}`;

  try {
    const response = await fetch(audioFeaturesEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('オーディオ情報の取得に失敗しました。');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'api/spotify/audio-featuresにてエラーが発生しました。' },
      { status: 500 }
    );
  }
};
