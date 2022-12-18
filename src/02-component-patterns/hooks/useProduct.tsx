import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  // no permitir valores negativos
  const increaseBy = (value: number) =>
    setCounter((prev) => Math.max(prev + value, 0));

  return { counter, increaseBy };
};
