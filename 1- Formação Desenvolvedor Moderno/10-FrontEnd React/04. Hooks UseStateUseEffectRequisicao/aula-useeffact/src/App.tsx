import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {
  console.log("PASSOU NO APP ");

  const [productId, serProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("PASSOU NO UseEffect ");
    setProd(findProduct(productId));
  }, []);

  function handlerClick() {
    console.log("PASSOU NO handleClick");
  }
  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handlerClick}>Muda para o produto 2 </button>
    </>
  );
}

export default App;
