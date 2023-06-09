//REACT
import { React, useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Platform,
  TouchableOpacity,
  Modal,
  ScrollView,
  ImageBackground,
} from "react-native";
import { toggleModal, setProducts, setUserSession } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

//COMPONENT
import Footer from "./Footer";
import styles from "../styles/home";

//NETWORKING
import axios from "axios";
import tunnelURL from "../backend_tunnel";

//FUNCTION DECLARATION
export default function Home({ navigation }) {
  //STATE
  const [menuModalShow, setMenuModalShow] = useState(false);
  const { cart, products, modalShow, modalProduct, userSession } = useSelector(
    (state) => state.reducer
  );
  const [orderCount, setOrderCount] = useState(0);

  //Store users platform in variable
  const device = Platform.OS;

  //VARIABLE DECLARATION
  const dispatch = useDispatch();

  //Sets products to display in product list view
  const filter = function (path, view) {
    axios
      .get(`${tunnelURL}/products/${path}`)
      .then((prods) => {
        dispatch(setProducts(prods.data.products));
      })
      .then(viewSwitcher(view))
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrderCount = function (user_id) {
    axios
      .get(`${tunnelURL}/orders/count/${user_id}`)
      .then((res) => {
        setOrderCount(res.data);
      })
      .catch((err) => console.log(err));
  };

  //Manage user and modal states on render
  useEffect(() => {
    if (userSession) {
      getOrderCount(userSession.id);
    }
  }, [modalShow]);

  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };

  const logout = () => {
    dispatch(setUserSession(null));
    viewSwitcher("Login");
  };

  //RETURN
  return (
    <View style={styles.container}>
      <Text style={styles.slogan}>- Summer starts here - </Text>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.webColumn}>
          <Pressable
            style={styles.spotlightButton}
            onPress={() => filter("", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-leslie-torres-12087878.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Mix & Match</Text>

          <Pressable
            style={styles.button}
            onPress={() => filter("4", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-kampus-production-7669170.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Family Packages</Text>

          <View style={styles.iconsHolder}>
            <Pressable
              onPress={() => filter("addons", "ProductList")}
              style={styles.iconsGroup}
            >
              <ImageBackground
                style={styles.icons}
                source={require("../assets/home_page_test/pexels-ron-lach-10398349.jpg")}
              ></ImageBackground>
              <Text style={styles.iconsLabel}>Add-ons</Text>
            </Pressable>

            <Pressable
              onPress={() => filter("drinks", "ProductList")}
              style={styles.iconsGroup}
            >
              <ImageBackground
                style={styles.icons}
                source={require("../assets/home_page_test/pexels-antoni-shkraba-5085770.jpg")}
              ></ImageBackground>
              <Text style={styles.iconsLabel}>Drinks</Text>
            </Pressable>

            <Pressable
              onPress={() => filter("potato", "ProductList")}
              style={styles.iconsGroup}
            >
              <ImageBackground
                style={styles.icons}
                source={require("../assets/home_page_test/potato.jpg")}
              ></ImageBackground>
              <Text style={styles.iconsLabel}>Potato</Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => filter("2", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/pexels-anna-guerrero-1956974.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Baskets for two</Text>

          <Pressable
            style={styles.button}
            onPress={() => filter("snacks", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-darina-belonogova-8764274.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Snackies</Text>

          <Pressable
            style={styles.button}
            onPress={() => filter("merch", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-gabriel-peter-1188649.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Merchandise</Text>
        </View>
        <View style={styles.webColumn}>
          <Pressable
            style={styles.button}
            onPress={() => filter("baskets", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-taryn-elliott-4099106.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>All baskets</Text>

          <Pressable
            style={styles.button}
            onPress={() => filter("2", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-roman-odintsov-8180728.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Healthy living</Text>

          <Pressable
            style={styles.spotlightButton}
            onPress={() => filter("party", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-rdne-stock-project-8523507.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Deluxe packages</Text>

          <Pressable
            style={styles.button}
            onPress={() => filter("party", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-helena-lopes-697244.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Party packages</Text>

          <Pressable
            style={styles.button}
            onPress={() => filter("party", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-askar-abayev-5638732.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Large groups</Text>

          <Pressable
            style={styles.button}
            onPress={() => filter("condiments", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-rdne-stock-project-7551427.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Fun in the sun</Text>
        </View>

        {device !== "web" && <Footer navigation={navigation} />}
      </ScrollView>
      {device === "web" && <Footer navigation={navigation} />}

      <Modal
        visible={modalShow === "homeModal"}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => dispatch(toggleModal("", ""))}>
              <Text style={styles.closeModal}>⨉</Text>
            </TouchableOpacity>
            {userSession && (
              <>
                <Text style={styles.modalUsername}>
                  {userSession.first_name} {userSession.last_name}
                </Text>
                <Text style={styles.modalEmail}>{userSession.email}</Text>

                <Text style={styles.modalOrderBanner}>
                  {" "}
                  You have made {orderCount} Quik-a-nik orders!
                </Text>
              </>
            )}
            {!userSession && (
              <Text style={styles.modalUsername}>
                Sign in to view your account details
              </Text>
            )}
          </View>
          {userSession && (
            <>
              <View style={styles.modalDivider}>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    viewSwitcher("OrderList");
                    dispatch(toggleModal("", ""));
                  }}
                >
                  <Text style={styles.modalOption}>🧾 Orders</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    logout();
                    dispatch(toggleModal("", ""));
                  }}
                >
                  <Text style={styles.modalOption}>⬅️ Logout</Text>
                </Pressable>
              </View>
            </>
          )}
          {!userSession && (
            <View style={styles.modalDivider}>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  viewSwitcher("Login");
                  dispatch(toggleModal("", ""));
                }}
              >
                <Text style={styles.modalOption}>➡️ Login</Text>
              </Pressable>

              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  viewSwitcher("Register");
                  dispatch(toggleModal("", ""));
                }}
              >
                <Text style={styles.modalOption}>🖊️ Register</Text>
              </Pressable>
            </View>
          )}
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              viewSwitcher("About");
              dispatch(toggleModal("", ""));
            }}
          >
            <Text style={styles.modalSubOption}>📍 About us</Text>
          </Pressable>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              viewSwitcher("ContactUs");
              dispatch(toggleModal("", ""));
            }}
          >
            <Text style={styles.modalSubOption}>📢 Contact us</Text>
          </Pressable>
          <Text style={styles.modalSubOption}>🌭 Work with us</Text>
          <Text style={styles.modalSubOption}>❓ FAQ</Text>
        </View>
      </Modal>
    </View>
  );
}
