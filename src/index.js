import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("@scallion-stallion/guido").then((v) => v.run());
  import("@scallion-stallion/guido/style.css");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
