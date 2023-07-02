import React from 'react';
import ProductCard from './ProductCard';
import './App.css'

function ProductList({ products }) {
  // console.log(products[0].id);
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <ProductCard product={product} />
        </div>
      ))}
    </div>

  );
}

export default ProductList;
