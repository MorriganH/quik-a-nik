//REDUX
import { Provider, useDispatch } from "react-redux";
import { Store } from "./redux/store";
import QuikanikStack from "./components/QuikanikStack";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NDgmwLv74N28uF2MxWf6liIv4DqMJcIagTtcT1BAymIJEkX1gaky4i9nLLfmfALffHmN32aiXmRrSiPAcmn0wOP00ONBP6Dfx"
);
export default function App() {

  return (
    <Elements stripe={stripePromise}>
      <Provider store={Store}>
        <QuikanikStack />
      </Provider>
    </Elements>
  );
}
