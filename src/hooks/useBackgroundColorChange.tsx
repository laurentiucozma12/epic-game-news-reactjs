import { useEffect } from 'react';

function useColorChange(
  elementId: string,
  colors: string[],
  intervalDuration: number,
) {
  useEffect(() => {
    const element = document.getElementById(elementId);
    let colorIndex = 0;

    if (element) {
      const intervalId = setInterval(() => {
        element.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      }, intervalDuration);

      return () => clearInterval(intervalId);
    }
  }, [elementId, colors, intervalDuration]);
}

export default useColorChange;
