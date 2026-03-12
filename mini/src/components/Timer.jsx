import { useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {

    if(intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

  };

  const stopTimer = () => {

    clearInterval(intervalRef.current);
    intervalRef.current = null;

  };

  const resetTimer = () => {

    stopTimer();
    setSeconds(0);

  };

  useEffect(() => {

    return () => {
      clearInterval(intervalRef.current);
    };

  }, []);

  return (
    <div className="timer-container">

      <h2>Timer</h2>

      <div className="timer-display">
        {seconds}
      </div>

      <div className="timer-buttons">

        <button onClick={startTimer}>
          Start
        </button>

        <button onClick={stopTimer}>
          Stop
        </button>

        <button onClick={resetTimer}>
          Reset
        </button>

      </div>

    </div>
  );
};

export default Timer;