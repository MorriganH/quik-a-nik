import { useEffect } from "react";
import {
  ADD_TO_CART,
  GENERATE_PRODUCTS,
  GENERATE_ORDERS,
  TOGGLE_MODAL,
  ADJUST_QUANTITY,
  SET_USER_SESSION,
  SET_LOCATION_INFO,
  ADJUST_CART_QUANTITY,
} from "./actions";

const initialState = {
  cart: [],
  products: [
    {
      id: 49,
      name: "Products not found",
      price_cents: 4000,
      description: "6 Pack of Beer, 6 Pack of Wine Coolers, 1 Bag of Ice",
      is_basket: true,
      portions: 4,
      is_deluxe: true,
      image: "booze_basket.png",
      created_at: "2023-06-09T14:40:47.689Z",
      updated_at: "2023-06-09T14:40:47.689Z",
    },
  ],
  orders: [],
  loading: true,
  ordersLoading: true,
  modalProduct: {},
  modalShow: false,
  cartNotification: 0,
  userSession: null,
  locationInfo: null,
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cart.some((i) => i.id === action.payload.id)) {
        const cartItem = { ...action.payload };
        const newNotification =
          state.cartNotification + action.payload.default_quantity;
        return {
          ...state,
          cart: [...state.cart, cartItem],
          cartNotification: newNotification,
        };
      } else {
        const index = state.cart.findIndex((i) => i.id === action.payload.id);

        const mutableCart = [...state.cart];
        let notification =
          state.cartNotification - mutableCart[index].default_quantity;

        mutableCart[index].default_quantity += action.payload.default_quantity;

        notification += mutableCart[index].default_quantity;

        return {
          ...state,
          cart: mutableCart,
          cartNotification: notification,
        };
      }

    case GENERATE_PRODUCTS:
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
      };

    case GENERATE_ORDERS:
      return {
        ...state,
        ordersLoading: false,
        orders: action.payload,
      };

    case TOGGLE_MODAL:
      if (state.modalShow === true) {
        return {
          ...state,
          modalShow: false,
          modalProduct: {},
        };
      }
      const modalProd = { ...action.payload };
      modalProd.default_quantity = 1;
      return {
        ...state,
        modalShow: true,
        modalProduct: modalProd,
      };

    case ADJUST_QUANTITY:
      let currentModalProduct = state.modalProduct;
      if (action.payload === "+") {
        currentModalProduct.default_quantity++;
      }
      if (action.payload === "-") {
        currentModalProduct.default_quantity--;
      }

      return {
        ...state,
        modalProduct: currentModalProduct,
      };

    case ADJUST_CART_QUANTITY:
      const mutableCart = [...state.cart];
      let notification = state.cartNotification;
      const currentCartProduct = state.cart.findIndex(
        (i) => i.id === action.item.id
      );

      if (action.operation === "+") {
        mutableCart[currentCartProduct].default_quantity++;
        notification++;
      }
      if (action.operation === "-") {
        mutableCart[currentCartProduct].default_quantity--;
        notification--;
        if (mutableCart[currentCartProduct].default_quantity === 0) {
          mutableCart.splice(currentCartProduct, 1);
        }
      }
      if (action.operation === "delete") {
        notification -= mutableCart[currentCartProduct].default_quantity;

        mutableCart.splice(currentCartProduct, 1);
      }

      return {
        ...state,
        cart: mutableCart,
        cartNotification: notification,
      };

    case SET_USER_SESSION:
      return {
        ...state,
        userSession: action.payload,
      };

    case SET_LOCATION_INFO:
      return {
        ...state,
        locationInfo: action.payload,
      };

    default:
      return state;
  }

  // useEffect(() => {
  //   const cartNotification = cart.reduce((sum, current) => {
  //     sum += current.default_quantity
  //   }, 0);

  //   return{
  //     ...state,
  //     cartNotification: cartNotification
  //   }
  // }, [state.cart])
};

export default reducer;
