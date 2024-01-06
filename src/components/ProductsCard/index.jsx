import "./ProductsCard.css";

import React from "react";
import data from "../../data/products.json";

const ProductsCard = () => {
  const products = data;
  return (
    <div className="container">
      <div className="product">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="card-title py-3">{product.title}</h2>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>{product.price}</span>
                  <button className="btn btn-warning px-4">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
