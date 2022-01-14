/** @format */

import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  }

  // function logout() {
  //   setTimeout(() => {
  //     setIsAuth(false);
  //   }, 1000);
  //   console.log("loged Out");
  // }
  return [isAuth, login];
}
