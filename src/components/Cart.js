import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ item }) => {
  
  return (
    <div className="container">
    <div className="">
      <Card className="my-3 p-3 rounded " style={{ borderColor: "#d9534f" }}>
        <Link to={`/cart/${item.id}`}>
          <Card.Img src={item.image} variant="top" alt="image" />
        </Link>
        <Card.Body>
          <Link to={`/cart/${item.id}`}>
            <Card.Title as="div" className="text-decoration-none">
              <strong><h4 className=""> {item.title}</h4></strong>
            </Card.Title>
          </Link>

          <Card.Text as="h3" className="text-primary"><span as='h4' className="text-info">$</span>{item.price}</Card.Text>
          <Card.Text as="h6">Count InStock: <strong><span as='h5' className="text-danger">{item.stock}</span></strong></Card.Text>
          <Card.Text as="p">Rating: <strong><span as='h6' className="text-info" >{item.rating}</span></strong></Card.Text>
          

        </Card.Body>
      </Card>
    </div>
  
    </div>);
};

export default Cart;