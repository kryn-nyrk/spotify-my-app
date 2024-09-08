import React, { useState, useRef } from 'react';

type PreviewPlayerProps = {
  previewUrl: string;
};

const PreviewPlayer: React.FC<PreviewPlayerProps> = ({ previewUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center">
      {isPlaying ? (
        <button
          className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 "
          onClick={togglePlay}
        >
          Stop
        </button>
      ) : (
        <button
          className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 "
          onClick={togglePlay}
        >
          Play
        </button>
      )}
      <audio ref={audioRef} src={previewUrl} className="hidden" />
    </div>
  );
};

export default PreviewPlayer;
