import {formatTime} from '../utils/formatTime';

export default function TimerDisplay({seconds}) {
  const colorClass = seconds < 60 && seconds > 0 ? 'text-red-500 animate-pulse' : 'text-slate-100';

  return (
    <div className={`clock-display ${colorClass}`}>
      {formatTime(seconds)}
    </div>
  );
}