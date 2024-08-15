
import styled from 'styled-components';
import Card from './Card';

const Productss = styled.div

`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Products = ({ products }) => {
  return (
    <Productss>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </Productss>
  );
};

export default Products;
