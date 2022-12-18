import { useProduct } from '../hooks/useProduct';
import noImage from '../../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductImage = ({ img = '' }) => (
  <img
    className={styles.productImg}
    src={img ? img : noImage}
    alt="Coffee Mug"
  />
);

export const ProductTitle = ({ title }: { title: string }) => (
  <p className={styles.productDescription}>{title}</p>
);

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductButtons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => (
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

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  );
};
