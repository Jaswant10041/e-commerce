import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { ProductList } from "../utils/ProductLists/ProductList";
import "./style1.css";
export const Product = () => {
  const state = useContext(GlobalState);
  const products = state.ProductApi.products[0];
  const [isAdmin] = state.UserApi.isAdmin;
  // console.log(state)
  // console.log(products);
  return (
    <div className="product_list">
      {/* hello */}
      {products.map((product) => {
        return (
          <ProductList key={product._id} product={product} isAdmin={isAdmin} />
        );
      })}
    </div>
  );
};
