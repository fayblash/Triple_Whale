import React from "react";
import ReactDOM from "react-dom";
import "@shopify/polaris/build/esm/styles.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import App from "./App";

function WrappedApp() {
  return (
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <App />
      </AppProvider>
    </Provider>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById("root"));
