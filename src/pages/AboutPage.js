import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import WoodenTable from '../app/assets/img/wooden-sideboard-table.jpg';

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current='About'/>
      <Row>
          <h1 className='text-center'>Our Story and Values</h1>
          <hr />
          <div className='text-center'>
            <img src={WoodenTable} alt='wooden-sideboard-table' className='about-image' />
            <div>
              <h2 >Mission Statement</h2>
              <p>
                Our fundamental principle revolves around the establishment of quality living and aesthetically pleasing environments. 
                Drawing inspiration from the principles of everyday simplicity and functionality, we endeavor to produce reasonably priced items characterized by meticulous craftsmanship and sourced from natural materials. 
                Each individual product is founded on a profound appreciation for the raw materials used, the space it occupies, the end user, the artisan responsible for its creation, and the designers who conceptualized it.
                Moreover, we take great pride in our commitment to exploring unconventional natural materials, transforming them into exquisite furniture and unique pieces that contribute to the overall beauty and functionality of living spaces.</p>
            </div>
          </div>
          
          <div>
            <div className='text-center'>
              <h2 >Sustainability</h2>
              <p>
                We actively seek out sustainable natural materials and identify undesired or unused production waste, which is often overlooked in the context of mass furniture production. Within our product lineup, we integrate a diverse range of materials, including but not limited to branches, roots, reclaimed woods, and seagrass. 
                These elements not only contribute to the environmental sustainability of our manufacturing processes but also add distinctive and unique characteristics to our final products.</p>
            </div>
            <img src=""/>
          </div>
      </Row>
    </Container>
  );
};

export default AboutPage;