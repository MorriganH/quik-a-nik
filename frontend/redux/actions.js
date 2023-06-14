export const ADD_TO_CART = "ADD_TO_CART";
export const GENERATE_PRODUCTS = "GENERATE_PRODUCTS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADJUST_QUANTITY = "ADJUST_QUANTITY";
export const GENERATE_ORDERS = "GENERATE_ORDERS";


export const addItem = item => dispatch => {
  console.log(item)
  dispatch({ 
    type: ADD_TO_CART, 
    payload: item });
};

export const setProducts = productList => dispatch => {
  dispatch({
    type: GENERATE_PRODUCTS,
    payload: productList
  })
}

export const setOrders = orderList => dispatch => {
  dispatch({
    type: GENERATE_ORDERS,
    payload: orderList
  })
}

export const toggleModal = product => dispatch => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: product
  })
}
export const adjustQuantity = operation => dispatch => {
  dispatch({
    type: ADJUST_QUANTITY,
    payload: operation
  })
}

