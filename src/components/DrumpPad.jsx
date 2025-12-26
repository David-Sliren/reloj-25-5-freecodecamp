import React, { useRef } from "react";
import DrumpAudio from "./DrumpAudio";
import { useEffect } from "react";

function DrumpPad({ id, action, name, setDescriptionText, setWord, audio }) {
  const audioTracks = useRef();

  function reproduce() {
    audioTracks.current.currentTime = 0;
    audioTracks.current.play();
    setDescriptionText(id);
  }

  useEffect(() => {
    function pressKey(e) {
      if (e.key.toUpperCase() === name) {
        reproduce();
      }
    }

    window.addEventListener("keydown", pressKey);

    return () => {
      window.removeEventListener("keydown", pressKey);
    };
  }, []);

  return (
    <div
      className="drum-pad bg-zinc-200/50 flex justify-center items-center p-4 text-lg cursor-pointer border-2 rounded-2xl hover:bg-zinc-200/70 transition ease-in-out duration-350 shadow-lg"
      id={id}
      onClick={reproduce}
    >
      <p className="text-3xl font-extrabold">{name}</p>
      <DrumpAudio dom={audioTracks} sorce={audio} id={setWord} />
    </div>
  );
}

export default DrumpPad;
