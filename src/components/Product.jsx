import React from "react";
import PropTypes from "prop-types";

export default function Product({ product, onAddProductToBuy }) {
  const onAdd = () => {
    console.log("Add to cart:", product);
    onAddProductToBuy(product);
  };

  return (
    <div className="col-4 mt-3">
      <div className="card ">
        <img src={product.image} alt={product.name} />
        {product.name} ${product.price}
        <button className="btn btn-outline-primary btn-sm" onClick={onAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
};
