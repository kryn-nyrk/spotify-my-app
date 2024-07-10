'use client';
import { useEffect, useState, FC } from 'react';
import { SpotifyTrack } from '../types';

type SearchTrackListProps = {
  limit: number;
  setLimit: (limit: number) => void;
  offset: number;
  setOffset: (offset: number) => void;
  query: string;
  setQuery: (query: string) => void;
  tracks: SpotifyTrack[];
};

const SearchTrackList: FC<SearchTrackListProps> = ({
  limit,
  setLimit,
  offset,
  setOffset,
  query,
  setQuery,
  tracks,
}) => {
  /*
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (query.trim() === '') return;

    const fetchTracks = async () => {
      try {
        const response = await fetch(
          `/api/spotify/search?query=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setTracks(data.items);
        } else {
          console.log('トラックの取得に失敗しました。');
          setTracks([]);
        }
      } catch (error) {
        console.error('エラーが発生しました。', error);
        setTracks([]);
      }
    };

    fetchTracks();
  }, [query, limit, offset]);
*/

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOffset(0);
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('query') as string;
    setQuery(searchQuery);
  };

  return (
    <div className='p-2 m-2'>
      <h1>Search Tracks</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search:
          <input type='text' name='query' className='border' />
        </label>
        <button
          className='bg-blue-400 rounded-lg text-white p-2 m-2'
          type='submit'
        >
          Search
        </button>
      </form>
      <div>
        <label>
          Limit:
          <input
            type='number'
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className='border'
          />
        </label>
        <label>
          Offset:
          <input
            type='number'
            value={offset}
            onChange={(e) => setOffset(Number(e.target.value))}
            className='border'
          />
        </label>
      </div>
      {tracks.length > 0 ? (
        <div className='grid gap-x-4 gap-y-8 grid-cols-4'>
          {tracks.map((track) => (
            <div key={track.id}>
              <a
                href={track.external_urls.spotify}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-grey-100'
              >
                <img
                  src={track.album.images[1]?.url}
                  alt={track.name}
                  loading='lazy'
                  className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />
              </a>
              <div>
                <a
                  href={track.artists[0].external_urls.spotify}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:grey-800 mb-1 text-grey-500 transition duration-100'
                >
                  {track.artists[0].name}
                </a>
                <div className='flex items-end gap-2'>
                  <p className='font-bold text-grey-800'>{track.name}</p>
                  <p className='font-normal text-grey-600'>
                    {track.album.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No tracks found</p>
      )}
      <div className='m-3'>
        <button
          onClick={() => setOffset(Math.max(0, offset - limit))}
          disabled={offset <= 0}
        >
          Previous
        </button>
        <button onClick={() => setOffset(offset + limit)}>Next</button>
      </div>
    </div>
  );
};

export default SearchTrackList;
