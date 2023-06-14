export const ADD_TO_CART = "ADD_TO_CART";
export const GENERATE_PRODUCTS = "GENERATE_PRODUCTS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADJUST_QUANTITY = "ADJUST_QUANTITY";
export const SET_USER_SESSION = "SET_USER_SESSION";

export const addItem = item => dispatch => {
  console.log(item);
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};

export const setProducts = productList => dispatch => {
  dispatch({
    type: GENERATE_PRODUCTS,
    payload: productList,
  });
};

export const toggleModal = product => dispatch => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: product,
  });
};
export const adjustQuantity = operation => dispatch => {
  dispatch({
    type: ADJUST_QUANTITY,
    payload: operation,
  });
};

export const setUserSession = id => dispatch => {
  dispatch({
    type: SET_USER_SESSION,
    payload: id,
  });
};
