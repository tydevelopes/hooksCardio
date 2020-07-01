import React from "react";
import useCartItemsCount from "./customHooks/useCartItemsCount";

const CartCount = () => {
  const [count] = useCartItemsCount();

  console.log("<CartCount/> rendered");

  return <div className="cart-count">Items in Cart: {count}</div>;
};
export default CartCount;
