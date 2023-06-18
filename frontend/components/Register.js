import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  LogBox,
} from "react-native";
import tunnelURL from "../backend_tunnel";
import axios from "axios";
import { setUserSession } from "../redux/actions";
import { useDispatch } from "react-redux";
import bcrypt from "react-native-bcrypt";
import styles from "../styles/register";

export default function Login({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  LogBox.ignoreAllLogs();

  const dispatch = useDispatch();

  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };

  // axios request to add user to db
  const registerUser = (firstName, lastName, email, hash) => {
    const userInfo = { firstName, lastName, email: email.toLowerCase(), hash };
    for (let key in userInfo) {
      if (userInfo[key] === "") {
        setLoading(false);
        return alert("Please fill in all fields");
      }
    }

    axios.post(`${tunnelURL}/users/register`, userInfo).then(res => {
      if (!res.data) {
        alert("User with this email already exists");
        setLoading(false);
      } else {
        dispatch(setUserSession(res.data));
        viewSwitcher("Home");
      }
    });
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Register</Text>
        <Text>First Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="first name"
          onChangeText={newText => setFirstName(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
        />
        <Text>Last Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="last name"
          onChangeText={newText => setLastName(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          inputMode="email"
          onChangeText={newText => setEmail(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={newText => setPassword(newText)}
          onSubmitEditing={() => checkPasswords(password, passwordConfirm)}
          secureTextEntry={true}
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="confirm password"
          onChangeText={newText => setPasswordConfirm(newText)}
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
