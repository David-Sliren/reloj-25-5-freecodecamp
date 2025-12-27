import React, { useRef } from "react";
import { useEffect } from "react";
import Controls from "./Controls";

function Timmer({
  time,
  btnId,
  btnId2,
  btnText,
  btnText2,
  logic,
  logic2,
  title,
}) {
  return (
    <div
      id="timer-label"
      className={`bg-linear-to-t ${
        !title ? "from-stone-500" : "from-zinc-900/90"
      } to-transparent  flex flex-col items-center justify-between w-90 min-h-60 p-5 rounded-2xl`}
    >
      <p
        className={`${
          !title ? "text-black" : "text-white"
        }  text-3xl font-extrabold transition-colors duration-400`}
      >
        {!title ? "Session" : "Break"}
      </p>

      <div
        id="time-left"
        className={` ${
          !title ? "text-black" : "text-white"
        } text-5xl font-extrabold text-shadow-lg transition-colors duration-400`}
      >
        {time}
      </div>

      <Controls
        id={btnId}
        id2={btnId2}
        text={btnText}
        text2={btnText2}
        action2={logic}
        action={logic2}
      />
    </div>
  );
}

export default Timmer;
