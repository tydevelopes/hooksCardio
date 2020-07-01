import React, { useContext } from "react";
import { CartListContext } from "../index";

const CartTotal = () => {
  const { cartList } = useContext(CartListContext);

  console.log("<CartTotal/> rendered");
  return (
    <div className="cart-total">
      Items total cost:{" "}
      {cartList.reduce((prev, curr) => prev + curr.count * curr.price, 0)}
    </div>
  );
};

export default CartTotal;
