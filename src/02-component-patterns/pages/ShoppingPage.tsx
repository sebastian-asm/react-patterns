import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

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
        {/* alternativa 1 */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        {/* alternativa 2 */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Título de prueba" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
