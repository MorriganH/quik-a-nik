import { ADD_TO_CART, GENERATE_PRODUCTS } from "./actions";

const initialState = {
  cart: [],
  products: [   {
    id: 49,
    name: 'Adult Hydration Basket',
    price_cents: 4000,
    description: '6 Pack of Beer, 6 Pack of Wine Coolers, 1 Bag of Ice',
    is_basket: true,
    portions: 4,
    is_deluxe: true,
    image: 'booze_basket.png',
    created_at: "2023-06-09T14:40:47.689Z",
    updated_at: "2023-06-09T14:40:47.689Z"
  },
  {
    id: 50,
    name: 'Grill Lovers Pack',
    price_cents: 5000,
    description: '4 Frozen Hambuger Patties, 4 Hot Dogs, 4 Hamburger Buns, 4 Hot Dog Buns, 1 Set of Tongs',
    is_basket: true,
    portions: 8,
    is_deluxe: false,
    image: 'bbq_basket.png',
    created_at: "2023-06-09T14:40:47.689Z",
    updated_at: "2023-06-09T14:40:47.689Z"
  },
  {
    id: 51,
    name: 'Deluxe Grill Lovers Pack',
    price_cents: 12000,
    description: '8 Frozen Hambuger Patties, 8 Hot Dogs, 8 Hamburger Buns, 8 Hot Dog Buns, 1 Set of Tongs, 6 Pack of Beer, 6 Pack of Wine Coolers',
    is_basket: true,
    portions: 4,
    is_deluxe: true,
    image: 'deluxe_bbq_basket.png',
    created_at: "2023-06-09T14:40:47.689Z",
    updated_at: "2023-06-09T14:40:47.689Z"
  }

],
  isLoading: true,
};

const reducer = function (state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART:
      if (!state.cart.some((i) => i.id === action.payload.id)) {
        let lineItem = action.payload;
        lineItem.qty = 1;
        return {
          ...state,
          cart: [...state.cart, lineItem],
        };
      } else {
        const index = state.cart.findIndex((i) => i.id === action.payload.id);
        //I have a feeling this is bad practice need to review 
        const mutableCart = [...state.cart]
        mutableCart[index].qty++

        return{

          ...state,
          cart: mutableCart 
        }
        ;
      }

    case GENERATE_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};



export default reducer
