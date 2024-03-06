import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import {injectStore} from "./setting/our_axios.ts";
injectStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>
);
