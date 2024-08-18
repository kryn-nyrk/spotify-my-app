import {
  SpotifyTokenResponse,
  SpotifyTrack,
  SpotifySavedTracksResponse,
  SpotifyAudioFeatureResponse,
  SpotifyProfile,
  SpotifyRecommendationResponse,
} from '../types';

export const getAccessToken = async (
  code: string,
): Promise<SpotifyTokenResponse> => {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('必要情報が不足しています。');
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const tokenApi = 'https://accounts.spotify.com/api/token';

  const params = new URLSearchParams({
    code: code,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
  });

  try {
    const response = await fetch(tokenApi, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basic}`,
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
  accessToken: string | null,
): Promise<SpotifyProfile> => {
  const myProfileApi = 'https://api.spotify.com/v1/me';
  const response = await fetch(myProfileApi, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
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
      'Authorization': `Bearer ${accessToken}`,
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
      'Authorization': `Bearer ${accessToken}`,
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
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('オーディオ情報の取得に失敗しました。');
  }

  const data = await response.json();
  return data;
};

export const getRecommendation = async (
  accessToken: string,
  limit: string,
  seedTracks: string,
  seedGenres?: string,
  seedArtists?: string,
): Promise<SpotifyRecommendationResponse> => {
  const recommendationApi = `https://api.spotify.com/v1/recommendations?limit=${limit}&seed_tracks=${seedTracks}`;

  const params = new URLSearchParams();

  /* パラメーターが存在する場合追加する*/
  if (seedGenres) {
    params.append('seed_genres', seedGenres);
  }

  if (seedArtists) {
    params.append('seed_artists', seedArtists);
  }

  const response = await fetch(recommendationApi, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('レコメンドトラックの取得に失敗しました。');
  }

  const data = await response.json();
  return data;
};
