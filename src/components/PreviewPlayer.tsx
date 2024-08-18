import React, { useState } from 'react';

type PreviewPlayerProps = {
  previewUrl: string;
};

const PreviewPlayer: React.FC<PreviewPlayerProps> = ({ previewUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 "
        onClick={togglePlay}
      >
        {isPlaying ? '◼︎' : '▶︎'}
      </button>
      {isPlaying && (
        <audio controls autoPlay className="mt-4">
          <source src={previewUrl} type="audio/mpeg" />
          your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default PreviewPlayer;
