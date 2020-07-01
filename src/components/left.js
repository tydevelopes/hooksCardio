import React, { useContext } from "react";
import { ProductsContext } from "../index";

const Left = () => {
  const { filterDispatch } = useContext(ProductsContext);

  console.log("<Left/> rendered");
  return (
    <div className="left">
      <span>Show</span>
      <div>
        <hr />
      </div>
      <span onClick={() => filterDispatch({ type: "ALL" })}>All</span>
      <span onClick={() => filterDispatch({ type: "LAPTOP" })}>Laptop</span>
      <span onClick={() => filterDispatch({ type: "DESKTOP" })}>Desktop</span>
      <span onClick={() => filterDispatch({ type: "TABLET" })}>Tablet</span>
      <span onClick={() => filterDispatch({ type: "PHONE" })}>Phone</span>
      <span onClick={() => filterDispatch({ type: "WINDOW" })}>Window</span>
      <span onClick={() => filterDispatch({ type: "LINUX" })}>Linux</span>
      <span onClick={() => filterDispatch({ type: "MAC" })}>Mac</span>
    </div>
  );
};
export default Left;
