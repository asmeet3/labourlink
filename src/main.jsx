import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter } from "react-router-dom";
import App from "./Pages/App";
import { FirebaseProvider } from "./context/Firebase";
import "./style/Custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseProvider>
  </React.StrictMode>
);
