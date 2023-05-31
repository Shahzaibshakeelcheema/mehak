import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  const productList = useSelector((state) => state.productList.products);
  const product = productList.find((product) => String(product.id) === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='mt-5 mb-5 container d-flex justify-content-between p-3'>
    <div className=''>
    <img src={product.image} alt={product.title} />

    </div>
    <div className='border p-5'>
    <div>
    <h2>{product.title}</h2>
    <div as='h3'>{product.description}</div>
    
    {/* Render other details of the product */}
  </div>
    </div>
    <div className=''>
    <h1>CArt</h1>
    </div>
    </div>
  );
}

export default ProductDetails;
