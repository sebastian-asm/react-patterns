import { useState, useEffect } from 'react';

import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  // no permitir valores negativos
  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    // ejecutar el onChange solo en caso de ser diferente a null o undefined
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => setCounter(value), [value]);

  return { counter, increaseBy };
};
