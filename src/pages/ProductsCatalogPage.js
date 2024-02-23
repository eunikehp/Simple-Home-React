import { Container, Row, Col } from 'reactstrap';
import ProductDetail from '../features/products/ProductDetail';
import ProductsList from '../features/products/ProductsList';
import { selectRandomProduct } from '../features/products/productsSlice';

const ProductsCatalogPage = () => {
  const selectedProduct = selectRandomProduct();

  return (
    <Container>
      <Row>
        <Col sm='5' and md='7'>
          <ProductsList />
        </Col>
        <Col sm='7' and md='5'>
          <ProductDetail product={selectedProduct}/>
        </Col>
      </Row>
    </Container>
  )
};

export default ProductsCatalogPage;