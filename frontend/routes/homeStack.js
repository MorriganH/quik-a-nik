import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const screens = {
  Home: {
    screen: Home,
  },
  ProductList: {
    screen: ProductList,
  },
  Cart: {
    screen: Cart,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
