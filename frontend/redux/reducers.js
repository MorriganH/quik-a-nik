import { useEffect } from "react";
import {
  ADD_TO_CART,
  GENERATE_PRODUCTS,
  TOGGLE_MODAL,
  ADJUST_QUANTITY,
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
  isLoading: true,
  modalProduct: {},
  modalShow: false,
  cartNotification: 0
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:

      if (!state.cart.some((i) => i.id === action.payload.id)) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        const index = state.cart.findIndex((i) => i.id === action.payload.id);

        const mutableCart = [...state.cart];
        mutableCart[index].default_quantity++;

        return {
          ...state,
          cart: mutableCart,
        };
      }

    case GENERATE_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case TOGGLE_MODAL:
      if (state.modalShow === true) {
        return {
          ...state,
          modalShow: false,
          modalProduct: {},
        };
      }
      return {
        ...state,
        modalShow: true,
        modalProduct: action.payload,
      };
    case ADJUST_QUANTITY:
      let currentModalProduct = state.modalProduct;
      if (action.payload === "+") {
        currentModalProduct.default_quantity++;
      }
      if (action.payload === "-") {
        currentModalProduct.default_quantity--;
      }
      if (action.payload === "reset") {
        currentModalProduct.default_quantity++;
      }
      console.log(currentModalProduct);
      return {
        ...state,
        modalProduct: currentModalProduct,
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
