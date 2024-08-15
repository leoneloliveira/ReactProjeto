
import styled from 'styled-components';

const Imagem = styled.img`
  width: 18rem;
  height: 10rem;
  object-fit: cover;
  margin-bottom: 0px;
`;

const Image = ({ src, alt }) => {
  return <Imagem src={src} alt={alt} />;
};

export default Image;
