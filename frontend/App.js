
//REDUX
import { Provider, useDispatch} from "react-redux";
import { Store } from "./redux/store";
import QuikanikStack from "./components/QuikanikStack";




export default function App() {
  return (
    <Provider store={Store}>
  <QuikanikStack/>
      </Provider>
    );
 
}

