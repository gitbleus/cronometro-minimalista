import { Play, Pause, RotateCcw} from "lucide-react";

export default function Controls({isActive, onStartPause, onReset}) {
  return (
    <div className="controls-wrapper">
      <button
        onClick={onStartPause}
        className={`btn-control ${isActive ? 'btn-pause' : 'btn-start'}`}
      >
        {isActive ? <><Pause/> Pausar</> : <><Play/> Iniciar</>}
      </button>

      <button
        onClick={onReset}
        className="btn-control btn-reset">

          <RotateCcw/> Reiniciar
        </button>

    </div>
  );
}