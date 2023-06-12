export const ADD_TO_CART = "ADD_TO_CART";
export const GENERATE_PRODUCTS = "GENERATE_PRODUCTS";


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

