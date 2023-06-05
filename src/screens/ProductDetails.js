import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import '../App.css'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
function ProductDetails() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
 const [qty,setQty] = useState(1);
 const [isHovered, setIsHovered] = useState(false);

  const productList = useSelector((state) => state.productList.products);
  const product = productList.find((product) => String(product.id) === id);
debugger

  const addToCartHandler = () => {
    dispatch(addToCart(product, qty));
debugger
    navigate(`/cart/${id}/${qty}`);
  };
  debugger
  if (!product) {
    return <div>Product not found</div>;
  }
//mt-5 mb-5 container d-flex justify-content-between p-3
// <Image src={product.image} alt={product.title} fluid className={isHovered ? 'zoom-effect' : ''}
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//   />

  return (
    <div className='container mb-5'>
    <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
    <div className='m-0'>
    <Row>
    <Col md={6}>
    <div  className={`image-container ${isHovered ? 'zoom-effect' : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    <Image src={product.image} alt={product.title} fluid className='product-image' />
    </div>
    </Col>
    <Col md={3}>
    <ListGroup variant='flush'>
    <ListGroup.Item><h2><b>{product.title}</b></h2></ListGroup.Item>
    <ListGroup.Item>
    <Row>
      <Col>Price: </Col>
      <Col className='text-info'>
        $<strong className='text-primary'>{product.price}</strong>
      </Col>
    </Row>
  </ListGroup.Item>
  <ListGroup.Item>
    <Row>
      <Col>Brand: </Col>
      <Col>
        <strong className='text-danger'>{product.brand}</strong>
      </Col>
    </Row>
  </ListGroup.Item>
  <ListGroup.Item>
                  <Row>
                    <Col>InStock: </Col>
                    <Col>
                      <strong>{product.stock}</strong>
                    </Col>
                    <Col>Rating: </Col>
                    <Col className='text-warning'>
                      <strong>{product.rating}</strong>
                    </Col>
                  </Row>
                  <Row>
                    
                  </Row>
  </ListGroup.Item>
   {/* <ListGroup.Item>: <b>{product.rating}</b>&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp; Rating: <b>{product.rating}</b></ListGroup.Item>
        <ListGroup.Item>Brand: <b>{product.brand}</b></ListGroup.Item>

  */}
  
    <ListGroup.Item><b> Description: </b>{product.description}</ListGroup.Item>
    
    </ListGroup>
    </Col>
    <Col md={3}>
    <Card><ListGroup>
    <ListGroup.Item><h3><b>Cart</b></h3></ListGroup.Item>
    <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

  <ListGroup.Item>
                <Row>
                  <Col> Status </Col>
                  <Col>
                    {product.stock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
  
  <ListGroup.Item>
              {product.stock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col style={{ margin: "10px 0 0 10px" }}> Qty </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.stock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <Button
                className="mt-3 btn-block cartBtn btn-danger rounded"
                type="button"
                disabled={product.stock === 0}
                onClick={addToCartHandler}
                
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
              
    </ListGroup></Card>
    
    </Col>
    
    </Row>
</div>
  {/*<div className=''>
  <img src={product.image} alt={product.title} />

  </div>
  <div className='border p-5'>
  <div>
  <h2>{product.title}</h2>
  <div as='h3'>{product.description}</div>
  
  {/* Render other details of the product *
  </div>
  </div>
  <div className=''>
  <h1>CArt</h1>
  </div>*/}
    </div>
  );
}

export default ProductDetails;
