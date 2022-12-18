import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardPropsHOC } from '../interfaces/interfaces';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

// asignando nuevas propiedades
export const ProductCard: ProductCardPropsHOC = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
