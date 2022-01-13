/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import ClearIcon from "@material-ui/icons/Clear";
import { deleteItems } from "../../redux/slices/AddToCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const noOfItems = [
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];

const ViewCart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getItemsDetails = useSelector((state) => state.cartItems);
  let totalPrice = 0;
  getItemsDetails.newCart.forEach((element) => {
    totalPrice += element.price;
  });

  const [currency, setCurrency] = useState();
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  // delete items
  const handleDelete = (el) => {
    let filteredItem = getItemsDetails.newCart.filter(
      (item, index) => item.id !== el.id
    );
    dispatch(deleteItems({ data: [...filteredItem] }));
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4">Shopping Cart</Typography>
      {getItemsDetails.newCart.map((el) => (
        <Paper className={classes.paper} style={{ marginTop: "34px" }}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={el.image} />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid
                item
                xs
                container
                direction="column"
                spacing={2}
                className="quantity"
              >
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {el.name}
                  </Typography>

                  <form noValidate autoComplete="off">
                    <div>
                      <TextField
                        id="filled-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        variant="outlined"
                      >
                        {noOfItems.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </form>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  ></Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{el.price}Pkr</Typography>
              </Grid>
            </Grid>
            <ClearIcon className="clearIcon" onClick={() => handleDelete(el)} />
          </Grid>
        </Paper>
      ))}

      <Divider style={{ marginTop: "34px" }} />
      <Paper
        spacing={2}
        style={{
          marginTop: "34px",
          float: "right",
          padding: "34px",
          textAlign: "center",
        }}
      >
        <Typography>
          <span style={{ fontWeight: "bold" }}>Total:</span> {totalPrice}Pkr
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "12px" }}
        >
          <Link to="/checkout" className="checkout">
            Checkout
          </Link>
        </Button>
      </Paper>
    </div>
  );
};

export default ViewCart;
