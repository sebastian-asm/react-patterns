import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

import '../styles/custom.css';

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
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        {/* alternativa 2 */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Título de prueba" />
          <ProductCard.Buttons />
        </ProductCard>

        {/* aceptando estilos inline en los componentes */}
        <ProductCard product={product} style={{ backgroundColor: '#00d8ff' }}>
          <ProductCard.Image style={{ padding: '10px' }} />
          <ProductCard.Title style={{ textAlign: 'center' }} />
          <ProductCard.Buttons
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
