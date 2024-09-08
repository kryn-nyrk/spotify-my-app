'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SavedTrackList from '@/components/SavedTrackList';
import Modal from '@/components/Modal';
import Loading from '@/components/Loading';
import TrackDetailsModal from '@/components/TrackDetailsModal';
import PaginationControls from '@/components/PaginationControls';
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
    pageNumbers,
    hasNextPage,
    hasPrevPage,
    setOffset,
    currentPage,
    limit,
  } = useSavedTracks();

  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleTrackClick = (track: SpotifyTrack) => {
    setSelectedTrack(track);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTrack(undefined);
  };

  const navigateToRecommendations = (track: SpotifyTrack) => {
    const params = new URLSearchParams({
      trackId: track.id,
      trackName: track.name,
      trackImage: track.album.images[1].url,
      trackArtist: track.artists.map((artist) => artist.name).join(', '),
    });

    router.push(`/recommendations?${params.toString()}`);
  };

  const handleOkClick = () => {
    if (selectedTrack) {
      navigateToRecommendations(selectedTrack);
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
      <SavedTrackList
        savedTracks={savedTracks}
        total={total}
        onTrackClick={handleTrackClick}
      />
      {isModalOpen && selectedTrack && (
        <TrackDetailsModal
          track={selectedTrack}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onOk={handleOkClick}
        />
      )}
      <PaginationControls
        onPrevPage={prevPage}
        onNextPage={nextPage}
        setOffset={setOffset}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        limit={limit}
      />
    </>
  );
};

export default SavedTracksPage;
