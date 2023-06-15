import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import tunnelURL from "../backend_tunnel";
import axios from "axios";
import { setUserSession } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { userSession } = useSelector(state => state.reducer);

  const viewSwitcher = function (newView) {
    navigation.push(newView);
  };

  const userAuth = function (email, password) {
    const input = { email, password };
    setEmail("");
    setPassword("");

    axios
      .post(`${tunnelURL}/users/`, input)
      .then(response => {
        if (response.data === "") {
          alert("Login Failed");
          throw Error("User credentials invalid");
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
      <Text>First Name</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="first name"
        onChangeText={newText => setFirstName(newText)}
        onSubmitEditing={() => userAuth(email, password)}
      />
      <Text>Last Name</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="last name"
        onChangeText={newText => setLastName(newText)}
        onSubmitEditing={() => userAuth(email, password)}
      />
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
      <Text>Confirm Password</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="confirm password"
        onChangeText={newText => setPasswordConfirm(newText)}
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
