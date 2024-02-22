import { PRODUCTS } from '../../app/shared/PRODUCTS';
import ProductCard from './ProductCard';
import { Row, Col } from 'reactstrap';

const ProductsList = () => {
  return (
    <Row className='ms-auto'>
      {PRODUCTS.map((product) => {
        return (
          <Col md='5' className='m-4' key={product.id}>
            <ProductCard product={product} />
          </Col>
        );
      })}
    </Row>
  )
};

export default ProductsList;