import React from 'react';
import Hand from '../images/hand.jpg';
import Mango from '../images/mango.jpg';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Product from '../productCarousel/product';

const Home = () => {

return (
  <>
<Container className="home-container">
  <br/>
<Row className="app-wrapper">
  <Col md={6} sm={12}>
      <div className="app-image">
        <img id="profile" 
        className="d-block w-100"
        src={Mango}
        alt="" />
      </div>
      <br/>
      <Card border="secondary" style={{ width: '30rem' }}>
    <Card.Header>Customizable Beauty</Card.Header>
    <Card.Body>
      <Card.Title>At your finger tips</Card.Title>
      <Card.Text>
      100% CUSTOM HAIR, SKIN, AND BODY CARE
      </Card.Text>
      <Button variant="outline-secondary">First, Take the hair quiz!</Button>{' '}
    </Card.Body>
  </Card>
  </Col>
  <Col md={6} sm={12}>
  
  <div className="app-image">
        <img id="profile" 
        className="d-block w-100"
        src={Hand}
        alt="" />
      </div>
  </Col>
</Row>
</Container>

<div>
<Product/>
</div>
</>
)
}

export default Home;