//REDUX
import { Provider, useDispatch } from "react-redux";
import { Store } from "./redux/store";
import QuikanikStack from "./components/QuikanikStack";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {  useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { LogBox } from "react-native";
import stripePublishableKey from "./stripe_publishable";

const stripePromise = loadStripe(
  stripePublishableKey
);
export default function App() {
  LogBox.ignoreAllLogs();

const [fontsLoaded] = useFonts({
  

  Pacifico_400Regular, DMSans_400Regular

})
  return (
    <Elements stripe={stripePromise}>
      <Provider store={Store}>
        <QuikanikStack />
      </Provider>
    </Elements>
  );
}
