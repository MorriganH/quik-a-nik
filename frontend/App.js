import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import styles from "./styles";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./components/Products";



export default function App() {
useEffect(() => {
  axios.get("http://localhost:3000/products").then(prods => console.log(prods.data.products))
},[])  
  
  const [viewHistory, setViewHistory] = useState(["HOME"]);
  const view = viewHistory[viewHistory.length - 1]
  console.log("Current view: ", view);



  const transition = function (newView, replace) {
    const oldHistory = [...viewHistory];

    // to be used if we have transitions...
    if (replace) {
      oldHistory.pop();
    }

    setViewHistory([...oldHistory, newView]);
  };

  const back = function () {
    const oldHistory = [...viewHistory];
    if (oldHistory.length !== 1) {
      oldHistory.pop();
    }
    setViewHistory(oldHistory);
  };

  return (
    <View style={styles.container}>
      {view === "HOME" && <Home transition={transition} back={back} view={view} setViewHistory={setViewHistory}></Home>}
      {view === "TEST" && <Button onPress={back} title="Take me back!"> </Button>}
      <StatusBar style="auto" />
    </View>
  );
}
