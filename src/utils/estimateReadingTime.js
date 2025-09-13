export function estimateReadingTime(text='') {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = words / 180; // ~180 wpm children reading
  return { words, minutes: Math.max(0.5, Number(minutes.toFixed(2))) };
}
