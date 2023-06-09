import { useState } from "react";

export default function App() {
  let [qty, setQty] = useState(1)

  const increment = function() {
    setQty(qty + 1)
  };
  const decrement = function() {
    setQty(qty - 1)
  };
}
