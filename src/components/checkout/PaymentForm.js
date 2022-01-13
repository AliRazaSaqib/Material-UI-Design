/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Typography, Button } from "@material-ui/core";

export default function PaymentForm() {
  const initialValues = {
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required!"),
    cardNumber: Yup.string().required("Required!"),
    expiryDate: Yup.string().required("Required!"),
    cvc: Yup.string().required("Required!"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ submitForm, isSubmitting, values }) => (
          <Form noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  type="text"
                  name="name"
                  label="Name on card"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  type="text"
                  name="cardNumber"
                  label="Card number"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  type="text"
                  name="expiryDate"
                  label="Expiry date"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  type="cvv"
                  name="cvc"
                  label="CVV"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Button variant="outlined" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Grid>
          </Form>
        )}
      />
    </>
  );
}
