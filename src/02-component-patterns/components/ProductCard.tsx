import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  ProductCardProps,
  ProductContextProps,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// creación del context para pasar info del padre al hijo
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {/* En este punto children es una función asi que hay que ejecutarla */}
        {/* de lo contrario React no la podrá renderizar */}
        {/* ahora que children es una función, se le pueden enviar argumentos */}
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
