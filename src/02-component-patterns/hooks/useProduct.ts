import { useState, useEffect, useRef } from 'react';

import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  // verificar cuando el componente esta montado o no, asi evitar redenrizados innecesarios
  const isMounted = useRef(false);

  // no permitir valores negativos
  const increaseBy = (value: number) => {
    // no aceptar valores menos de 0
    let newValue = Math.max(counter + value, 0);

    // no aceptar valores mayores a lo definido en el maxCount de initialValues
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    // ejecutar el onChange solo en caso de ser diferente a null o undefined
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => setCounter(initialValues?.count || value);

  useEffect(() => {
    // ejecutar el setCounter solo cuando el componente este montado
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    reset,
    maxCount: initialValues?.maxCount,
    // siempre se devuelve un valor boleano, en caso que maxCount de initialValue sea undefined,
    // gracias a los !! lo retornara como false
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
  };
};
