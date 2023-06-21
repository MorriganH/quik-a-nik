//REACT
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";

//NETWORKING
import tunnelURL from "../backend_tunnel";
import axios from "axios";

//STATE
import { setUserSession } from "../redux/actions";
import { useDispatch } from "react-redux";

//COMPONENTS
import bcrypt from "bcryptjs";

//SECURITY
import styles from "../styles/login";


//FUNCTION DEFINITION
export default function Login({ navigation }) {

//STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  //CHANGES VIEW
  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };

  // axios request to verify user info
  const userAuth = function (email, password) {
    if (!email.includes("@")) {
      return alert("Email must be formatted correctly");
    }

    const input = { email: email.toLowerCase(), password };

    setLoading(true);

    axios
      .post(`${tunnelURL}/users/login`, { email: input.email })
      .then(res => {
        if (!res.data) {
          alert("Login failed. Check your email and password.");
          setLoading(false);
          throw Error("User credentials invalid");
        }

        bcrypt.compare(password, res.data.password).then(passed => {
          if (!passed) {
            alert("Login failed. Check your email and password.");
            setLoading(false);
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

  //RETURN
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
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <Pressable
            style={styles.submitButton}
            onPress={() => {
              userAuth(email, password);
            }}
          >
            <Text>Submit</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
