import React from "react";
import { Card ,Row ,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  //#d9534f
  return (
    <div className="container">
    <div className="">
      <Card className="my-3 p-3 rounded " style={{ borderColor: "black" ,borderWidth:"1px"}} onMouseEnter={(e) => {
        e.target.style.borderColor = "red";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = "black";
      }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.image} variant="top" alt="image" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.id}` } >
            <Card.Title as="div" className="text-decoration-none">
              <strong><h4 className=""> {product.title}</h4></strong>
            </Card.Title>
          </Link>

          <Card.Text as="h3" className="text-primary"><Row><Col><h6>Price: </h6></Col><Col><h3><span as='h4' className="text-info">$</span>{product.price}</h3></Col></Row></Card.Text>
          <Card.Text as="h6">Count InStock: <strong><span as='h5' className="text-danger">{product.stock}</span></strong></Card.Text>
          <Card.Text as="p"> <span><Rating value={product.rating} text='Reviews'/></span></Card.Text>
          

        </Card.Body>
      </Card>
    </div>
  
    </div>);
};

export default Product;