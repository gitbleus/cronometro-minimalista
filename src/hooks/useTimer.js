import { useState, useEffect } from 'react';

const MAX_SECONDS = 99 * 3600 + 59 * 60 + 59;

export const useTimer = (initialSeconds = 0) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev-1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startPause = () => setIsActive((prev) => !prev);

  const reset = () => {
    setIsActive(false);
    setTimeLeft(0);
  };

  const setTime = (seconds) => {
    setIsActive(false);
    setTimeLeft(Math.min(seconds, MAX_SECONDS));
  }

  const addTime = (seconds) => {
    setIsActive(false);
    setTimeLeft((prev) => Math.min(prev + seconds, MAX_SECONDS))
  }

  return {timeLeft, isActive, startPause, reset, setTime, addTime}
}