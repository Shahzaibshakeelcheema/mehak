import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product'
import { listProducts } from "../actions/productActions";
//import {products} from '../data/products'

const ProductList = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
     
 const {  products } = productList;

 /// calling action 
 useEffect(()=>{
    dispatch(listProducts())
 }, []);
    

  return (
    <div>
      <h1>Latest Products</h1>
    
        <div className=" m-5" width="80%">
        <Row>
          {products?.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductList;