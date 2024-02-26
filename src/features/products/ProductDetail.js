import { Card, CardImg, CardText, CardBody, Col} from 'reactstrap';

const ProductDetail = ( {product} ) => {
  const { image, name, price, stockCount } = product;

  return (
    <Col md='12' className='m-4'>
      <Card>
        <CardImg 
          top 
          src={image}
          alt={name}
        />
        <CardBody>
          <CardText>{price}</CardText>
          <CardText>{stockCount}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductDetail;