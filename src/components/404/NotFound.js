/** @format */

import React, { useEffect } from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const NotFound = ({ notFound }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!notFound) {
      navigate("/:pageName");
    } else {
      navigate("/");
    }
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">404 Error</Typography>
      <ErrorOutlineIcon style={{ fontSize: "7rem" }} />
    </div>
  );
};

export default NotFound;
