import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import tunnelURL from "../backend_tunnel";
import axios from "axios";
import { setUserSession } from "../redux/actions";
import { useDispatch } from "react-redux";
import bcrypt from "bcryptjs";
import styles from "../styles/login";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };

  // axios request to verify user info
  const userAuth = function (email, password) {
    const input = { email: email.toLowerCase(), password };

    axios
      .post(`${tunnelURL}/users/login`, { email: input.email })
      .then(res => {
        if (!res.data) {
          alert("Login failed. Check your email and password.");
          throw Error("User credentials invalid");
        }

        return bcrypt.compare(password, res.data.password).then(passed => {
          if (!passed) {
            alert("Login failed. Check your email and password.");
            throw Error("User credentials invalid");
          }
          dispatch(setUserSession(res.data));
          viewSwitcher("Home");
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Login</Text>
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          inputMode="email"
          onChangeText={newText => setEmail(newText)}
          onSubmitEditing={() => userAuth(email, password)}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={newText => setPassword(newText)}
          onSubmitEditing={() => userAuth(email, password)}
          secureTextEntry={true}
        />
        <Pressable
          style={styles.submitButton}
          onPress={() => userAuth(email, password)}
        >
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
