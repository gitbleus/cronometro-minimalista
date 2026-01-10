import { useState, useEffect } from 'react';

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

  const startPause = () => setIsActive(!isActive);

  const reset = () => {
    setIsActive(false);
    setTimeLeft(initialSeconds);
  };

  const setTime = (seconds) => {
    setIsActive(false);
    setTimeLeft(seconds);
  }

  return {timeLeft, isActive, startPause, reset, setTime}
}