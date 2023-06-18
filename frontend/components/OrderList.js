import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, Button, FlatList } from "react-native";
import axios from "axios";
import tunnelURL from "../backend_tunnel";
import styles from "../styles/orderList";
import { formatOrderData } from "../helpers/orders";

import { setOrders } from "../redux/actions";

export default function OrderList() {
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

  const Order = ({ order }) => {
    console.log("Order WITHIN component: ", order);
    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderId}>{`Order ID:  ${order.id}`}</Text>

        {order.line_items.map(
          (
            item,
            index //NEED TO REFACTOR KEY USE FOR ITEMLIST
          ) => (
            <View style={styles.itemList} key={index}>
              <Text style={styles.productText}>{`${item.name}`}</Text>
              <Text style={styles.qtyText}>{`Qty: ${item.quantity}`}</Text>
              <Text
                style={styles.linePriceText}
              >{`${item.line_price_cents}`}</Text>
            </View>
          )
        )}
        <View style={styles.location}>
          <Text>{`Longitude: ${order.longitude}`}</Text>
          <Text>{`Latitude: ${order.latitude}`}</Text>
        </View>
        <View style={styles.dateTotal}>
          <Text>{`Order Placed: ${order.created_at}`}</Text>
          <Text style={styles.total}>
            Total:{" "}
            <Text style={styles.price}>{`${order.total_price_cents}`}</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {orders.length > 0 && <Text style={styles.title}>{`${orders[0].first_name}'s Baskets`}</Text>}
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        data={orders} //Pass orders data to FlatList
        renderItem={({ item }) => <Order order={item} />}
        keyExtractor={(order) => order.id.toString()}
      />
    </View>
  );
}
