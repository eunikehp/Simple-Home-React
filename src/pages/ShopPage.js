import { Container, Row, Col } from 'reactstrap';
import ProductDetail from '../features/products/ProductDetail';
import ProductsList from '../features/products/ProductsList';
import { selectProductById } from '../features/products/productsSlice';
import { useState } from 'react';
import SubHeader from '../components/SubHeader';

const ShopPage = () => {
  const [productId, setProductId ] = useState(0);
  const selectedProduct = selectProductById(productId);

  return (
    <Container>
      <SubHeader current='Shop'/>
      <Row>
        <Col sm='5' and md='7'>
          <ProductsList setProductId={setProductId} />
        </Col>
        <Col sm='7' and md='5'>
          <ProductDetail product={selectedProduct}/>
        </Col>
      </Row>
    </Container>
  )
};

export default ShopPage;