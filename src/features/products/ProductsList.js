import ProductCard from './ProductCard';
import { Row, Col } from 'reactstrap';
import { selectAllProducts } from './productsSlice';

const ProductsList = ({ setProductId }) => {
  const products = selectAllProducts();

  return (
    <Row className='ms-auto'>
      {products.map((product) => {
        return (
          <Col 
            md='5' 
            className='m-4' 
            key={product.id}
            onClick={() => setProductId(product.id)}
          >
            <ProductCard product={product} />
          </Col>
        );
      })}
    </Row>
  )
};

export default ProductsList;