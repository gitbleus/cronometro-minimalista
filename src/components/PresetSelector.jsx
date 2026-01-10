export default function PresetSelector({setTime}) {
  const presets = [
    {label: 'Pomodoro', seconds: 25 * 60},
    {label: 'Redação (1h30)', seconds: 60 * 90},
    {label: 'ENEM Dia 1 (5h30)', seconds: (5*3600) + (30*60)},
    {label: 'ENEM Dia 2 (5h)', seconds: 5 * 3600},
  ];

  return (
    <div className="presets-wrapper">
      {presets.map((preset) => (
        <button
          key={preset.label}
          onClick={() => setTime(preset.seconds)}
          className="btn-preset"
        >
          {preset.label}
        </button>
      ))}
    </div>
  )
}