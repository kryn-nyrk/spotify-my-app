import { NextResponse, NextRequest } from 'next/server';
import { SpotifyMyProfile, SpotifyTrack } from '@/types';

const getUserId = async (accessToken: string) => {
  const profileEndpoint = 'https://api.spotify.com/v1/me';
  const response = await fetch(profileEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('ユーザー情報の取得に失敗しました。');
  }

  const userData: SpotifyMyProfile = await response.json();
  return userData.id;
};

export const POST = async (request: NextRequest) => {
  const accessToken = request.cookies.get('spotify_access_token')?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: 'アクセストークンが見つかりませんでした。' },
      { status: 401 }
    );
  }

  let name: string;
  let tracks: SpotifyTrack[];

  try {
    const body = await request.json();
    name = body.name;
    tracks = body.tracks;

    if (!name || !tracks) {
      return NextResponse.json(
        { error: 'プレイリストの名前またはトラックが指定されていません。' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'リクエストボディの解析に失敗しました。' },
      { status: 400 }
    );
  }

  try {
    const userId = await getUserId(accessToken);
    const cratePlaylistEndPoint = `https://api.spotify.com/v1/users/${userId}/playlists`;

    // プレイリストを作成
    const createPlaylistResponse = await fetch(cratePlaylistEndPoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description: 'created by くろやんapp',
        public: false,
      }),
    });

    if (!createPlaylistResponse.ok) {
      throw new Error('プレイリストの作成に失敗しました。');
    }

    const playlistData = await createPlaylistResponse.json();
    const addTracksToPlaylistEndpoint = `https://api.spotify.com/v1/playlists/${playlistData.id}/tracks`;

    // トラックをプレイリストに追加
    const trackUris = tracks.map(
      (track: SpotifyTrack) => `spotify:track:${track.id}`
    );
    const addTrackResponse = await fetch(addTracksToPlaylistEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uris: trackUris }),
    });

    if (!addTrackResponse.ok) {
      throw new Error('トラックのプレイリストへの追加に失敗しました。');
    }

    return NextResponse.json({ success: true, playlistId: playlistData.id });
    // any?
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'プレイリストの作成に失敗しました。' },
      { status: 500 }
    );
  }
};
