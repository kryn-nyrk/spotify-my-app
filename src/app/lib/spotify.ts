import {
  SpotifyTokenResponse,
  SpotifyTrack,
  SpotifySavedTracksResponse,
  SpotifyAudioFeatureResponse,
  SpotifyProfile,
} from '../types';

export const getAccessToken = async (
  code: string,
): Promise<SpotifyTokenResponse> => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const tokenApi = 'https://accounts.spotify.com/api/token';

  const params = new URLSearchParams({
    code: code,
    redirect_uri: process.env.REDIRECT_URI as string,
    grant_type: 'authorization_code',
  });

  try {
    const response = await fetch(tokenApi, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Error response:', responseData);
      throw new Error(
        `Failed to fetch access token: ${responseData.error_description || response.statusText}`,
      );
    }

    return responseData;
  } catch (error) {
    console.error('Error in fetch:', error);
    throw new Error('Failed to fetch access token');
  }
};

export const getMyProfile = async (
  accessToken: string,
): Promise<SpotifyProfile> => {
  const myProfileApi = 'https://api.spotify.com/v1/me';
  const response = await fetch(myProfileApi, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }
  return response.json();
};

export const getUserSavedTracks = async (
  accessToken: string,
  limit: string,
  offset: string,
): Promise<SpotifySavedTracksResponse[]> => {
  const userSavedTracksApi = `https://api.spotify.com/v1/me/tracks?limit=${limit}&offset=${offset}`;
  const response = await fetch(userSavedTracksApi, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
};

export const getSearchTracks = async (
  accessToken: string,
  query: string,
  limit: string,
  offset: string,
): Promise<SpotifyTrack[]> => {
  const searchTracksApi = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=${limit}&offset=${offset}`;
  const response = await fetch(searchTracksApi, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('トラックの取得に失敗しました。');
  }

  const data = await response.json();
  return data.tracks.items;
};

export const getAudioFeatures = async (
  accessToken: string,
  id: string,
): Promise<SpotifyAudioFeatureResponse> => {
  const audioFeaturesApi = `https://api.spotify.com/v1/audio-features/${id}`;
  const response = await fetch(audioFeaturesApi, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('オーディオ情報の取得に失敗しました。');
  }

  const data = await response.json();
  return data;
};

export const getRecommend = async (
  accessToken: string,
  seed_artists: string,
  seed_tracks: string,
  limit: number,
) => {
  const recommendApi = `https://api.spotify.com/v1/recommendations?seed_artists=${seed_artists}&seed_tracks=${seed_tracks}&limit=${limit}`;
  const response = await fetch(recommendApi, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('レコメンドトラックの取得に失敗しました。');
  }

  const data = await response.json();
  return data;
};
