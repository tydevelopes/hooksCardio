//Reducer to manage products in cart
export const cartReducer = (cartList, action) => {
  switch (action.type) {
    case "ADD_ONE_TO_CART":
      // if (cartList.length === 0) { // FIXME: Not needed
      //   // create a new cart array if empty
      //   return [
      //     {
      //       name: action.payload.name,
      //       id: action.payload.id,
      //       price: action.payload.price,
      //       count: 1
      //     }
      //   ];
      // }

      // if product is arleady in cart
      const list = cartList.map(cartItem => {
        if (action.payload.id === cartItem.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      // if product is not in cart
      const found = cartList.find(
        cartItem => action.payload.id === cartItem.id
      );
      if (!found) {
        list.push({
          name: action.payload.name,
          id: action.payload.id,
          price: action.payload.price,
          count: 1
        });
      }
      return list;
    case "REMOVE_ONE_FROM_CART":
      return cartList.map(cartItem => {
        if (action.payload.id === cartItem.id) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      });
    case "REMOVE_ALL_FROM_CART":
      return cartList.filter(cartItem => action.payload.id !== cartItem.id);
    case "RESET_TO_ONE":
      return cartList.map(cartItem => {
        if (action.payload.id === cartItem.id) {
          return { ...cartItem, count: 1 };
        }
        return cartItem;
      });
    case "CLEAR_CART":
      return [];
    default:
      return Error("Unknown action type");
  }
};
