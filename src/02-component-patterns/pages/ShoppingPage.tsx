import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';

import '../styles/custom.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <div>
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark"
          initialValues={{
            count: 5,
            maxCount: 10,
          }}
        >
          {({ reset, isMaxCountReached, maxCount, count, increaseBy }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '20px 0',
                }}
              >
                <button onClick={reset}>Reset</button>
                <button onClick={() => increaseBy(-2)}>-2</button>
                {!isMaxCountReached && (
                  <button onClick={() => increaseBy(+2)}>+2</button>
                )}
                <span style={{ color: 'orange' }}>
                  {count} - {maxCount}
                </span>
              </div>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
