import { CSSProperties } from 'react';

import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface ProductCardProps {
  product: Product;
  className?: string;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues;
  // children?: ReactElement | Array<ReactElement>;
  // ahora children es una funcion que devuelve un jsx
  children: (args: ProductCardHandlers) => JSX.Element;
  onChange?: (args: onChangeArgs) => void;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export interface ProductCardPropsHOC {
  ({ children, product, className }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

// definir todo lo que el componente va a exponer
export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
