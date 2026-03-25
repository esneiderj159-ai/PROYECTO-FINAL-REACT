import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritosProvider } from "./context/FavoritosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritosProvider>
    <App />
  </FavoritosProvider>
);
