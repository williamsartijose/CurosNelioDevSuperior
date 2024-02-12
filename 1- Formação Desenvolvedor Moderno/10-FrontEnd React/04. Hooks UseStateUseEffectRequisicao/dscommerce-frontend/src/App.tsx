import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Cart from "./routes/ClientHome/Cart";
import Catalog from "./routes/ClientHome/Catalog/index";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import { useState } from "react";
import { ContextCartCount } from "./utils/context-cart";

export default function App() {
  //Prover o contexto globalmente
  //Instanciar um useState em App.tsx
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{ContextCartCount, setContextCartCount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}
