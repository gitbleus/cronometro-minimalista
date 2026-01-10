import { useState } from 'react';
import { Play } from 'lucide-react';
import { parseTimeInput } from '../utils/parseTime';

export default function SandboxInput({ onAdd }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const seconds = parseTimeInput(input);

    if (seconds > 0) {
      onAdd(seconds);
      setInput('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='sandbox-wrapper'>
      <div className='relative flex items-center'>
        <input
          type="text" 
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Ex: 10m, 2h 30min, 30s"
          className={`input-sandbox ${error ? 'input-sandbox-error' : 'input-sandbox-normal'}`}
        />

        <button
          type="submit"
          className='btn-sandbox-submit'
          title="Definir tempo"  
        >
          <Play size={18} fill='currentColor'/>
        </button>
      </div>
      {error && <span className='sandbox-error-msg'>Formato inválido. Tente "1h" ou "30min".</span>}
    </form>
  )
}