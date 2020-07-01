import React, { useContext } from "react";
import { ProductsContext } from "../index";

const Top = () => {
  const { products } = useContext(ProductsContext);

  let all = 0,
    laptop = 0,
    desktop = 0,
    tablet = 0,
    phone = 0,
    window = 0,
    linux = 0,
    mac = 0;

  products.map(product => {
    all += product.quantity;
    if (product.type === "laptop") {
      laptop += product.quantity;
    }
    if (product.type === "desktop") {
      desktop += product.quantity;
    }
    if (product.type === "tablet") {
      tablet += product.quantity;
    }
    if (product.type === "phone") {
      phone += product.quantity;
    }
    if (product.os === "windows") {
      window += product.quantity;
    }
    if (product.os === "linux") {
      linux += product.quantity;
    }
    if (product.os === "mac") {
      mac += product.quantity;
    }
    return 1;
  });

  console.log("<Top/> rendered");
  return (
    <div className="top">
      <div className="all">
        <span>All</span>
        <span>{all}</span>
      </div>
      <div className="laptop">
        <span>Laptop</span>
        <span>{laptop}</span>
      </div>
      <div className="desktop">
        <span>Desktop</span>
        <span>{desktop}</span>
      </div>
      <div className="tablet">
        <span>Tablet</span>
        <span>{tablet}</span>
      </div>
      <div className="phone">
        <span>Phone</span>
        <span>{phone}</span>
      </div>
      <div className="windows">
        <span>Window</span>
        <span>{window}</span>
      </div>
      <div className="linux">
        <span>Linux</span>
        <span>{linux}</span>
      </div>
      <div className="mac">
        <span>Mac</span>
        <span>{mac}</span>
      </div>
    </div>
  );
};

export default Top;
