import { readable } from 'svelte/store';

export const stopwatch = (initial=0, tickIntervalMs=50) => readable(0, set => {
  const initialTime = Date.now() - initial * 1000;
  const interval = setInterval(() => {
    set((Date.now() - initialTime) / 1000);
  }, tickIntervalMs);
  return () => clearInterval(interval);
});
