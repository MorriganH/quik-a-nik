import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import tunnelURL from "../backend_tunnel";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = function (email, password) {
    const input = {email, password}
    console.log(input)

    axios
      .post(`${tunnelURL}/users/`, input)
      .then(response => {
        console.log(response);
        // dispatch(setProducts(prods.data.products));
      })
      // .then(viewSwitcher(view))
      .catch(err => {
        console.log(err);
      });
  };

  const test = event => {
    console.log(event);
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="email"
        onChangeText={newText => setEmail(newText)}
      />
      <Text>Password</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="password"
        onChangeText={newText => setPassword(newText)}
        secureTextEntry={true}
      />
      <Pressable
        style={{
          margin: 20,
          height: 40,
          width: 100,
          backgroundColor: "red",
        }}
        onPress={() => userAuth(email, password)}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}
