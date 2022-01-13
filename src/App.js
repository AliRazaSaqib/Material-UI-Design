/** @format */
import SideMenu from "./components/menu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/spinner/Loader";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import useAuth from "./components/Auth/useAuth";
import NotFound from "./components/404/NotFound";
import Checkout from "./components/checkout/Checkout";

function App() {
  const [isAuth, login] = useAuth(false);
  const [spin, setSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {spin ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/checkout" exact element={<Checkout />} />
            {login ? (
              <Route path="/products" exact element={<SideMenu />} />
            ) : (
              <Login />
            )}

            <Route path="/:pageName" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
