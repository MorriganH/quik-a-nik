import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Android from "../components/Android";
import OrderList from "../components/OrderList";
import Web from "../components/Web";

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
  Android: {
    screen: Android,
  },
  OrderList: {
    screen: OrderList,
  },
  Web: {
    screen: Web,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
