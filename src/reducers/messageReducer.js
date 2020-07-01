export const messageReducer = (state, action) => {
  switch (action.type) {
    case "ONE_ITEM_IN_CART":
      return { show: true, message: "Cannot reduce, only one in cart" };
    case "ZERO_ITEM_IN_STOCK":
      return { show: true, message: "Cannot add, item out of stock" };
    case "REMOVE_MESSAGE":
      return { show: false, message: "" };
    default:
      break;
  }
};
