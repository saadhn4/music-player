import React, { useRef, useState } from "react";
import { songs } from "./songs";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  function togglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-[1rem]">
      {songs.map((song, index) => {
        return (
          <div
            className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-2xl w-[300px] max-w-[300px] text-center"
            key={index}
          >
            <img
              className="w-50 h-50 rounded-lg shadow"
              src={song.img}
              alt="song-pic"
            />
            <p className="mt-3 font-semibold">{song.title}</p>
            <audio
              className="hidden"
              ref={audioRef}
              src={song.track}
              controls
            ></audio>
            <div className="flex justify-center items-center pb-2 mt-3">
              <button className="font-bold cursor-pointer text-3xl mr-2">
                ⏮️
              </button>
              <button
                className="font-bold cursor-pointer text-3xl  mr-2"
                onClick={togglePlay}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </button>
              <button className="font-bold cursor-pointer text-3xl">⏭️</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
