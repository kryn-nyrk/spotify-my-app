export type TrackDetails = {
  track: string;
  artist: string;
  image: string;
};

export type AudioFeatures = {
  danceability: number;
  energy: number;
  key: number;
  loudness: number;
  mode: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
  type: string;
  id: string;
  uri: string;
  track_href: string;
  analysis_url: string;
  duration_ms: number;
  time_signature: number;
};

export type SampleTracks = {
  details: TrackDetails[];
  audioFeatures: AudioFeatures[];
};

export const data: SampleTracks[] = [
  {
    details: [
      {
        track: 'LOOK AT ME',
        artist: 'TWICE',
        image:
          'https://i.scdn.co/image/ab67616d0000b2731f21c24e81a9d0d4a30be533',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.719,
        energy: 0.909,
        key: 1,
        loudness: -3.375,
        mode: 1,
        speechiness: 0.0389,
        acousticness: 0.146,
        instrumentalness: 0,
        liveness: 0.0675,
        valence: 0.662,
        tempo: 134.897,
        type: 'audio_features',
        id: '5AHS8rvrlaiW66d32DqNSg',
        uri: 'spotify:track:5AHS8rvrlaiW66d32DqNSg',
        track_href: 'https://api.spotify.com/v1/tracks/5AHS8rvrlaiW66d32DqNSg',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/5AHS8rvrlaiW66d32DqNSg',
        duration_ms: 193144,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'Bubble Gum',
        artist: 'NewJeans',
        image:
          'https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.758,
        energy: 0.709,
        key: 9,
        loudness: -3.589,
        mode: 1,
        speechiness: 0.0447,
        acousticness: 0.138,
        instrumentalness: 0,
        liveness: 0.0765,
        valence: 0.529,
        tempo: 105.005,
        type: 'audio_features',
        id: '19D8LNpWwIPpi6hs9BG7dq',
        uri: 'spotify:track:19D8LNpWwIPpi6hs9BG7dq',
        track_href: 'https://api.spotify.com/v1/tracks/19D8LNpWwIPpi6hs9BG7dq',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/19D8LNpWwIPpi6hs9BG7dq',
        duration_ms: 200267,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: "I Don't Wanna Be Me",
        artist: 'Type O Negative',
        image:
          'https://i.scdn.co/image/ab67616d0000b273d736b2c5f252f84ad45d5be6',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.474,
        energy: 0.977,
        key: 8,
        loudness: -8.651,
        mode: 0,
        speechiness: 0.15,
        acousticness: 0.024,
        instrumentalness: 0.604,
        liveness: 0.0931,
        valence: 0.0449,
        tempo: 100.557,
        type: 'audio_features',
        id: '4eGHEHqoDMMejzPhRFTc7p',
        uri: 'spotify:track:4eGHEHqoDMMejzPhRFTc7p',
        track_href: 'https://api.spotify.com/v1/tracks/4eGHEHqoDMMejzPhRFTc7p',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/4eGHEHqoDMMejzPhRFTc7p',
        duration_ms: 308827,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'Music, Dance & Love',
        artist: 'Original Love',
        image:
          'https://i.scdn.co/image/ab67616d0000b273ce85442c5c4966298e58b98e',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.799,
        energy: 0.806,
        key: 0,
        loudness: -3.549,
        mode: 1,
        speechiness: 0.0306,
        acousticness: 0.0409,
        instrumentalness: 0,
        liveness: 0.0496,
        valence: 0.973,
        tempo: 119.981,
        type: 'audio_features',
        id: '4G2aolgaBRsKaWEqToz4AM',
        uri: 'spotify:track:4G2aolgaBRsKaWEqToz4AM',
        track_href: 'https://api.spotify.com/v1/tracks/4G2aolgaBRsKaWEqToz4AM',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/4G2aolgaBRsKaWEqToz4AM',
        duration_ms: 273467,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'R.M.T.T',
        artist: 'YONA YONA WEEKENDERS',
        image:
          'https://i.scdn.co/image/ab67616d0000b2730cd8e66c071cb6808d674bf1',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.706,
        energy: 0.632,
        key: 0,
        loudness: -5.6,
        mode: 1,
        speechiness: 0.0464,
        acousticness: 0.169,
        instrumentalness: 0,
        liveness: 0.0849,
        valence: 0.432,
        tempo: 94.11,
        type: 'audio_features',
        id: '5l1revkAd0QhTZ9ENMabCA',
        uri: 'spotify:track:5l1revkAd0QhTZ9ENMabCA',
        track_href: 'https://api.spotify.com/v1/tracks/5l1revkAd0QhTZ9ENMabCA',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/5l1revkAd0QhTZ9ENMabCA',
        duration_ms: 311512,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: '白と黒',
        artist: 'ACIDMAN',
        image:
          'https://i.scdn.co/image/ab67616d0000b273a4a46302abd5346d41e74425',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.493,
        energy: 0.926,
        key: 8,
        loudness: -4.241,
        mode: 0,
        speechiness: 0.0679,
        acousticness: 0.0508,
        instrumentalness: 0.0000027,
        liveness: 0.211,
        valence: 0.614,
        tempo: 95.016,
        type: 'audio_features',
        id: '28h1cfhxOM8oxBO78Dirb3',
        uri: 'spotify:track:28h1cfhxOM8oxBO78Dirb3',
        track_href: 'https://api.spotify.com/v1/tracks/28h1cfhxOM8oxBO78Dirb3',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/28h1cfhxOM8oxBO78Dirb3',
        duration_ms: 233685,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'Change Shapes',
        artist: 'Lauren Mayberry',
        image:
          'https://i.scdn.co/image/ab67616d0000b2733970a0c7a90c5358c3041c8d',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.93,
        energy: 0.463,
        key: 1,
        loudness: -9.269,
        mode: 1,
        speechiness: 0.181,
        acousticness: 0.0245,
        instrumentalness: 0.00000801,
        liveness: 0.101,
        valence: 0.91,
        tempo: 128.019,
        type: 'audio_features',
        id: '0SQC9AaDUmNQKmV9Trq0j4',
        uri: 'spotify:track:0SQC9AaDUmNQKmV9Trq0j4',
        track_href: 'https://api.spotify.com/v1/tracks/0SQC9AaDUmNQKmV9Trq0j4',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/0SQC9AaDUmNQKmV9Trq0j4',
        duration_ms: 205300,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'Supersonic - Remastered Live At Glasgow Tramshed',
        artist: 'Oasis',
        image:
          'https://i.scdn.co/image/ab67616d0000b273f6e71eb3e45eafeca603541a',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.161,
        energy: 0.929,
        key: 4,
        loudness: -2.515,
        mode: 1,
        speechiness: 0.0749,
        acousticness: 0.000108,
        instrumentalness: 0.943,
        liveness: 0.901,
        valence: 0.293,
        tempo: 109.415,
        type: 'audio_features',
        id: '70GJM8jQyORo8sWVbt5E59',
        uri: 'spotify:track:70GJM8jQyORo8sWVbt5E59',
        track_href: 'https://api.spotify.com/v1/tracks/70GJM8jQyORo8sWVbt5E59',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/70GJM8jQyORo8sWVbt5E59',
        duration_ms: 331360,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'One - Radio Edit',
        artist: 'Metallica',
        image:
          'https://i.scdn.co/image/ab67616d0000b2734c9fc157cd0b0ce4196f9aeb',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.446,
        energy: 0.653,
        key: 7,
        loudness: -8.751,
        mode: 1,
        speechiness: 0.0599,
        acousticness: 0.00205,
        instrumentalness: 0.00667,
        liveness: 0.33,
        valence: 0.677,
        tempo: 104.386,
        type: 'audio_features',
        id: '47TGimMl4JMcnLaDFEyd6h',
        uri: 'spotify:track:47TGimMl4JMcnLaDFEyd6h',
        track_href: 'https://api.spotify.com/v1/tracks/47TGimMl4JMcnLaDFEyd6h',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/47TGimMl4JMcnLaDFEyd6h',
        duration_ms: 302397,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'Loneliness',
        artist: 'Ginger Root',
        image:
          'https://i.scdn.co/image/ab67616d0000b273e733f02e7d478785875daf34',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.588,
        energy: 0.902,
        key: 11,
        loudness: -4.88,
        mode: 1,
        speechiness: 0.0459,
        acousticness: 0.17,
        instrumentalness: 0.447,
        liveness: 0.332,
        valence: 0.665,
        tempo: 137.947,
        type: 'audio_features',
        id: '0t1qI2DYS68veTpLBGUsNM',
        uri: 'spotify:track:0t1qI2DYS68veTpLBGUsNM',
        track_href: 'https://api.spotify.com/v1/tracks/0t1qI2DYS68veTpLBGUsNM',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/0t1qI2DYS68veTpLBGUsNM',
        duration_ms: 207210,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: '夜の向こうへ',
        artist: 'the band apart',
        image:
          'https://i.scdn.co/image/ab67616d0000b273eaccc45ff8ffb09ba36e9c9c',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.626,
        energy: 0.853,
        key: 8,
        loudness: -7.72,
        mode: 1,
        speechiness: 0.0338,
        acousticness: 0.00472,
        instrumentalness: 0.00112,
        liveness: 0.0963,
        valence: 0.913,
        tempo: 124.997,
        type: 'audio_features',
        id: '5I7I5IuAegKHKuIDGI3Djj',
        uri: 'spotify:track:5I7I5IuAegKHKuIDGI3Djj',
        track_href: 'https://api.spotify.com/v1/tracks/5I7I5IuAegKHKuIDGI3Djj',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/5I7I5IuAegKHKuIDGI3Djj',
        duration_ms: 240627,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: '夜行性の生き物3匹',
        artist: 'Yura Yura Teikoku',
        image:
          'https://i.scdn.co/image/ab67616d0000b27399716e421d08c4a5d1fa6ce5',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.356,
        energy: 0.998,
        key: 10,
        loudness: -0.359,
        mode: 0,
        speechiness: 0.294,
        acousticness: 0.000146,
        instrumentalness: 0,
        liveness: 0.353,
        valence: 0.206,
        tempo: 151.237,
        type: 'audio_features',
        id: '0m9xMRVaoz9oZRQVPt7RVX',
        uri: 'spotify:track:0m9xMRVaoz9oZRQVPt7RVX',
        track_href: 'https://api.spotify.com/v1/tracks/0m9xMRVaoz9oZRQVPt7RVX',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/0m9xMRVaoz9oZRQVPt7RVX',
        duration_ms: 228333,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: '微熱',
        artist: 'UA',
        image:
          'https://i.scdn.co/image/ab67616d0000b2737537132019e79a3789fd800f',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.605,
        energy: 0.861,
        key: 5,
        loudness: -5.811,
        mode: 1,
        speechiness: 0.233,
        acousticness: 0.241,
        instrumentalness: 0.0000148,
        liveness: 0.309,
        valence: 0.785,
        tempo: 169.969,
        type: 'audio_features',
        id: '5J1J23if5Y1Hzb7kqCNzyC',
        uri: 'spotify:track:5J1J23if5Y1Hzb7kqCNzyC',
        track_href: 'https://api.spotify.com/v1/tracks/5J1J23if5Y1Hzb7kqCNzyC',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/5J1J23if5Y1Hzb7kqCNzyC',
        duration_ms: 262971,
        time_signature: 4,
      },
    ],
  },
  {
    details: [
      {
        track: 'いってらっしゃい',
        artist: 'Ai Higuchi',
        image:
          'https://i.scdn.co/image/ab67616d0000b2732a30ef7868bbc42982e37ba2',
      },
    ],
    audioFeatures: [
      {
        danceability: 0.587,
        energy: 0.385,
        key: 10,
        loudness: -8.589,
        mode: 1,
        speechiness: 0.0377,
        acousticness: 0.29,
        instrumentalness: 0,
        liveness: 0.108,
        valence: 0.185,
        tempo: 74.907,
        type: 'audio_features',
        id: '4DF77S38RM9jX4ojH5qgl0',
        uri: 'spotify:track:4DF77S38RM9jX4ojH5qgl0',
        track_href: 'https://api.spotify.com/v1/tracks/4DF77S38RM9jX4ojH5qgl0',
        analysis_url:
          'https://api.spotify.com/v1/audio-analysis/4DF77S38RM9jX4ojH5qgl0',
        duration_ms: 235433,
        time_signature: 4,
      },
    ],
  },
];
