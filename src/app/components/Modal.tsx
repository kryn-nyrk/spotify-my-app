'use client';
import { FC } from 'react';
import { SpotifyTrack } from '../types';

type ModalProps = {
  isOpen: boolean;
  onOk: (track: SpotifyTrack) => void;
  onClose: () => void;
  track?: SpotifyTrack;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, track, onOk }) => {
  if (!isOpen || !track) return null;

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div
          className='fixed inset-0 bg-black opacity-50'
          onClick={onClose}
        ></div>
        <div className='bg-white p-6 rounded shadow-lg z-10'>
          <img src={track.album?.images?.[1].url} alt={track.name} />
          <h2 className='text-2xl mb-4'>{track.name}</h2>
          <p className='mb-4'>
            Artist: {track.artists.map((artist) => artist.name)}
          </p>
          <p className='mb-4'>Album: {track.album.name}</p>
          <button
            onClick={onClose}
            className='bg-orange-500 rounded-xl text-white p-2 m-2 w-20'
          >
            cancel
          </button>
          <button
            onClick={() => onOk(track)}
            className='bg-blue-500 rounded-xl text-white p-2 m-2 w-20'
          >
            ok
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
