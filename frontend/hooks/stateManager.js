// import { useReducer, useEffect } from "react";
// import axios from "axios";

// const stateManager = function () {
//   const defaultState = {
//     cart: [],
//     products: [],
//     orders: [],
//     productsLoading: true,
//     ordersLoading: true,
//   };

//   const reducer = function (state, action) {
//     switch (action.type) {
//       case "addToCart":
//         if (!state.cart.some((i) => i.id === action.item.id)) {
//           let lineItem = action.item;
//           lineItem.qty = 1;
//           return {
//             ...state,
//             cart: [...state.cart, lineItem],
//           };
//         } else {
//           const index = state.cart.findIndex((i) => i.id === action.item.id);
//           //I have a feeling this is bad practice need to review (but it works)
//           state.cart[index].qty++;
//         }

//       case "generateProducts":
//         console.log(action.prods);
//         return {
//           ...state,
//           productsLoading: false,
//           products: action.prods,
//         };

//       case "generateOrders":
//         console.log(action.orders);
//         return {
//           ...state,
//           ordersLoading: false,
//           orders: action.orders,
//         };
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   useEffect(() => {
//     axios.get("http://localhost:3000/products").then((res) => {
//       const prods = res.data.products;
//       dispatch({ type: "generateProducts", prods });
//     });

//     axios.get("http://localhost:3000/orders").then((res) => {
//       const orders = res.data.orders;
//       dispatch({ type: "generateOrders", orders});
//     })
    
//   }, []);

//   const addItem = function (item) {
//     dispatch({ type: "addToCart", item });
//   };

//   return {
//     state,
//     addItem,
//   };
// };

// export default stateManager;
