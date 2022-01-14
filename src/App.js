/** @format */
import SideMenu from "./components/menu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/spinner/Loader";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import NotFound from "./components/404/NotFound";
import Checkout from "./components/checkout/Checkout";
import { useSelector } from "react-redux";

function App() {
  const [spin, setSpin] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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

            {isAuthenticated ? (
              <>
                <Route path="/products" exact element={<SideMenu />} />
                <Route path="/checkout" exact element={<Checkout />} />
              </>
            ) : (
              <>
                <Route path="/" exact element={<Login />} />
              </>
            )}

            <Route path="/:pageName" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
