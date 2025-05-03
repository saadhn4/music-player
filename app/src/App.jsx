import React, { useEffect, useRef, useState } from "react";
import { songs } from "./songs";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);
  const currentSong = songs[currentIndex];
  function togglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function toggleNext() {
    if (currentIndex >= songs.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
    setIsPlaying(true);
  }

  function togglePrev() {
    if (currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
    setIsPlaying(true);
  }

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex]);
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-[1rem]">
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-2xl w-[300px] max-w-[300px] text-center">
        <img
          className="w-50 h-50 rounded-lg shadow"
          src={currentSong.img}
          alt="song-pic"
        />
        <p className="mt-3 font-semibold">{currentSong.title}</p>
        <audio
          className="hidden"
          ref={audioRef}
          src={currentSong.track}
          controls
        ></audio>
        <div className="flex justify-center items-center pb-2 mt-2">
          <button
            onClick={togglePrev}
            className="font-bold cursor-pointer text-3xl mr-1"
          >
            ⏮️
          </button>
          <button
            className="font-bold cursor-pointer text-3xl  mr-1"
            onClick={togglePlay}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            onClick={toggleNext}
            className="font-bold cursor-pointer text-3xl"
          >
            ⏭️
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
