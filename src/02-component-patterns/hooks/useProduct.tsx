import { useState, useEffect, useRef } from 'react';

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
  // comprobar si el componente tiene definido el onChange
  // el !! lo vuelve a true
  const isControlled = useRef(!!onChange);

  // no permitir valores negativos
  const increaseBy = (value: number) => {
    // con el ! le indicamos a TS que este punto onChange siempre tiene un valor y no es undefined
    if (isControlled.current) return onChange!({ count: value, product });

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    // ejecutar el onChange solo en caso de ser diferente a null o undefined
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => setCounter(value), [value]);

  return { counter, increaseBy };
};
