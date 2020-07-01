import React from "react";
import Products from "./products";
import CartCount from "./cartCount";
import Icon from "./icon/Icon";
import { useContext } from "react";
import { CartListContext } from "../index";

export default () => {
  const { handleShowModal } = useContext(CartListContext);
  console.log("<Middle/> rendered");
  return (
    <div className="middle">
      <Icon
        name="shopping_basket"
        content="Open shopping cart"
        action={handleShowModal}
      />
      <CartCount />
      <Products />
    </div>
  );
};
