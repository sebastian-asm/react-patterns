import { ReactElement, CSSProperties } from 'react';

import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | Array<ReactElement>;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardPropsHOC {
  ({ children, product, className }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  // Title: ({ title }: { title?: string }) => JSX.Element;
  // Image: ({ img }: { img?: string }) => JSX.Element;
  // Buttons: ({ className }: { className?: string }) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
