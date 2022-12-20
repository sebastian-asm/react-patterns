import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom.css';

export const ShoppingPage = () => {
  const { shoppingCart, productCountOnChange } = useShoppingCart();

  return (
    <>
      <div>
        <h1>Shopping Page</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              onChange={productCountOnChange}
              product={product}
              value={shoppingCart[product.id]?.count || 0}
              className="bg-dark"
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
        </div>
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            onChange={productCountOnChange}
            product={product}
            value={product.count}
            style={{ width: '100px' }}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </>
  );
};
