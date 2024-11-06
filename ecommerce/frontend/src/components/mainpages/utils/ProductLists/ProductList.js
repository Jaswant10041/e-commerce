import React, { useContext, useState } from 'react';
import { BtnRender } from './BtnRender';

export const ProductList = ({ product, isAdmin }) => {
  const [flag, setFlag] = useState(false);

  const deleteFunction = (e) => {
    if (e.target.checked) {
      setFlag(true);
    }
  };

  return (
    <div className="product_list h-45">
      {isAdmin && (
        <input
          type="checkbox"
          onChange={deleteFunction}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      )}

      <div className="product_card border border-gray-200 rounded-lg shadow-lg p-4 bg-white" key={product._id}>
        {/* Product Image */}
        <img
          src={product.images.url}
          alt={product.product_title}
          className="w-full h-auto object-cover rounded-t-lg"
        />

        {/* Product Info */}
        <div className="product_box mt-4">
          <h2 className="text-xl font-semibold text-gray-800" title={product.product_title}>
            {product.product_title}
          </h2>
          <span className="text-lg text-gray-600 font-medium mt-2 block">
            {product.price ? `₹${product.price}` : 'Price unavailable'}
          </span>
          <p className="text-gray-500 mt-2">{product.description}</p>
        </div>

        {/* Render the Button */}
        <BtnRender product={product} />
      </div>
    </div>
  );
};
