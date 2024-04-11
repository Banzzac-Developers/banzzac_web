import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import "@styles/reset.css";
import "@styles/index.css";
import "@/assets/fonts/web/static/pretendard.css";
import "@/assets/fonts/web/static/pretendard-subset.css";
import "@/assets/fonts/web/variable/pretendardvariable.css";
import App from "@/App.tsx";
import { worker } from "@/mocks/browser.ts";

const enableMocking = async () => {
  if (import.meta.env.VITE_NODE_ENV === "mocking") {
    await worker.start();
  }
};

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
      <App />
    </RecoilRoot>,
  ),
);
