import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ResetPass from "./components/ResetPass/ResetPass";
import SignUp from "./components/SignUp/SignUp";

export const MyService = createContext();
function App() {
  const [service, setService] = useState([]);
  return (
    <div>
      <MyService.Provider value={[service, setService]}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          ></Route>
          <Route path="/reset-password" element={<ResetPass />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </MyService.Provider>
    </div>
  );
}

export default App;
