// OrderConfirmationScreen.js
import React from 'react';
import { useSelector } from 'react-redux';
import{Row,Col}from 'react-bootstrap'
const OrderConfirmationScreen = () => {
  const order = useSelector((state) => state.cartList.order);
//console.log(typeof order ,'sdfghjklkjhgfxcvjkl')
  const [name,address,items]=order;
debugger
  if (!order) {
    return <div>No order details available</div>;
  }
console.log(order.name,'.name')
console.log(order[0])

  return (
    <div className="container">
    <Row className='border mt-5'>
    <Row className=''>      <h1>Order Confirmation</h1></Row>
    <Row className=''><Col>Order ID: </Col><Col>      <h3> 1</h3></Col></Row>
    <Row className=''><Col>Name: </Col><Col>      <h4>{order[0]}</h4></Col></Row>
    <Row className=''><Col>Address: </Col><Col>      <h4>{order[1]}</h4></Col></Row>
    
    
      <h4>Items:</h4>
      <div>
        {order[2]?.map((item) => (
          <div key={item.id}>
           <Row className='border mt-2'> <Col>{item.title} </Col><Col> Quantity: {item.qty}</Col></Row>
          </div>
        ))}
      </div>
      </Row>
    </div>
  );
};

export default OrderConfirmationScreen;
