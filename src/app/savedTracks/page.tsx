'use client';

import { useRouter } from 'next/navigation';
import SavedTrackList from '@/components/SavedTrackList';
import ErrorMessage from '@/components/ErrorMessage';
import Loading from '@/components/Loading';
import TrackDetailsModal from '@/components/TrackDetailsModal';
import PaginationControls from '@/components/PaginationControls';
import { useSavedTracks } from '@/hooks/useSavedTracks';
import { useTrackModal } from '@/hooks/useTrackModal';
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

  const { selectedTrack, isModalOpen, openModal, closeModal } = useTrackModal();

  const router = useRouter();

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
    closeModal();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <SavedTrackList
        savedTracks={savedTracks}
        total={total}
        onTrackClick={openModal}
      />
      {isModalOpen && selectedTrack && (
        <TrackDetailsModal
          track={selectedTrack}
          isOpen={isModalOpen}
          onClose={closeModal}
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
