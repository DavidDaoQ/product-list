import React from "react";
import Product from "./Product";
import productsData from "./productsData.json";

const ProductList = () => {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
