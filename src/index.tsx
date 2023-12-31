import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom'
import {
  BrowserRouter
} from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
