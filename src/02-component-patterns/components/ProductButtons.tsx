import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <span className={styles.countLabel}>{counter}</span>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
