import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
/////////////props
const Cart = () => {
    return(
        <Card>
        <Card.Header>Shopping Cart</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <div id="cart">
            {/* <p>Cart ({props.cart.cart.length})</p> */}
          </div>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Take Hair Quiz</Button>
           
        </Card.Body>
        </Card>

    )
}



const mapStateToProps = state => ({
    cart: state.cart,
  });
  
  export default connect(mapStateToProps)(Cart);
