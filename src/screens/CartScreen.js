// CartScreen.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, checkout, resetCart } from '../actions/cartActions';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartList.cartItems);
  const dispatch = useDispatch();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCheckout = () => {
    if (name && address) {
      dispatch(checkout(name, address));
      handleCloseModal();
      navigate('/order');
      dispatch(resetCart()); // Dispatch the action to reset the cart state
    } else {
      alert('Please enter your name and address.');
    }
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    let quantity = 0;
    let bill = 0;

    cartItems.forEach((item) => {
      quantity += Number(item.qty);
      bill += item.qty * item.price;
    });

    setTotalQuantity(quantity);
    setTotalBill(bill);
  };

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
        {cartItems.length===0 ?(
          <div>Cart is Empty</div>):(
        <div>
          {cartItems?.map((item) => (
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
        </div>)}
      </div>
      <div className='d-flex justify-content-between mb-5 mt-2'>
      {cartItems.length === 0 ? (
        <div>To buy items Kindly visit Home Page</div>):(<div><div className="mt-3">
      <h2>Total Quantity: {totalQuantity}</h2>
      <h2>Total Bill: ${totalBill.toFixed(2)}</h2>
    </div>
    
    </div>)}
    <div>
    <Button className="mt-3 mb-5" onClick={handleShowModal}>
    Checkout
  </Button>
</div>

      </div>
      {/*Model Popup*/}
      <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Client Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default CartScreen;
