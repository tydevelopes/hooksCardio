/**
 * A reducer takes current state and an action as arguments.
 * A reducer then returns a new state based on the action type.
 */
export const productReducer = (products, action) => {
  switch (action.type) {
    // case "GET_DATA":
    //   return initialProducts;
    case "REMOVE_ONE_PRODUCT":
      return products.map(product => {
        if (action.id === product.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    case "ADD_ONE_PRODUCT":
      return products.map(product => {
        if (action.id === product.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    case "RESET_TO_ONE":
      return products.map(product => {
        if (action.id === product.id) {
          return { ...product, quantity: product.quantity + action.count - 1 };
        }
        return product;
      });
    case "REMOVE_ALL_FROM_CART":
      return products.map(product => {
        if (action.id === product.id) {
          return { ...product, quantity: product.quantity + action.count };
        }
        return product;
      });

    case "CLEAR_CART":
      return products.map(product => {
        const found = action.cartList.find(item => item.id === product.id);
        if (!found) {
          return product;
        }
        return { ...product, quantity: product.quantity + found.count };
      });
    default:
      return Error("Unknown action type");
  }
};
