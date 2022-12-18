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

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
