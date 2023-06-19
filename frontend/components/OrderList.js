import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import axios from "axios";
import tunnelURL from "../backend_tunnel";
import styles from "../styles/orderList";
import { formatOrderData } from "../helpers/orders";

import { setOrders } from "../redux/actions";

export default function OrderList({ navigation }) {
  const device = Platform.OS;

  const { userSession, orders } = useSelector(state => state.reducer);

  const fetchOrders = () => {
    //GET request to server to fetch orders data
    axios
      .get(`${tunnelURL}/orders/user/${userSession.id}`)
      //Format orders data and dispatch to Redux to set state
      .then(res => {
        console.log("orders response: ", res.data)
        const formattedData = formatOrderData(res.data);
        console.log("formattedData: ", formattedData)
        dispatch(setOrders(formattedData));
      })
      .catch(err => {
        console.log(err);
      });
  };

  //fetchOrders once component loaded
  useEffect(() => {
    fetchOrders();
  }, []);

  //useDispatch hook dispatches Redux action
  const dispatch = useDispatch();

  // console.log("orders in OrderList: ", orders.orders);

  const Order = ({ order }) => {
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
          <Text>{`Longitude: ${Number(order.longitude).toFixed(7)}`}</Text>
          <Text>{`Latitude: ${Number(order.latitude).toFixed(7)}`}</Text>
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
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          {orders.length > 0 ? (
            <>
              <Text
                style={styles.title}
              >{`${orders[0].first_name}'s Orders`}</Text>

              <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
                data={orders} //Pass orders data to FlatList
                renderItem={({ item }) => <Order order={item} />}
                keyExtractor={order => order.id.toString()}
              />
            </>
          ) : (
            <View style={styles.orderItem}>
              <Text style={styles.orderId}>
                You haven't had any picnics yet
              </Text>
              <Image
                style={styles.missingImage}
                source={require("../assets/empty-basket.png")}
              />
              <Pressable
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.link}>Get one started now!</Text>
              </Pressable>
            </View>
          )}
        </View>

        {device === "web" && (
          <Image style={styles.qnBear} source={require("../assets/QB2.png")} />
        )}
      </View>
    </>
  );
}
