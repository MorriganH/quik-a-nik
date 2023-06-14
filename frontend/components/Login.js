import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import tunnelURL from "../backend_tunnel";
import axios from "axios";
import { setUserSession } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userSession } = useSelector(state => state.reducer);

  const viewSwitcher = function (newView) {
    navigation.push(newView);
  };

  const userAuth = function (email, password) {
    const input = { email, password };

    axios
      .post(`${tunnelURL}/users/`, input)
      .then(response => {
        if (response.data === "") {
          return alert("Login Failed");
        }
        dispatch(setUserSession(response.data));
      })
      .then(() => {
        viewSwitcher("Home");
      })
      .catch(err => {
        console.log(err);
      });
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
        onSubmitEditing={() => userAuth(email, password)}
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
        onSubmitEditing={() => userAuth(email, password)}
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
