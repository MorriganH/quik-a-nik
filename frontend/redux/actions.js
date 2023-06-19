export const ADD_TO_CART = "ADD_TO_CART";
export const GENERATE_PRODUCTS = "GENERATE_PRODUCTS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADJUST_QUANTITY = "ADJUST_QUANTITY";
export const GENERATE_ORDERS = "GENERATE_ORDERS";
export const SET_USER_SESSION = "SET_USER_SESSION";
export const SET_LOCATION_INFO = "SET_LOCATION_INFO";
export const ADJUST_CART_QUANTITY = "ADJUST_CART_QUANTITY";
export const RESET_CART = "RESET_CART";

export const addItem = (item, operation) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
    operation
  });
};

export const setProducts = (productList) => (dispatch) => {
  dispatch({
    type: GENERATE_PRODUCTS,
    payload: productList,
  });
};

export const setOrders = (orderList) => (dispatch) => {
  dispatch({
    type: GENERATE_ORDERS,
    payload: orderList,
  });
};

export const toggleModal = (product, modalType) => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: product,
    modalType
  });
};

export const adjustQuantity = (operation) => (dispatch) => {
  dispatch({
    type: ADJUST_QUANTITY,
    payload: operation,
  });
};

export const adjustCartQuantity = (item, operation) => (dispatch) => {
  dispatch({
    type: ADJUST_CART_QUANTITY,
    item,
    operation,
  });
};

export const setUserSession = (id) => (dispatch) => {
  dispatch({
    type: SET_USER_SESSION,
    payload: id,
  });
};

export const setLocationInfo = (location) => (dispatch) => {
  console.log(location)
  dispatch({
    type: SET_LOCATION_INFO,
    payload: location,
  });
};

export const resetCart = () => (dispatch) => {
  dispatch({
    type: RESET_CART,
  });
};
