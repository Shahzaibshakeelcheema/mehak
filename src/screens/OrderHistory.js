import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  const orders = useSelector((state) => state.cartList.orders);
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/orders/all');
  };

  // Sort orders by descending order of id
  orders.sort((a, b) => b.id - a.id);

  // Get the most recent order
  const recentOrder = orders[0];

  if (!recentOrder) {
    return (
      <div className="container">
        <Link className="btn btn-light my-3" to="/product/">
          Go Back
        </Link>
        <div>No recent orders available</div>
        <Row>
          <Button onClick={handleClickButton}>Orders</Button>
        </Row>
      </div>
    );
  }

  const { id, name, address, cartItems } = recentOrder;

  // Calculate total quantity and total price for the recent order
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalQuantity += Number(item.qty);
    totalPrice += item.qty * item.price;
  });

  return (
    <div className="container mb-5">
      <Link className="btn btn-light my-3" to="/product/">
        Go Back
      </Link>
      <h4>Order History</h4>

      <Row className="border mt-5 table table-hover ">
        <Row>
          <h1>Order Receipt</h1>
        </Row>
        <Row className="">
          <Col>Order ID:</Col>
          <Col>
            <h3>{id}</h3>
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
      <Row>
        <Button onClick={handleClickButton}>Orders</Button>
      </Row>
    </div>
  );
};

export default OrderHistory;
