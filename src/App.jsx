import React from "react";
import { useState, useEffect, useRef } from "react";
import Timmer from "./components/Timmer";
import Controls from "./components/Controls";
import Elements from "./components/Elements";
import useBtnLogic from "./hooks/useBtnLogic";
import sound from "./assets/sounds/miku-alarm.mp3";

function App() {
  const { breakLength, sessionLength, timeLeft, alarm, isBreak, functions } =
    useBtnLogic();

  const {
    reset,
    sessionIncrement,
    breakIncrement,
    sessionDecrement,
    breakDecrement,
    playStop,
    convertMinutes,
  } = functions;

  return (
    <>
      <main className="bg-zinc-900/80 flex flex-col items-center gap-8 h-dvh pb-30 pt-15  overflow-y-auto overflow-x-hidden">
        <h1 className="text-zinc-950 text-shadow-md text-shadow-stone-600 text-center text-5xl font-extrabold mb-10 md:text-6xl">
          RELOJ 25+5
        </h1>
        <section className="flex flex-col gap-20 md:flex-row">
          <Elements
            id="break-label"
            id2="break-length"
            textP="Break Length"
            textS={breakLength}
            btnId2="break-decrement"
            btnId="break-increment"
            btnText="+"
            btnText2="-"
            logic={breakIncrement}
            logic2={breakDecrement}
          />
          <Elements
            id="session-label"
            id2="session-length"
            textP="Session Length"
            textS={sessionLength}
            btnId2="session-decrement"
            btnId="session-increment"
            btnText="+"
            btnText2="-"
            logic={sessionIncrement}
            logic2={sessionDecrement}
          />
        </section>
        <Timmer
          time={convertMinutes(timeLeft)}
          btnId="start_stop"
          btnId2="reset"
          btnText="Start"
          btnText2="reset"
          logic={reset}
          logic2={playStop}
          title={isBreak}
        />
        <audio id="beep" src={sound} ref={alarm} />
      </main>
    </>
  );
}

export default App;
