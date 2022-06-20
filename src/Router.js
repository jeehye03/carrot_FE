import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import RegisterLocation from "./pages/RegisterLocation";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ProfileLocation from "./pages/ProfileLocation";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/location" element={<RegisterLocation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:postid" element={<Detail />} />
        <Route path="/profile/location" element={<ProfileLocation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
