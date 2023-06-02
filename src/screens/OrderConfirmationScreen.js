import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const OrderConfirmationScreen = () => {
  const orders = useSelector((state) => state.cartList.orders);
  const navigate = useNavigate();
debugger
  const handleClickButton = () => {
    navigate('/orders/all');
  };

  return (
    <div className="container">
      <Link className="btn btn-light my-3" to="/product/">
        Go Back
      </Link>

      {orders.length === 0 ? (
        <div>No orders available</div>
      ) : (
        orders.map((order) => {
          const { id, name, address, cartItems } = order;
debugger
          // Check if items array is defined and not empty
          if (!cartItems || cartItems.length === 0) {
            return null; // Skip rendering this order
          }
debugger
          // Calculate total quantity and total price for each order
          let totalQuantity = 0;
          let totalPrice = 0;
debugger
          cartItems.forEach((item) => {
            totalQuantity += Number(item.qty);
            totalPrice += item.qty * item.price;
          });
debugger
          return (
            <Row className="border mt-5 table table-hover" key={id}>
              <Row>
                <h1>Order Confirmation</h1>
              </Row>
              <Row className="">
                <Col>Order ID:</Col>
                <Col>
                  <h3>{Date.now()+totalPrice-totalQuantity}</h3>
                </Col>
              </Row>
              <Row className="">
                <Col>Name:</Col>
                <Col>
                  <h4>{name}</h4>
                </Col>
              </Row>
              <Row className="">
                <Col>Address:</Col>
                <Col>
                  <h4>{address}</h4>
                </Col>
              </Row>

              <h4>Items:</h4>
              <div>
                <Row>
                  <Col>
                    <h6>
                      <b>Product</b>
                    </h6>
                  </Col>
                  <Col>
                    <h6>
                      <b>Quantity</b>
                    </h6>
                  </Col>
                  <Col>
                    <h6>
                      <b>Price</b>
                    </h6>
                  </Col>
                </Row>

                {cartItems.map((item) => (
                  <div key={item.id}>
                    <Row className="border mt-2">
                      <Col>{item.title}</Col>
                      <Col>{item.qty}</Col>
                      <Col>${item.qty * item.price}</Col>
                    </Row>
                  </div>
                ))}
              </div>
              <Row>
                <Col>
                  <h6>
                    <b>Total</b>
                  </h6>
                </Col>
                <Col>
                  <h6>
                    Units: <b>{totalQuantity}</b>
                  </h6>
                </Col>
                <Col>
                  <h6>
                    <b>${totalPrice.toFixed(2)}</b>
                  </h6>
                </Col>
              </Row>
            </Row>
          );
        })
      )}

      <Row>
        <Button onClick={handleClickButton}>Orders</Button>
      </Row>
    </div>
  );
};

export default OrderConfirmationScreen;
