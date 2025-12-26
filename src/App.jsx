import React from "react";
import { useState, useEffect, useRef } from "react";
import Display from "./components/Display";
import DrumpPad from "./components/DrumpPad";

const tracks = [
  {
    word: "Q",
    percution: "Header1",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    word: "W",
    percution: "Header2",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    word: "E",
    percution: "Header3",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    word: "A",
    percution: "Header4",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    word: "S",
    percution: "Clap",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    word: "D",
    percution: "Open-HH",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    word: "Z",
    percution: "Kick-n-Hat",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    word: "X",
    percution: "Kick",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    word: "C",
    percution: "Closed-HH",
    audio:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function App() {
  const [description, setDescription] = useState("Click a word");

  return (
    <>
      <main className="bg-sky-800/80 flex flex-col gap-2 h-dvh pt-10 p-2 ">
        <h1 className="text-white text-shadow-md text-shadow-zinc-600 text-center text-6xl font-bold mb-10">
          CAJA DE RITMOS
        </h1>
        <section
          id="drum-machine"
          className="flex flex-col bg-zinc-500 p-4 size-150 self-center space-y-4 rounded-xl border-2 shadow-lg"
        >
          <Display text={description} />
          <section className="grid grid-cols-3 gap-2 h-full">
            {tracks.map((item, i) => {
              return (
                <DrumpPad
                  key={i}
                  id={item.percution}
                  name={item.word}
                  setDescriptionText={setDescription}
                  setWord={item.word}
                  audio={item.audio}
                ></DrumpPad>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
