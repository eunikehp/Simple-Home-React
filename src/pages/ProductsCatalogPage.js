import { Container, Row, Col, Button } from 'reactstrap';
import ProductDetail from '../features/products/ProductDetail';
import ProductsList from '../features/products/ProductsList';
import { selectRandomProduct } from '../features/products/productsSlice';
import { useState } from 'react';

const ProductsCatalogPage = () => {
  const [selectedProduct, toggleProduct ] = useState(selectRandomProduct());

  return (
    <Container>
      <Button onClick={()=> toggleProduct(selectRandomProduct())}>
        Select Random Product
      </Button>
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