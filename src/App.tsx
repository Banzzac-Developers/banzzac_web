import ModalRenderer from "@components/Modal/ModalRenderer";
import Chat from "@pages/Chat";
import ChatRoom from "@pages/Chat/ChatRoom";
import NotFound from "@pages/Error/NotFound";
import Friends from "@pages/Friends";
import Login from "@pages/Login";
import Matching from "@pages/Matching";
import Profile from "@pages/Profile";
import ProfileEdit from "@pages/Profile/Edit";
import Search from "@pages/Search";
import Signup from "@pages/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { modalState } from "./recoil";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path="/" element={<div>splash</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chat/:id" element={<ChatRoom />} />
      <Route path="/search" element={<Search />} />
      <Route path="/matching" element={<Matching />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
    </Route>,
  ),
);

function App() {
  const modals = useRecoilValue(modalState);

  return (
    <>
      {modals.length !== 0 && <ModalRenderer />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
