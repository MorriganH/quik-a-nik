import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, Button, FlatList } from "react-native";
import axios from "axios";
import tunnelURL from '../backend_tunnel';

import { setOrders } from "../redux/actions";

export default function OrderList() {

  let formattedOrders = null;

  function formatOrderData(orders) {

    const ordersById = {};
  
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
  
      if (!ordersById[order.id]) {
        // If this order id is not in ordersById, add it
        ordersById[order.id] = {
          id: order.id,
          user_id: order.user_id,
          first_name: order.first_name,
          email: order.email,
          total_price_cents: order.total_price_cents,
          longitude: order.longitude,
          latitude: order.latitude,
          created_at: order.created_at,
          line_items: [],
        };
      }
  
      // Add the line item to the appropriate order
      ordersById[order.id].line_items.push({
        name: order.name,
        line_price_cents: order.line_price_cents,
        quantity: order.quantity,
      });
    }
  
    // Convert the orders from an object to an array
    return Object.values(ordersById);
  }
  


  //useDispatch hook dispatches Redux action
  const dispatch = useDispatch();

  //useSelector hook selects orders state from Redux
  const {orders} = useSelector((state) => state.reducer);
  // console.log("orders in OrderList: ", orders.orders);

  const fetchOrders = () => {
    
      //GET request to server to fetch orders data
      axios.get(`${tunnelURL}/orders/user/1`)
      //Format orders data and dispatch to Redux to set state
      .then((res) => {
        const formattedData = formatOrderData(res.data);
        dispatch(setOrders(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  //fetchOrders once component loaded
  useEffect(() => {
    fetchOrders();
  }, []);

  const Order = ( {order} ) => {
  // console.log("order from within component: ", order);
     return (

  <View>
      <Text>{`Order ID: ${order.id}`}</Text>
    </View>
  )};

  return (
    <FlatList
      data={orders.orders} //Pass orders data to FlatList
      renderItem={(order) => <Order order={order.item} />}
      keyExtractor={(order) => order.id}
    />
  );
}
