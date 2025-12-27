import React, { useRef } from "react";
import { useEffect } from "react";

function Controls({ id, text, id2, text2, action, action2 }) {
  return (
    <div className="flex gap-2.5 ">
      <button id={id} className="color-btn" onClick={action}>
        {text}
      </button>
      <button id={id2} className="color-btn" onClick={action2}>
        {text2}
      </button>
    </div>
  );
}

export default Controls;
