import { readable } from 'svelte/store';

export const stopwatch = (tickIntervalMs=50) => readable(0, set => {
  const initialTime = Date.now();
  const interval = setInterval(() => {
    set((Date.now() - initialTime) / 1000);
  }, tickIntervalMs);
  return () => clearInterval(interval);
});
