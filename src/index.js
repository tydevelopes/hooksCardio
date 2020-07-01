import React, { useReducer, createContext, useState } from "react";
import ReactDOM from "react-dom";
import Left from "./components/left";
import Right from "./components/right";
import Top from "./components/top";
import Middle from "./components/middle";
import "./dataSource/productsObject";
import Notification from "./components/Notification";
import { initialProducts } from "./dataSource/data.js";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import "./styles.css";
import { filterReducer } from "./reducers/filterReducer";
import { messageReducer } from "./reducers/messageReducer";

import Modal from "./components/modal/Modal";

// Create a context to help pass data to inner components
export const ProductsContext = createContext();
export const CartListContext = createContext();

function App() {
  /**
   * useReducer is used to manage the state of your app.
   * useReducer accepts a reducer as first arguments and an initial state as second argument.
   * useReducer returns a current state and a dispatch function.
   */
  const [products, productsDispatch] = useReducer(
    productReducer,
    initialProducts
  );
  const [cartList, cartListDispatch] = useReducer(cartReducer, []);
  const [filterState, filterDispatch] = useReducer(filterReducer, "ALL");
  const [messageState, messageDispatch] = useReducer(messageReducer, {
    show: false,
    message: ""
  });

  const [showModal, setShowModal] = useState(false);

  const handleHideModal = e => {
    // e.stopPropagation();
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  console.log("<App/> rendered");
  return (
    <ProductsContext.Provider
      value={{
        products,
        productsDispatch,
        filterState,
        filterDispatch,
        messageDispatch
      }}
    >
      <div className="App">
        <Top />
        {messageState.show && <Notification message={messageState.message} />}
        <div className="main">
          <Left />
          <CartListContext.Provider
            value={{
              cartList,
              cartListDispatch,
              handleShowModal,
              handleHideModal
            }}
          >
            <Middle />
            {showModal && (
              <Modal handleHideModal={handleHideModal}>
                <Right />
              </Modal>
            )}
          </CartListContext.Provider>
        </div>
      </div>
    </ProductsContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
