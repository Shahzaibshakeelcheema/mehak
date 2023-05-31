import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  
  return (
    <div className="container">
    <div className="">
      <Card className="my-3 p-3 rounded " style={{ borderColor: "#d9534f" }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.image} variant="top" alt="image" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title as="div" className="text-decoration-none">
              <strong><h4 className=""> {product.title}</h4></strong>
            </Card.Title>
          </Link>

          <Card.Text as="h3" className="text-primary"><span as='h4' className="text-info">$</span>{product.price}</Card.Text>
          <Card.Text as="h6">Count InStock: <strong><span as='h5' className="text-danger">{product.stock}</span></strong></Card.Text>
          <Card.Text as="p">Rating: <strong><span as='h6' className="text-info" >{product.price}</span></strong></Card.Text>
          

        </Card.Body>
      </Card>
    </div>
  
    </div>);
};

export default Product;