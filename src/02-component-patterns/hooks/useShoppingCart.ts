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
      const productInCart: ProductInCart = prevShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        };
      }

      // eliminando el producto cuando su count es 0
      const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...prevShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingCart,
    productCountOnChange,
  };
};
