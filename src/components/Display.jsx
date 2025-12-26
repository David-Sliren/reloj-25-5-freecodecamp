import React from "react";

function Display({ text }) {
  return (
    <section id="display" className="bg-zinc-400/60 p-4 rounded-lg shadow-md">
      <p className="text-2xl text-zinc-200 text-shadow-md text-shadow-zinc-600 font-bold text-center">
        {text}
      </p>
    </section>
  );
}

export default Display;
