import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function useBtnLogic() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const reloj = useRef();
  const alarm = useRef();

  useEffect(() => {
    if (!isActive) {
      clearInterval(reloj.current);
    } else {
      reloj.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(reloj.current);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) {
      setTimeLeft(sessionLength * 60);
    }
  }, [sessionLength]);

  useEffect(() => {
    if (timeLeft === 0) {
      if (!isBreak) {
        setIsBreak(true);
        setTimeLeft(breakLength * 60);
      } else {
        setTimeLeft(sessionLength * 60);
        setIsBreak(false);
      }

      alarm.current.play();
    }
  }, [timeLeft, isBreak, breakLength, sessionLength]);

  // Convertir a minutos y segundos
  function convertMinutes(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    const minutes = String(m).padStart(2, "0");
    const second = String(s).padStart(2, "0");

    return `${minutes}:${second}`;
  }

  function playStop() {
    setIsActive(!isActive);
  }

  function reset() {
    clearInterval(reloj.current);
    setIsActive(false);
    setIsBreak(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);

    if (alarm.current) {
      alarm.current.pause();
      alarm.current.currentTime = 0;
    }
  }

  function breakIncrement() {
    if (breakLength === 60) return;
    setBreakLength((prev) => prev + 1);
  }

  function breakDecrement() {
    if (breakLength === 1) return;
    setBreakLength((prev) => prev - 1);
  }

  function sessionIncrement() {
    if (sessionLength === 60) return;
    setSessionLength((prev) => prev + 1);
  }

  function sessionDecrement() {
    if (sessionLength === 1) return;
    setSessionLength((prev) => prev - 1);
  }

  return {
    breakLength,
    sessionLength,
    timeLeft,
    alarm,
    isBreak,
    functions: {
      reset,
      sessionDecrement,
      breakDecrement,
      sessionIncrement,
      breakIncrement,
      playStop,
      convertMinutes,
    },
  };
}

export default useBtnLogic;
