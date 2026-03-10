import { useTimer } from './hooks/useTimer'
import { useEffect } from 'react'
import { useState } from 'react'
import { formatTime } from './utils/formatTime'
import { FlaskConical, BookOpen} from 'lucide-react'
import TimerDisplay from './components/TimerDisplay'
import Controls from './components/Controls'
import PresetSelector  from './components/PresetSelector'
import SandboxInput from './components/SandboxInput'


function App() {
  const {timeLeft, isActive, startPause, reset, setTime, addTime} = useTimer(25 * 60);
  const [isSandbox, setIsSandbox] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.title = `${formatTime(timeLeft)} - Cronômetro`;
    }
    else {
      document.title = `Cronômetro`;
    }
  }, [timeLeft, isActive]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      if (event.target.tagName === 'BUTTON') {
        return;
      }

      if (event.code === 'Space') {
        event.preventDefault();
        startPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [startPause]);

  return (
    <>
    <div className="mode-toggle-wrapper">
        <button
          onClick={() => setIsSandbox(!isSandbox)}
          className="btn-mode-toggle"
        >
          {isSandbox ? (
            <>
              <BookOpen size={16} /> Modo ENEM
            </>
          ) : (
            <>
              <FlaskConical size={16} /> Modo Livre
            </>
          )}
        </button>
      </div>
      <div className='app-container relative'>

        {isSandbox ? (
          <SandboxInput onAdd={addTime} />
        ) : (
          <PresetSelector setTime={setTime} />
        )}

        <div className='glass-panel'>
          <TimerDisplay seconds={timeLeft} />
          <Controls isActive={isActive} onStartPause={startPause} onReset={reset} />

        </div>
      </div>
    </>
  )
}

export default App
