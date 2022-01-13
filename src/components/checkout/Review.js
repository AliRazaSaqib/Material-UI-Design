/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import "../../components/item.css";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const productDetails = useSelector((state) => state.cartItems);
  const { firstName, lastName, address1, address2 } = useSelector(
    (state) => state.payment.address
  );
  const { name, cardNumber, expiryDate, cvc } = useSelector(
    (state) => state.payment.payment
  );

  let totalPrice = 0;
  productDetails.newCart.forEach((element) => {
    totalPrice += element.price;
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {productDetails.newCart.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} />
            <Typography>{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            Pkr: {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {firstName}
            {lastName}
          </Typography>
          <Typography gutterBottom>
            {address1}
            {address2}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={12}
          sm={6}
          className="paymentDetails"
        >
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container className="payment-info">
            <div>
              <Grid item xs={12}>
                <Typography gutterBottom>Name: {name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>Number: {cardNumber}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom> Date: {expiryDate}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>CVC: {cvc}</Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
