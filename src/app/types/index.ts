export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
};

export type SpotifyProfile = {
  display_name: string;
  images: { url: string }[];
};

export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyExternalUrls = {
  spotify: string;
};

export type SpotifyArtist = {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type SpotifyAlbum = {
  album_type: string;
  artists: SpotifyArtist[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type SpotifyTrack = {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type SavedTrackItem = {
  added_at: string;
  track: SpotifyTrack;
};

export type SpotifySavedTracksResponse = {
  href: string;
  items: SavedTrackItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type SpotifyAudioFeature = {
  //acousticness: number;
  danceability: number;
  energy: number;
  id: string;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  valence: number;
};

export type SpotifyAudioFeatureResponse = {
  audio_features: SpotifyAudioFeature[];
};
