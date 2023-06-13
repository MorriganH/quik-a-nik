import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable, Platform, TouchableOpacity, Modal  } from "react-native";
import Android from "./Android";
import Web from "./Web";
import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addItem, toggleModal, adjustQuantity, setProducts } from "../redux/actions";
import tunnelURL from '../backend_tunnel'

export default function Home({navigation, route}) {
const device = Platform.OS

const { cart, products, modalShow, modalProduct } = useSelector(
  (state) => state.reducer
);const dispatch = useDispatch();

  const filter = function(path, view){
    axios
    .get(`${tunnelURL}/products/${path}`)
    .then((prods) => {
      dispatch(setProducts(prods.data.products))
    }).then(viewSwitcher(view)).catch(err => {
      console.log(err);
      
    });
  }

  const viewSwitcher = function(newView) {
 
    navigation.navigate(newView) 
    
  }
  return (

    <View style={styles.container}>
      <Text style={styles.bigText}>Juniper Xenoblade</Text>
      <Image
        style={styles.logo}
        source={require("../assets/Juniper_Twitter_Art.webp")}
      />

      <Text>Running on {device}</Text>
      {device === 'web' && <Web />}
      {device !== 'web' && <Android />}

      <TouchableOpacity
          style={styles.button}
          onPress={() => filter("","ProductList")}
          
      ><Text>Mix & Match</Text>
      </TouchableOpacity>  
      
      <TouchableOpacity
          style={styles.button}
          onPress={() => filter("deluxe","ProductList")}
          
      ><Text>Deluxe Items</Text>
      </TouchableOpacity>  
      
      <TouchableOpacity
          style={styles.button}
          onPress={() => filter("4","ProductList")}
          
      ><Text>Family Baskets</Text>
      </TouchableOpacity>  
      
      <TouchableOpacity
          style={styles.button}
          onPress={() => filter("3","ProductList")}
          
      ><Text>Baskets for three</Text>
      </TouchableOpacity>  
      
      <TouchableOpacity
          style={styles.button}
          onPress={() => filter("2","ProductList")}
          
      ><Text>Baskets for two</Text>
      </TouchableOpacity>  
      
      <TouchableOpacity
          style={styles.button}
          onPress={() => filter("addons","ProductList")}
          
      ><Text>Individual items & add-ons</Text>

      </TouchableOpacity>  
      {device === 'web' && <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("WebMap")}
        >
          <Text>Map</Text>
        </Pressable>}
      {device !== 'web' && <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("Map")}
        >
          <Text>Map</Text>
        </Pressable>}

        <Modal visible={modalShow} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <Button title="X" onPress={() => dispatch(toggleModal())} />
          <View style={styles.button}>
            <Text>UserName</Text>
            <Text>Email@address.com</Text>


          </View>
          <Text>Orders</Text>
          <Text>About</Text>
          <Text>Become a certified Quik-a-nik specialist</Text>
          <Text></Text>
          <Text></Text>
        </View>
      </Modal>
   
    </View>
  );
  }
  const styles = StyleSheet.create({
    webNavBar: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 3,
      height: 50,
      shadowColor: "grey",
      width: "70%",
      shadowOffset: { width: 6, height: 6 },
      shadowRadius: 10,
      position: "fixed",
      top: 20,
    },
  
    button: {
      display: "flex",
      backgroundColor: "white",
      // border: "solid",
      padding: 5,
      margin: 5,
      width: "100%",
      height: 75,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 }, 
      shadowRadius: 10,


    },
    logo: {
      width: 200,
      height: 200,
    },
    container: {
      display: "flex",
      alignSelf: "center",
      alignContent: "center",
      width: "80%",

    },
    modal: {
      display: "flex",
      flex: 1,
      backgroundColor: "#e9ebec"


    },
})
