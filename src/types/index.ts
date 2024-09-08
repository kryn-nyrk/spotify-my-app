export type SpotifyToken = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
};

export type SpotifyMyProfile = {
  display_name: string;
  id: string;
  images: { url: string }[];
};

export type SpotifyImage = {
  height: number | null;
  url: string;
  width: number | null;
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
  preview_url: string | null;
};

export type SavedTrackItem = {
  added_at: string;
  track: SpotifyTrack;
};

export type SpotifySavedTracks = {
  href: string;
  items: SavedTrackItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type SpotifyAudioFeatures = {
  acousticness: number;
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
  duration_ms: number;
};

export type SpotifyRecommendations = {
  seeds: {
    initialPoolSize: number;
    afterFilteringSize: number;
    id: string;
    type: string;
    href: string;
  }[];
  tracks: SpotifyTrack[];
};

export type SpotifyTrackDisplay = {
  name: string;
  artist: string;
  image?: string;
  audioFeatures: SpotifyAudioFeatures | undefined;
};
