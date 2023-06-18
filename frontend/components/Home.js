import { React, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  Pressable,
  Platform,
  TouchableOpacity,
  Modal,
  ScrollView,
  ImageBackground,
} from "react-native";
import Footer from "./Footer"
import { setUserSession } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addItem,
  toggleModal,
  adjustQuantity,
  setProducts,
} from "../redux/actions";
import tunnelURL from "../backend_tunnel";
import styles from "../styles/home";

export default function Home({ navigation }) {
  const device = Platform.OS;

  const [menuModalShow, setMenuModalShow] = useState(false);

  const { cart, products, modalShow, modalProduct, userSession } = useSelector(
    (state) => state.reducer
  );

  const [orderCount, setOrderCount] = useState(0);

  const dispatch = useDispatch();

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

  return (
    <View style={styles.container}>
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
            <Pressable onPress={() => filter("addons", "ProductList")} style={styles.iconsGroup}>
              <ImageBackground
                style={styles.icons}
                source={require("../assets/home_page_test/pexels-ron-lach-10398349.jpg")}
              ></ImageBackground>
              <Text style={styles.iconsLabel}>Add-ons</Text>
            </Pressable>

            <Pressable style={styles.iconsGroup}>
              <ImageBackground
                style={styles.icons}
                source={require("../assets/home_page_test/pexels-antoni-shkraba-5085770.jpg")}
              ></ImageBackground>
              <Text style={styles.iconsLabel}>Drinks</Text>
            </Pressable>

            <Pressable style={styles.iconsGroup}>
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

          </View>
          <View style={styles.webColumn}>

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
            onPress={() => filter("2", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-roman-odintsov-8180728.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Healthy living</Text>

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
            onPress={() => filter("2", "ProductList")}
          >
            <ImageBackground
              style={styles.logoTest}
              source={require("../assets/home_page_test/pexels-rdne-stock-project-7551427.jpg")}
            ></ImageBackground>
          </Pressable>
          <Text style={styles.buttonTitle}>Fun in the sun</Text>

{/* 
          <View style={styles.footer}>
            <Pressable style={styles.footerOptions}>
              <Text>All baskets</Text>
            </Pressable>
            <Pressable style={styles.footerOptions}>
              <Text>About us</Text>
            </Pressable>
          </View>
          <View style={styles.footer}>
            <Pressable style={styles.footerOptions}>
              <Text>Find a park</Text>
            </Pressable>
            <Pressable style={styles.footerOptions}>
              <Text>How we're helping</Text>
            </Pressable>
          </View>
          <Text style={styles.buttonTitle}> TeamTBD™</Text> */}
        </View>

        {device !== "web" && <Footer/> }
      </ScrollView>
        {device === "web" && <Footer/> }
    
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
          {/* <View style={{ alignItems: "center" }}> */}
          <Text style={styles.modalSubOption}>📍 About</Text>
          <Text style={styles.modalSubOption}>🌭 Work with us</Text>
          <Text style={styles.modalSubOption}>❓ FAQ</Text>
          <Text style={styles.modalSubOption}>📢 Contact us</Text>
          {/* </View> */}
        </View>
      </Modal>
    </View>
  );
}
