import React from 'react';
import Modal from '@/components/Modal';
import { SpotifyTrack } from '@/types';

const TrackDetailsModal = ({
  track,
  isOpen,
  onClose,
  onOk,
}: {
  track: SpotifyTrack;
  isOpen: boolean;
  onClose: () => void;
  onOk: () => void;
}) => (
  <Modal
    title="Track Details"
    isOpen={isOpen}
    onClose={onClose}
    onOk={onOk}
    onCancel={onClose}
  >
    <div>
      <img src={track.album.images[0]?.url} alt={track.name} width="100" />
      <h3 className="font-bold text-gray-500">{track.name}</h3>
      <p className="text-gray-900">
        {track.artists.map((artist) => artist.name).join(', ')}
      </p>
      <p className="text-gray-500">{track.album.name}</p>
    </div>
  </Modal>
);

export default TrackDetailsModal;
