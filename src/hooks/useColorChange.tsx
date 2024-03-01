import { useState } from 'react';

function useColorChange(colors: string[]) {
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);

  setInterval(() => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }, 1000);

  // Return the current color
  return colors[currentColorIndex];
}

export default useColorChange;
