import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const OrderConfirmationScreen = () => {
  const order = useSelector((state) => state.cartList.order);

  if (!order) {
    return <div>No order details available</div>;
  }

  const [name, address, items] = order;

  // Calculate total quantity and total price
  let totalQuantity = 0;
  let totalPrice = 0;

  items.forEach((item) => {
    totalQuantity+= Number(item.qty);
    totalPrice += item.qty * item.price;
  });

  return (
    <div className="container">
      <Row className="border mt-5 table table-hover">
        <Row>
          <h1>Order Confirmation</h1>
        </Row>
        <Row className="">
          <Col>Order ID:</Col>
          <Col>
            <h3>1</h3>
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

          {items.map((item) => (
            <div key={item.id}>
              <Row className="border mt-2">
                <Col>{item.title}</Col>
                <Col>{item.qty}</Col>
                <Col>${item.qty*item.price}</Col>
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
            <h6>Units: 
              <b>{totalQuantity}</b>
            </h6>
          </Col>
          <Col>
            <h6>
              <b>${totalPrice.toFixed(2)}</b>
            </h6>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default OrderConfirmationScreen;
