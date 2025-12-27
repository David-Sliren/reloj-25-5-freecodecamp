import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Controls from "./Controls";

function Elements({
  id,
  id2,
  textP,
  textS,
  btnId,
  btnId2,
  btnText,
  btnText2,
  logic,
  logic2,
}) {
  return (
    <div
      id={id}
      className="bg-linear-to-t from-stone-500 to-transparent  flex flex-col items-center justify-between gap-2 size-68 p-5 rounded-2xl"
    >
      <h2 className="text-3xl font-extrabold">{textP}</h2>
      <p className="text-5xl font-extrabold text-shadow-lg" id={id2}>
        {textS}
      </p>

      <Controls
        id={btnId}
        id2={btnId2}
        text={btnText}
        text2={btnText2}
        action={logic}
        action2={logic2}
      />
    </div>
  );
}

export default Elements;
