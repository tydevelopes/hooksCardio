import React from "react";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";
import CartCount from "./cartCount";

export default () => {
  console.log("<Right/> rendered");
  return (
    <div className="right">
      <CartCount />
      <CartProducts />
      <CartTotal />
    </div>
  );
};
