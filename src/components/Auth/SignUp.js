/** @format */

import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress, Typography } from "@material-ui/core";
import "../../components/item.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/slices/Auth";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email required!"),
    name: Yup.string().required("User Name required!"),
    password: Yup.string().required("Password Required!"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      setTimeout(() => {
        dispatch(saveUser(values));
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ margin: "100px 8px" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ submitForm, isSubmitting, values }) => (
          <Form noValidate className="form">
            <Typography variant="h4">Sign Up</Typography>
            <LockOpenIcon className="loginIcon" />

            <Field
              type="text"
              label="User Name"
              name="name"
              variant="outlined"
              fullWidth
              component={TextField}
            />

            <br />
            <br />

            <Field
              type="email"
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              component={TextField}
            />

            <br />
            <br />

            <Field
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              component={TextField}
            />

            <br />
            <br />
            <Typography className="register">
              {" "}
              <Link to="/">Login Now!</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isSubmitting}
              style={{ marginTop: "12px" }}
            >
              Sign Up
            </Button>

            <br />
            <br />
            {loading ? <LinearProgress /> : null}
          </Form>
        )}
      />
    </div>
  );
}
