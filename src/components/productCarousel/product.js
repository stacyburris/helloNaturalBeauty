import React from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import Pool from '../images/pool.jpg';
import Banana from '../images/banana.jpg';
import OrangeSlices from '../images/orangeslices.jpg';
import Slices from '../images/slices.jpg';
import Water from '../images/waterpool.jpg';
import Lolli from '../images/lolli.jpg';
import Aqua from '../images/aqua.jpg';
import OpenFruit from '../images/openfruit.jpg';
import Macaroons from '../images/macaroons.jpg';
import './product.scss';


const Product = () => {

    return(

    
<Carousel >
  <Carousel.Item className="product-container">
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={OrangeSlices} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Banana} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Pool}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Carousel.Item>
<br/>

  <Carousel.Item className="product-container">
  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Slices} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Water} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Lolli}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Carousel.Item>
  <br/>

  <Carousel.Item className="product-container">
  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Aqua} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={OpenFruit} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Macaroons} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Carousel.Item>
</Carousel>
    )

}

export default Product;