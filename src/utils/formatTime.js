export const formatTime = (value) => {
  const hours = Math.floor(value/3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = value % 60;

  const pad = (num) => num.toString().padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}