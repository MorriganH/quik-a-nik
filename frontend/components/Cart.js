//REACT
import {
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { adjustCartQuantity } from "../redux/actions";

//COMPONENTS
import styles from "../styles/cart";

//Store users platform in variable
const device = Platform.OS;

//FUNCTION DECLARATION
export default function Cart({navigation}) {

  //STATES
  const { cart, cartNotification, userSession } = useSelector(
    (state) => state.reducer
  );

  //VARIABLE DECLARATION
  const dispatch = useDispatch();
  let subTotal = 0;

  //Sum the price of the cart
  cart.forEach((item) => {
    const itemPrice = (item.price_cents / 100) * item.default_quantity;
    subTotal += itemPrice;
  });

  //Build Footer component for FlatList
  const Footer = function () {
    return (
      <View style={styles.total}>
        <View style={styles.lineItem}>
          <Text>Items ({cartNotification}):</Text>
          <Text>${subTotal.toFixed(2)}</Text>
        </View>

        <View style={styles.lineItem}>
          <Text>Delivery fee:</Text>
          <Text>${deliveryFee.toFixed(2)}</Text>
        </View>

        <View style={styles.divider}>
          <View style={styles.lineItem}>
            <Text>Total before tax:</Text>
            <Text>${beforeTax.toFixed(2)}</Text>
          </View>

          <View style={styles.lineItem}>
            <Text>Estimated tax:</Text>
            <Text>${tax.toFixed(2)}</Text>
          </View>

          <View style={styles.lineItem}>
            <Text style={styles.orderTotal}>Order Total:</Text>
            <Text style={styles.orderTotal}>${total.toFixed(2)}</Text>
          </View>
        </View>
        {userSession !== null && (
          <Pressable
            style={styles.submitButton}
            onPress={() => navigation.navigate("Map")}
          >
            <Text style={styles.submitButtonText}>Select Drop-off Location</Text>
          </Pressable>
        )}
        {userSession === null && (
          <View style={styles.promptSignIn}>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.promptLink}>Log in</Text>
            </Pressable>
            <Text style={styles.promptText}> or </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.promptLink}>register</Text>
            </Pressable>
            <Text style={styles.promptText}> to continue with this order.</Text>
          </View>
        )}
      </View>
    );
  };

  //Build Item component for FlatList
  const Item = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.containerFlow}>
        <View style={styles.containerFlow}>
          <Image style={styles.image} source={{ uri: item.image }} />

          <View style={styles.containerMid}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <View style={styles.quantityControls}>
              <Pressable
                onPress={() => dispatch(adjustCartQuantity(item, "-"))}
              >
                <Text style={styles.quantityComponent}>-</Text>
              </Pressable>

              <Text style={styles.quantityComponent}>
                {item.default_quantity}
              </Text>

              <Pressable
                onPress={() => dispatch(adjustCartQuantity(item, "+"))}
              >
                <Text style={styles.quantityComponent}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.containerEnd}>
          <Pressable
            onPress={() => dispatch(adjustCartQuantity(item, "delete"))}
          >
            <Text style={styles.quantityComponent}>⨉</Text>
          </Pressable>
          <Text style={styles.orderTotal}>
            ${((item.price_cents / 100) * item.default_quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
  
  //Add tax and delivery charges to total
  const taxRate = 1.13;
  const deliveryFee = cartNotification * 1.25;
  const beforeTax = subTotal + deliveryFee;
  const tax = beforeTax * taxRate - beforeTax;
  const total = beforeTax + tax;
  
  //If cart not empty
  if (cartNotification > 0) {
    return (
      <View style={styles.container}>
        {device === "web" && (
          <>
          <FlatList
            style={styles.list}
            data={cart}
            renderItem={(item) => <Item item={item.item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            />
            <Footer/>
            </>
        )}

       
        {device !== "web" && (
          <FlatList
            style={styles.list}
            data={cart}
            renderItem={(item) => <Item item={item.item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={Footer}
          />
        )}
      </View>
    );
    //If cart empty
  } else {
    return (
      <View style={styles.missingItem}>
        <Text style={styles.title}>
          {" "}
          Can't have a picnic with an empty basket 😉{" "}
        </Text>
        <Image
          style={styles.missingImage}
          source={require("../assets/empty-basket.png")}
        />
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.link}>Click here for some inspiration! </Text>
        </Pressable>
      </View>
    );
  }
}
