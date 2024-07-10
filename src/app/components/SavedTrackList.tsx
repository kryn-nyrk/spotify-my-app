'use client';
import { useState, FC } from 'react';
import { SpotifyTrack, SpotifySavedTracksResponse } from '../types';
import Modal from './Modal';

type SavedTrackListProps = {
  limit: number;
  setLimit: (limit: number) => void;
  offset: number;
  setOffset: (offset: number) => void;
  selectedTrack: SpotifyTrack | undefined;
  setSelectedTrack: (track: SpotifyTrack | undefined) => void;
  tracks: SpotifyTrack[];
};

const SavedTrackList: FC<SavedTrackListProps> = ({
  limit,
  setLimit,
  offset,
  setOffset,
  selectedTrack,
  setSelectedTrack,
  tracks,
}) => {
  /*
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  
  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | undefined>(
    undefined,
  );
  */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (track: SpotifyTrack) => {
    setSelectedTrack(track);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTrack(undefined);
    setIsModalOpen(false);
  };

  const onOk = (track: SpotifyTrack) => {
    setSelectedTrack(track);
    setIsModalOpen(false);
  };

  /*
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          `/api/spotify/saved?limit=${limit}&offset=${offset}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.ok) {
          const data: SpotifySavedTracksResponse = await response.json();
          setTracks(data.items.map((item) => item.track));
          setTotal(data.total);
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
  }, [limit, offset]);
*/

  return (
    <div className='p-2 m-2'>
      <h1>Saved Tracks</h1>
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
                href={track.external_urls?.spotify || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-grey-100'
              >
                <img
                  src={
                    track.album?.images?.[1]?.url ||
                    'https://via.placeholder.com/150'
                  }
                  alt={track.name}
                  loading='lazy'
                  className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />
              </a>
              <div>
                {track.artists && track.artists.length > 0 ? (
                  <a
                    href={track.artists[0].external_urls?.spotify || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:grey-800 mb-1 text-grey-500 transition duration-100'
                  >
                    {track.artists[0].name || 'Unknown Artist'}
                  </a>
                ) : (
                  <span className='hover:grey-800 mb-1 text-grey-500 transition duration-100'>
                    Unknown Artist
                  </span>
                )}
                <div
                  className='flex items-end gap-2'
                  onClick={() => openModal(track)}
                >
                  <p className='font-bold text-grey-800'>{track.name}</p>
                  <p className='font-normal text-grey-600'>
                    {track.album?.name || 'Unknown Album'}
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        track={selectedTrack}
        onOk={onOk}
      />
    </div>
  );
};

export default SavedTrackList;
