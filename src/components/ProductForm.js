import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
  const [products, setProducts] = useState([]);

  // Define the initial form values
  const initialValues = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    image: '',
  };

  // Define the form validation schema using Yup
  const validationSchema = Yup.object({
    id: Yup.number().required('Product ID is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').min(0, 'Price must be positive'),
    rating: Yup.number().min(0).max(5).required('Rating is required'),
    stock: Yup.number().required('Stock is required').min(0, 'Stock can not be in Negative'),
    brand: Yup.string().required('Brand is required'),
    category: Yup.string().required('Category is required'),
    image: Yup.string().required('Image URL is required'),
  });
  const options = [
    { value: 'Bakhoor', label: 'Bakhoor' },
    { value: 'Oud', label: 'Oud' },
    { value: 'Perfume', label: 'Perfume' },
  ];

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Create a new product object
    const newProduct = { ...values };
    // Push the new product to the existing array
    const updatedProducts = [...products, newProduct];
    // Update the products state
    setProducts(updatedProducts);
    // Reset the form fields
    resetForm();
  };

  // Generate the JSON file and trigger the download
  const downloadJSON = () => {
    const productJSON = JSON.stringify(products, null, 2);
    const blob = new Blob([productJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'products.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className=''>
    <div className="container d-flex justify-content-center ">
    <div className="mb-4 w-50 border p-4 mt-5">
      <h1>Add a Product</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>

          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="id" className="form-label w-25 "><b>Product ID</b></label>
            <Field type="number" id="id" name="id" className="form-control w-75" />
            <ErrorMessage name="id" component="div" className="text-danger" />
          </div>

          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="title" className="form-label w-25 "><b>Title</b></label>
            <Field type="text" id="title" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="description" className="form-label w-25"><b>Description</b></label>
            <Field as="textarea" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="price" className="form-label w-25"><b>Price</b></label>
            <Field type="number" id="price" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="rating" className="form-label w-25"><b>Rating</b></label>
            <Field type="number" id="rating" name="rating" className="form-control" />
            <ErrorMessage name="rating" component="div" className="text-danger" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="stock" className="form-label w-25"><b>Stock</b></label>
            <Field type="number" id="stock" name="stock" className="form-control" />
            <ErrorMessage name="stock" component="div" className="text-danger" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="brand" className="form-label w-25"><b>Brand</b></label>
            <Field type="text" id="brand" name="brand" className="form-control" />
            <ErrorMessage name="brand" component="div" className="text-danger" />
          </div>

          <div className="mb-3 d-flex justify-content-between">

          <label htmlFor="category" className='form-label w-25'> Religion:</label>
      
                    <Field as="select" id="category" name="category" className="form-control">
         <option value="" >Choose</option>
         {options.map((option) => (
           <option key={option.value} value={option.value}>
             {option.label}
           </option>
         ))}
       </Field>
       <ErrorMessage name="category" component="div" className="text-danger"/>
     </div>
          <div className="mb-3 d-flex justify-content-between">
            <label htmlFor="image" className="form-label w-25" ><b>Image URL</b></label>
            <Field type="file" id="image" name="image" className="form-control" />
            <ErrorMessage name="image" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </Form>
      </Formik>
      <div>
      <button
        onClick={downloadJSON}
        disabled={products.length === 0}
        className="btn btn-info mb-5 mt-3"
      >
        Download JSON
      </button>
    </div>
    </div>
    
  </div></div>
  );
};

export default ProductForm;
