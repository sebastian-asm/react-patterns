import { useContext, CSSProperties } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <p className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </p>
  );
};
