/** @format */

import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Typography } from "@material-ui/core";

const NotFound = () => {
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
