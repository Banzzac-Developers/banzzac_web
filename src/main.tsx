import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { worker } from "./mocks/browser.ts";
import { RecoilRoot } from "recoil";

if (import.meta.env.VITE_NODE_ENV === "mocking") {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);
