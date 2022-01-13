/** @format */

import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress, Typography } from "@material-ui/core";
import "../../components/item.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "./useAuth";

export default function Login() {
  const [isAuth, login] = useAuth(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log("loading", loading);
  const { email, password } = useSelector((state) => state.auth.myProfile);
  const token = "7jsgdsyywdkas7kagd8skd8ss799";
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email required!"),
    password: Yup.string().required("Password Required!"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      if (values.email === email && values.password === password) {
        localStorage.setItem("Token", token);
        setLoading(true);
        setTimeout(() => {
          login();
          navigate("/products");
        }, 2000);
      } else console.log("error");
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
            <Typography variant="h4">Login</Typography>
            <LockOpenIcon className="loginIcon" />

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
            <Typography className="register login">
              <Link to="/signup">Register Now!</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isSubmitting}
              style={{ marginTop: "12px" }}
            >
              Login
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
