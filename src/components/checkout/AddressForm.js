/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../components/item.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { saveAddress } from "../../redux/slices/Payment";

export default function AddressForm() {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    address1: Yup.string().required("Required!"),
    address2: Yup.string().required("Required!"),
    city: Yup.string().required("Required!"),
    state: Yup.string().required("Required!"),
    zip: Yup.string().required("Required!"),
    country: Yup.string().required("Required!"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(
        saveAddress({
          firstName: values.firstName,
          lastName: values.lastName,
          address1: values.address1,
          address2: values.address2,
          city: values.city,
          state: values.state,
          zip: values.zip,
          country: values.country,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ submitForm, isSubmitting, values }) => (
          <Form noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="firstName"
                  label="First name"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  type="text"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  type="text"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="city"
                  label="City"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="outlined"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  component={TextField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="country"
                  label="Country"
                  fullWidth
                  component={TextField}
                  variant="outlined"
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
