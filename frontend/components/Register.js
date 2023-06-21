//REACT
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import bcrypt from "react-native-bcrypt";

//NETWORKING
import tunnelURL from "../backend_tunnel";
import axios from "axios";

//STATE
import { setUserSession } from "../redux/actions";
import { useDispatch } from "react-redux";

//COMPONENTS
import styles from "../styles/register";

//FUNCTION DECLARATION
export default function Login({ navigation }) {
  //STATEs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //Redirects to new page
  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };

  // axios request to add user to db
  const registerUser = (firstName, lastName, email, hash) => {
    if (!email.includes("@")) {
      setLoading(false);
      return alert("Email must be formatted correctly");
    }

    const userInfo = { firstName, lastName, email: email.toLowerCase(), hash };

    for (let key in userInfo) {
      if (userInfo[key] === "") {
        setLoading(false);
        return alert("Please fill in all fields");
      }
    }

    axios.post(`${tunnelURL}/users/register`, userInfo).then((res) => {
      if (!res.data) {
        alert("User with this email already exists");
        setLoading(false);
      } else {
        dispatch(setUserSession(res.data));
        viewSwitcher("Home");
      }
    });
  };
  //ensures user password matched password confirmation feild before creating user
  const checkPasswords = (password, passwordConfirm) => {
    setLoading(true);
    if (!password || password !== passwordConfirm) {
      setLoading(false);
      return alert("Please ensure your passwords match and are not blank");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    registerUser(firstName, lastName, email, hash);
  };

  //RETURN
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Register</Text>
        <Text>First Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="first name"
          onChangeText={(newText) => setFirstName(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
        />
        <Text>Last Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="last name"
          onChangeText={(newText) => setLastName(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          inputMode="email"
          onChangeText={(newText) => setEmail(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={(newText) => setPassword(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
          secureTextEntry={true}
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="confirm password"
          onChangeText={(newText) => setPasswordConfirm(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
          secureTextEntry={true}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <Pressable
            style={styles.submitButton}
            onPress={() => {
              checkPasswords(password, passwordConfirm);
            }}
          >
            <Text>Submit</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
