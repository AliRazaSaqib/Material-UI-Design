/** @format */
import SideMenu from "./components/menu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Shirt from "./components/Products/catagories/Shirt";
import Loader from "./components/spinner/Loader";
import Footer from "./components/menu/Footer";

function App() {
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
            <Route path="/" exact element={<SideMenu />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
