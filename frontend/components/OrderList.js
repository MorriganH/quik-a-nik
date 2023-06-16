import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, Button, FlatList } from "react-native";
import axios from "axios";
import tunnelURL from "../backend_tunnel";
import styles from "../styles/ordersList";

import { setOrders } from "../redux/actions";

export default function OrderList() {

  function formatOrderData(data) {
    const ordersData = data.orders
    const ordersById = {};

    for (let i = 0; i < ordersData.length; i++) {
      const order = ordersData[i];

      if (!ordersById[order.id]) {
        // If this order id is not in ordersById, add new object for it
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
    
    // Convert the data from an object to an array for FlatList to work
    return Object.values(ordersById);
  }
  

  const fetchOrders = () => {
    //GET request to server to fetch orders data
    axios
      .get(`${tunnelURL}/orders/user/1`)
      //Format orders data and dispatch to Redux to set state
      .then((res) => {
        const formattedData = formatOrderData(res.data);
        console.log("formattedData: ", formattedData);
        dispatch(setOrders(formattedData));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  //fetchOrders once component loaded
  useEffect(() => {
    fetchOrders();
  }, []);


  //useDispatch hook dispatches Redux action
  const dispatch = useDispatch();
  
  
  //useSelector hook selects orders state from Redux
  const { orders } = useSelector((state) => state.reducer);
  // console.log("orders in OrderList: ", orders.orders);


  const Order = ({order}) => {
    console.log("Order WITHIN component: ", order);
    return (
      <View style={styles.list}>
        <Text>{`Order ID: ${order.id}`}</Text>
        {order.line_items.map((item, index) => (
          <View key={index}>
            <Text>{`Item: ${item.name}`}</Text>
            <Text>{`Quantity: ${item.quantity}`}</Text>
            <Text>{`Price: ${item.line_price_cents}`}</Text>
          </View>
        ))}
        <Text>{`Latitude: ${order.latitude} | Longitude: ${order.longitude}`}</Text>
        <Text>{`Date Ordered: ${order.created_at}`}</Text>
        <Text>{`Total Price: ${order.total_price_cents}`}</Text>
      </View>
    );
  };

  return (
    <View>
      {orders.length > 0 && <Text>{`${orders[0].first_name}'s Orders`}</Text>}
    <FlatList
      data={orders} //Pass orders data to FlatList
      renderItem={({item}) => <Order order={item} />}
      keyExtractor={(order) => order.id.toString()}
      />
      </View>
  );
}
