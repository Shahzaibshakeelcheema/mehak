// CartScreen.js
import React, { useState ,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, checkout } from '../actions/cartActions';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartList.cartItems);
  const dispatch = useDispatch();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    const name = window.prompt('Enter your name');
    const address = window.prompt('Enter your address');

    if (name && address) {
      dispatch(checkout(name, address));
      debugger
      navigate('/order');
    } else {
      alert('Please enter your name and address.');
    }
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Calculate total quantity and total bill
  const calculateTotal = () => {
    let quantity = 0;
    let bill = 0;

    cartItems.forEach((item) => {
      quantity = totalQuantity + item.qty;
      bill += item.qty * item.price;
    });

    setTotalQuantity(quantity);
    setTotalBill(bill);
  };

  // Call calculateTotal whenever cartItems changes
  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  if (!cartItems) {
    return <div>Product not found</div>;
  }
  
  return (
    <div className="container">
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <div className="m-0">
        <h1>Your Cart</h1>
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <Row className="mt-1 p-1">
                <Col md={2}>
                  <Image src={item.image} alt={item.title} fluid rounded width="100px" />
                </Col>
                <Col md={2}>
                  <Row>
                    <Col>{item.title}</Col>
                    <Col>{item.qty}</Col>
                  </Row>
                </Col>
                <Col md={2}>
                  <Row>
                    <Col>Item Price : ${item.price}</Col>
                  </Row>
                </Col>
                <Col md={2}>Total Price: ${item.price * item.qty}</Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => removeFromCartHandler(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
      <div className='d-flex justify-content-between mb-5 mt-2'>
        <div className="mt-3">
          <h2>Total Quantity: {totalQuantity}</h2>
          <h2>Total Bill: ${totalBill.toFixed(2)}</h2>
        </div>
        <div>
          <Button className="mt-3 mb-5" onClick={checkoutHandler}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
