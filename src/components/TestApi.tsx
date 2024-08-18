import { useSavedTracks } from '@/hooks/useSavedTracks';
import { useProfile } from '@/hooks/useProfile';
import { useAudioFeatures } from '@/hooks/useAudioFeatures';
import { useRecommendations } from '@/hooks/useRecommendations';
import { useAvailableGenres } from '@/hooks/useAvailableGenres';

export const TestApi = () => {
  /*
  const { savedTracks, limit, offset } = useSavedTracks();
  console.log('savedTracks: ', savedTracks);
  const { profile } = useProfile();
  console.log('profile: ', profile);
  const { audioFeatures } = useAudioFeatures('0mFZkqGWBhcB6opK2lYo1U');
  console.log('audio-Features: ', audioFeatures);
    const { recommendationsTracks } = useRecommendations(
    '0mFZkqGWBhcB6opK2lYo1U',
    ['j-pop', 'j-rock']
  */

  return (
    <>
      <h2>apiアクセステスト</h2>
      <div>
        <button>
          <a href="api/spotify/auth/login">api/spotify/auth テスト</a>
        </button>
      </div>
      <div>
        <button>
          <a href="api/spotify/profile">api/spotify/profile テスト</a>
        </button>
        <div>
          <button>
            <a href="api/spotify/saved-tracks?limit=20&offset=0">
              api/spotify/saved-tracks テスト
            </a>
          </button>
        </div>
        <div>
          <button>
            <a href="api/spotify/audio-features/0mFZkqGWBhcB6opK2lYo1U">
              api/spotify/audio-features テスト
            </a>
          </button>
        </div>
        <div>
          <button>
            <a href="api/spotify/recommendations?seed_tracks=0mFZkqGWBhcB6opK2lYo1U&seed_genres=j-pop,j-rock">
              api/spotify/recommendations テスト
            </a>
          </button>
        </div>
        <div>
          <button>
            <a href="/api/spotify/available-genre-seeds">
              api/spotify/available-genre-seeds テスト
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default TestApi;
