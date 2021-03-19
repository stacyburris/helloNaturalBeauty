import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './quiz.scss';
import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import Straight from '../images/straight.png';
import Wavy from '../images/wavy.png';
import Curly from '../images/curly.png';
import Coily from '../images/coily.png';
// import Fine from '../images/fine.png';
// import Medium from '../images/medium.png';
// import Course from '../images/course.png';
// import dry from '../images/dry.png';
// import Normal from '../images/normal.png';
// import Oily from '../images/oily.png';

const Quiz = () => {
    
    return (
        <div className="quiz-container">
 
 <div className="ui-type-subheader">
        "HAIR QUIZ"
        <sup class="step">1/4</sup>
    </div>
    <ul className="breadcrumb-progress-container">
        <li tabIndex="0" class="complete enable">
            {/* <a href="/product">Product Page</a> */}
        </li>
        <li tabIndex="0" class="enable">
            <a></a>
        </li>
        <li tabIndex="0" class="disable">
            <a></a>
        </li>
        <li tabIndex="0" class="disable">
            <a></a>
        </li>
    </ul>
    <Card>
 
 <Card.Header className="ui-type-header" as="h2">build your hair profile</Card.Header>
 <Card.Body>
   <Card.Text>
   <a>already a customer? retrieve your formula here</a>
   </Card.Text>
 </Card.Body>
</Card>
    <Container>
        <h3>hair type</h3>
  <Row xs={1} md={4}>
    <Col className="image">
      <Image class="image-size" src={Straight}roundedCircle />
    </Col>
    <Col>
      <Image class="image-size" src={Wavy} roundedCircle />
    </Col>
    <Col>
      <Image class="image-size" src={Curly} roundedCircle/>
    </Col>
    <Col>
      <Image class="image-size" src={Coily} roundedCircle/>
    </Col>
  </Row>
</Container>
    </div>

//     </div>
// </div>

    );
}

export default Quiz;

//div hair quiz 1 / 4 
//bread crumbs progress and each one is an a tag with clickable to page that you have already filled out 
// h2 build your hair profile
// a tag already a customer? retrieve your formula here
//h3 hair type
// divs with 4 pictures straight, waxy, curly, spiral 
// h3 hair structure 
// div with 3 pics fine, medium course 
// h3 scalp moisture
// div with 3 icon photos dry, normal, oily
// button continue 
// loading icon that pops up for next page load

// div  hair quiz 2 / 4
// bread crumbs
// h2 select up to 5 hair goals
// divs with a tags that are _unselected and then change to selected once pressed 
// a tag for previous 
// button for next
