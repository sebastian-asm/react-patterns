import { ProductCard } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <ProductCard product={product} />
      </div>
    </div>
  );
};
