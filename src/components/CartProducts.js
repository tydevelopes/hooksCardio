import React, { useContext, useEffect } from "react";
import { ProductsContext, CartListContext } from "../index";

const CartProducts = () => {
  const { products, productsDispatch, messageDispatch } = useContext(
    ProductsContext
  );
  const { cartList, cartListDispatch, handleHideModal } = useContext(
    CartListContext
  );

  const handleClick = (e, product) => {
    switch (e.target.textContent) {
      // You can only decrease items in cart to 1
      case "-":
        if (product.count > 1) {
          productsDispatch({ type: "ADD_ONE_PRODUCT", id: product.id });
          cartListDispatch({
            type: "REMOVE_ONE_FROM_CART",
            payload: {
              name: product.name,
              id: product.id,
              price: product.price
            }
          });
        } else {
          messageDispatch({ type: "ONE_ITEM_IN_CART" });

          // remove message after a some seconds
          setTimeout(() => {
            messageDispatch({ type: "REMOVE_MESSAGE" });
          }, 2000);
        }
        break;
      case "+":
        // You can only add to cart or remove from product if you have atleast one item
        const checkProduct = products.find(item => item.id === product.id);
        if (checkProduct.quantity >= 1) {
          productsDispatch({ type: "REMOVE_ONE_PRODUCT", id: product.id });
          cartListDispatch({
            type: "ADD_ONE_TO_CART",
            payload: {
              name: product.name,
              id: product.id,
              price: product.price
            }
          });
        } else {
          messageDispatch({ type: "ZERO_ITEM_IN_STOCK" });

          // remove message after a some seconds
          setTimeout(() => {
            messageDispatch({ type: "REMOVE_MESSAGE" });
          }, 2000);
        }
        break;
      case "Reset":
        productsDispatch({
          type: "RESET_TO_ONE",
          id: product.id,
          count: product.count
        });
        cartListDispatch({ type: "RESET_TO_ONE", payload: { id: product.id } });
        break;
      case "Remove":
        productsDispatch({
          type: "REMOVE_ALL_FROM_CART",
          id: product.id,
          count: product.count
        });
        cartListDispatch({
          type: "REMOVE_ALL_FROM_CART",
          payload: { id: product.id }
        });
        break;
      default:
        return;
    }
  };

  const clearCart = () => {
    productsDispatch({ type: "CLEAR_CART", cartList });
    cartListDispatch({ type: "CLEAR_CART" });
    handleHideModal();
  };

  const renderProducts = cartList.map(product => (
    <li key={product.id} className="cart-item">
      <div>
        <span>{product.name}</span>
      </div>
      <div>
        <div>
          <button onClick={e => handleClick(e, product)}>-</button>
          <span>{product.count}</span>
          <button onClick={e => handleClick(e, product)}>+</button>
          <button onClick={e => handleClick(e, product)}>Reset</button>
        </div>
        <div>
          <span>{product.price * product.count}</span>
          <button onClick={e => handleClick(e, product)}>Remove</button>
        </div>
      </div>
    </li>
  ));

  // Only render clear cart button if theres a product in the cart
  const renderClearButton = cartList.length !== 0 && (
    <button type="button" onClick={clearCart}>
      Clear Cart
    </button>
  );
  useEffect(() => {
    if (cartList.length === 0) {
      handleHideModal();
    }
    console.log("count", cartList.length);
  }, [cartList]);

  console.log("<CartProducts/> rendered");
  return (
    <div>
      <ul className="paginated_lists">{renderProducts}</ul>
      {renderClearButton}
    </div>
  );
};

export default CartProducts;
