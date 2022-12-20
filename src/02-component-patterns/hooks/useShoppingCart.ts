import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    // [key: string] indica que viene una "x" cantidad de llaves dentro del objecto
    // que contendrá otro objecto correspondiente a los productos
    [key: string]: ProductInCart;
  }>({});

  const productCountOnChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prevShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevShoppingCart;
        return rest;
      }

      return {
        ...prevShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    productCountOnChange,
  };
};
