'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SavedTrackList from '@/components/SavedTrackList';
import Modal from '@/components/Modal';
import Loading from '@/components/Loading';
import { useSavedTracks } from '@/hooks/useSavedTracks';
import { SpotifyTrack } from '@/types';

const SavedTracksPage = () => {
  const {
    savedTracks,
    total,
    isLoading,
    error,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  } = useSavedTracks();
  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleTrackClick = (track: SpotifyTrack) => {
    setSelectedTrack(track);
    setIsModalOpen(true);
    console.log(track);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTrack(undefined);
  };

  const handleOkClick = () => {
    if (selectedTrack) {
      const params = new URLSearchParams({
        trackId: selectedTrack.id,
        trackName: selectedTrack.name,
        trackImage: selectedTrack.album.images[1].url,
        trackArtist: selectedTrack.artists
          .map((artist) => artist.name)
          .join(', '),
      });

      router.push(`/recommendations?${params.toString()}`);
    }
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2 className="text-center font-bold text-lg">My favorite track</h2>
      <p className="text-gray-600">Total: {total}</p>
      <SavedTrackList
        savedTracks={savedTracks}
        handleTrackClick={handleTrackClick}
      />
      {isModalOpen && selectedTrack && (
        <Modal
          title="Track Details"
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onOk={handleOkClick}
          onCancel={handleModalClose}
        >
          <div>
            <img
              src={selectedTrack.album.images[0]?.url}
              alt={selectedTrack.name}
              width="100"
            />
            <h3>{selectedTrack.name}</h3>
            <p>
              {selectedTrack.artists.map((artist) => artist.name).join(', ')}
            </p>
            <p>{selectedTrack.album.name}</p>
          </div>
        </Modal>
      )}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevPage}
          disabled={!hasPrevPage}
          className="bg-purple-400 hover:bg-purple-500 rounded-md text-white h-10 w-16 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          prev
        </button>
        <button
          onClick={nextPage}
          disabled={!hasNextPage}
          className="bg-purple-400 hover:bg-purple-500 rounded-md text-white h-10 w-16 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          next
        </button>
      </div>
    </>
  );
};

export default SavedTracksPage;
