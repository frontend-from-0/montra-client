export const formatTime = (time: string | Date): string => {
  const date = new Date(time);
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
