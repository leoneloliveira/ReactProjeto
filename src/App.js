
import './App.css';

import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const products = [
  {
    "id": 1,
    "title": "Produto 1",
    "description": "Descrição detalhada do produto 1.",
    "imageUrl": "https://img.freepik.com/fotos-gratis/baralho-de-cartas-em-fundo-verde_23-2148952340.jpg?w=1380&t=st=1723697604~exp=1723698204~hmac=1f4c3b1e0ee118909d5fa73cc0d9e9362d94dcf50781b2d3559b225be33203ef"
    
    },
  {
    "id": 2,
    "title": "Produto 2",
    "description": "Descrição detalhada do produto 2.",
    "imageUrl": "https://img.freepik.com/fotos-gratis/baralho-de-cartas-em-fundo-verde_23-2148952340.jpg?w=1380&t=st=1723697604~exp=1723698204~hmac=1f4c3b1e0ee118909d5fa73cc0d9e9362d94dcf50781b2d3559b225be33203ef"
    },
    {
    "id": 3,
    "title": "Produto 3",
    "description": "Descrição detalhada do produto 3.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 4,
    "title": "Produto 4",
    "description": "Descrição detalhada do produto 4.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    
    "id": 5,
    "title": "Produto 5",
    "description": "Descrição detalhada do produto 5.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 6,
    "title": "Produto 6",
    "description": "Descrição detalhada do produto 6.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 7,
    "title": "Produto 7",
    "description": "Descrição detalhada do produto 7.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 8,
    "title": "Produto 8",
    "description": "Descrição detalhada do produto 8.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 9,
    "title": "Produto 9",
    "description": "Descrição detalhada do produto 9.",
    "imageUrl": "https://via.placeholder.com/150"
    
    },
    {
    "id": 10,
    "title": "Produto 10",
    "description": "Descrição detalhada do produto 10.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 11,
    "title": "Produto 11",
    "description": "Descrição detalhada do produto 11.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 12,
    "title": "Produto 12",
    "description": "Descrição detalhada do produto 12.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 13,
    "title": "Produto 13",
    "description": "Descrição detalhada do produto 13.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 14,
    "title": "Produto 14",
    
    "description": "Descrição detalhada do produto 14.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 15,
    "title": "Produto 15",
    "description": "Descrição detalhada do produto 15.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 16,
    "title": "Produto 16",
    "description": "Descrição detalhada do produto 16.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 17,
    "title": "Produto 17",
    "description": "Descrição detalhada do produto 17.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 18,
    "title": "Produto 18",
    "description": "Descrição detalhada do produto 18.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    
    "id": 19,
    "title": "Produto 19",
    "description": "Descrição detalhada do produto 19.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    "id": 20,
    "title": "Produto 20",
    "description": "Descrição detalhada do produto 20.",
    "imageUrl": "https://via.placeholder.com/150"
    }
    
];

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Products products={products} />
    </div>
  );
}

 

export default App;
