import { useTimer } from './hooks/useTimer'
import TimerDisplay from './components/TimerDisplay'
import Controls from './components/Controls'
import PresetSelector  from './components/PresetSelector'


function App() {
  const {timeLeft, isActive, startPause, reset, setTime} = useTimer(25 * 60);

  return (
    <>
      <div className='app-container'>

        <PresetSelector setTime={setTime} />

        <div className='glass-panel'>
          <TimerDisplay seconds={timeLeft} />
          <Controls isActive={isActive} onStartPause={startPause} onReset={reset} />

        </div>
      </div>
    </>
  )
}

export default App
