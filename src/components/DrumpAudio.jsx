import React, { useState, useRef } from "react";
import { useEffect } from "react";

function DrumpAudio({ id, sorce, dom }) {
  return <audio ref={dom} id={id} src={sorce} className=" clip" />;
}

export default DrumpAudio;
