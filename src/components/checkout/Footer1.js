/** @format */

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Footer1 = () => {
  return (
    <div className="body-main_container">
      <AppBar position="static" color="primary" className="app-bar">
        <Container maxWidth="md" className="footer-body">
          <Toolbar className="footer1">
            <Typography variant="body1" color="inherit">
              © 2019 Muhammad Ali Raza
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer1;
