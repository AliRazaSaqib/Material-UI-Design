/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IsAuth({ authorized }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authorized) {
      navigate("/");
    } else console.log("There is an issue with the route!");
  }, []);
  return <div></div>;
}
