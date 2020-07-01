import { useContext } from "react";
import { CartListContext } from "../../index";

const useCartItemsCount = () => {
  const { cartList } = useContext(CartListContext);

  return [cartList.reduce((prev, curr) => prev + curr.count, 0)];
};

export default useCartItemsCount;
