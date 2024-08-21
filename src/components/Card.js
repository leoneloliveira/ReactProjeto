import styled from 'styled-components';
import Image from './Image';

const Cartao= styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CartaoTitulo = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const CartaoDescricao = styled.p`
  font-size: 1em;
  color: #666;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <Cartao>
      <Image src={imageUrl} alt={title} />
      <CartaoTitulo>{title}</CartaoTitulo>
      <CartaoDescricao>{description}</CartaoDescricao>
    </Cartao>
  );
};

export default Card;
