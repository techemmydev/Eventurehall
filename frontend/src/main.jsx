import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie"; // ✅ Import CookiesProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      {" "}
      {/* ✅ Wrap everything inside CookiesProvider */}
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
