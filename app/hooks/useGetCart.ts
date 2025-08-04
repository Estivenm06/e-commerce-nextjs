import { useEffect, useReducer } from "react";
import type { AlertType, Cart, Action } from "../utils/types";

const addProduct = (
  state: Cart | null,
  action: Action,
  showAlert: (alert: AlertType) => void
): Cart | null => {
  if (
    action.type !== "ADD_PRODUCT" ||
    !state ||
    action.payload === null ||
    !state.products
  )
    return state;
  const existingProductIndex = state.products.findIndex(
    (product) => product.productId === action.payload!.id
  );

  let newState;
  if (existingProductIndex !== -1) {
    showAlert({
      message: "You added more quantity of this product",
      type: "success",
    });
    newState = {
      ...state,
      products: state.products.map((product, index) =>
        index === existingProductIndex
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    };
  } else {
    showAlert({ message: "Product added to cart", type: "success" });
    newState = {
      ...state,
      products: [
        ...state.products,
        {
          productId: action.payload.id,
          quantity: 1,
        },
      ],
    };
  }
  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};

const removeProduct = (
  state: Cart | null,
  action: Action,
  showAlert: (alert: AlertType) => void
) => {
  if (
    action.type !== "REMOVE_PRODUCT" ||
    !state ||
    !action.payload ||
    !state.products
  )
    return state;

  const updatedProducts = state.products.filter(
    (product) => product.productId !== action.payload!.id
  );
  if (updatedProducts.length === state.products.length) {
    showAlert({
      message: "Product not found in cart",
      type: "error",
    });
    return state;
  }
  showAlert({ message: "Product removed from cart", type: "success" });
  const newState = {
    ...state,
    products: updatedProducts,
  };
  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};

const clearCart = (
  state: Cart | null,
  showAlert: (alert: AlertType) => void
) => {
  showAlert({ message: "Cart cleared", type: "success" });
  const newState = {
    username: state?.username || "",
    products: [],
  };
  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};

const selectQuantity = (
  state: Cart | null,
  action: Action,
  showAlert: (alert: AlertType) => void
) => {
  if (
    action.type !== "SELECT_QUANTITY" ||
    !state ||
    !action.payload ||
    !state.products
  )
    return state;
  const existingProductIndex = state.products.findIndex(
    (product) => product.productId === action.payload!.id
  );
  if (existingProductIndex !== -1) {
    showAlert({
      message: "You updated the quantity of this product",
      type: "success",
    });
    const newState = {
      ...state,
      products: state.products.map((product, index) =>
        index === existingProductIndex
          ? { ...product, quantity: action.payload!.quantity }
          : product
      ),
    };
    localStorage.setItem("cart", JSON.stringify(newState));
    return newState;
  }
  showAlert({
    message: "Product not found in cart",
    type: "error",
  });
  return state;
};

const loadCart = (state: Cart | null, action: Action) => {
  if (action.type !== "LOAD_CART") return state;
  if (action.payload) {
    state = {
      username: action.payload.username || "",
      products: [...(action.payload?.products || [])],
    };
    localStorage.setItem("cart", JSON.stringify(state));
    return state;
  }
  return state;
};

const checkout = (
  state: Cart | null,
  showAlert: (alert: AlertType) => void
) => {
  showAlert({ message: "This option is unavailable.", type: "warning" });
  return state;
};

const useGetCart = (showAlert: (alert: AlertType) => void) => {
  const reducer = (state: Cart | null, action: Action): Cart | null => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return addProduct(state, action, showAlert);
      case "REMOVE_PRODUCT":
        return removeProduct(state, action, showAlert);
      case "CLEAR_CART":
        return clearCart(state, showAlert);
      case "SELECT_QUANTITY":
        return selectQuantity(state, action, showAlert);
      case "LOAD_CART":
        return loadCart(state, action);
      case "CHECKOUT":
        return checkout(state, showAlert);
      default:
        return state;
    }
  };
  const [cart, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      dispatch({ type: "LOAD_CART", payload: parsedCart });
    } else {
      dispatch({ type: "LOAD_CART", payload: null });
    }
  }, [dispatch]);

  return { cart, dispatch, showAlert };
};

export { useGetCart };
