/** @format */

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div>
      <AppBar position="static" color="primary" className="app-bar">
        <Container maxWidth="md">
          <Toolbar className="footer">
            <Typography variant="body1" color="inherit">
              © 2019 Muhammad Ali Raza
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
