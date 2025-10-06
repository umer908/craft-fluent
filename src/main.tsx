import ReactDOM from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import App from "./App";
import "./index.css"; // keep your styles if any

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);
