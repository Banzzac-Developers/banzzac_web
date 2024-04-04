import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import "@styles/reset.css";
import "@styles/index.css";
import "@/assets/fonts/web/static/pretendard.css";
import "@/assets/fonts/web/static/pretendard-subset.css";
import "@/assets/fonts/web/variable/pretendardvariable.css";
import App from "@/App.tsx";
import { worker } from "@/mocks/browser.ts";

if (import.meta.env.VITE_NODE_ENV === "mocking") {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);
