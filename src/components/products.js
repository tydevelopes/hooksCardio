import React, { useContext } from "react";
import { ProductsContext, CartListContext } from "../index";
import Pagination from "./pagination";

const Products = () => {
  const {
    products,
    productsDispatch,
    filterState,
    messageDispatch
  } = useContext(ProductsContext);
  const { cartListDispatch } = useContext(CartListContext);

  const addToCart = product => {
    // Only add if product is exist
    if (product.quantity >= 1) {
      productsDispatch({ type: "REMOVE_ONE_PRODUCT", id: product.id });
      cartListDispatch({
        type: "ADD_ONE_TO_CART",
        payload: { name: product.name, id: product.id, price: product.price }
      });
    } else {
      messageDispatch({ type: "ZERO_ITEM_IN_STOCK" });

      setTimeout(() => {
        messageDispatch({ type: "REMOVE_MESSAGE" });
      }, 2000);
    }
  };

  const renderProduct = product => {
    return (
      <li key={product.id}>
        <div>
          <span>{product.name}</span>
          <span>{product.os}</span>
          <span>{product.type}</span>
        </div>
        <div>
          <span>${product.price}</span>
          <span>{product.rating} star</span>
          <span>In-stock: {product.quantity}</span>
        </div>
        <button type="button" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </li>
    );
  };

  let renderProducts = products.map(product => renderProduct(product));

  switch (filterState) {
    case "ALL":
      renderProducts = products.map(product => renderProduct(product));
      break;
    case "LAPTOP":
      renderProducts = products
        .filter(product => product.type === "laptop")
        .map(product => renderProduct(product));
      break;
    case "DESKTOP":
      renderProducts = products
        .filter(product => product.type === "desktop")
        .map(product => renderProduct(product));
      break;
    case "TABLET":
      renderProducts = products
        .filter(product => product.type === "tablet")
        .map(product => renderProduct(product));
      break;
    case "PHONE":
      renderProducts = products
        .filter(product => product.type === "phone")
        .map(product => renderProduct(product));
      break;
    case "WINDOW":
      renderProducts = products
        .filter(product => product.os === "windows")
        .map(product => renderProduct(product));
      break;
    case "MAC":
      renderProducts = products
        .filter(product => product.os === "mac")
        .map(product => renderProduct(product));
      break;
    case "LINUX":
      renderProducts = products
        .filter(product => product.os === "linux")
        .map(product => renderProduct(product));
      break;
    default:
      break;
  }

  console.log("<Products/> rendered");
  return (
    <Pagination
      items={renderProducts}
      itemsPerPage={6}
      filterState={filterState}
    />
  );
};

export default Products;
