import React, { useState } from "react";
import Input from "../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAccount, loginUser } from "../redux/actions";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      address: "",
      username: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      username: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      address: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      if (values.username.length > 0) {
        const newUser = {
          email: values.email,
          username: values.username,
          password: values.password,
          name: {
            firstname: "john",
            lastname: "doe",
          },
          address: {
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
            city: "kilcoole",
            street: "new road",
            number: 7682,
            zipcode: "12926-3874",
          },
          phone: values.phone,
        };
        if (newUser.email !== "")
          dispatch(addUserAccount(newUser, dispatch, navigate));
      }
    },
  });

  const handleSubmit = () => {};

  return (
    <div>
      <h1>Register</h1>
      <section>
        <form className="infoform" onSubmit={formik.handleSubmit}>
          <label> Email </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.errors.email && (
            <p className="errorMsg"> {formik.errors.email} </p>
          )}

          <label> Username </label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your username"
          />
          {formik.errors.username && (
            <p className="errorMsg"> {formik.errors.username} </p>
          )}

          <label> Password </label>
          <Input
            type="text"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.errors.password && (
            <p className="errorMsg"> {formik.errors.password} </p>
          )}

          <label> Name </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your name"
          />
          {formik.errors.name && (
            <p className="errorMsg"> {formik.errors.name} </p>
          )}

          <label>Address </label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            placeholder="Enter your phone numbers"
          />
          {formik.errors.address && (
            <p className="errorMsg"> {formik.errors.address} </p>
          )}

          <label>phone </label>
          <Input
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Enter your phone numbers"
          />
          {formik.errors.phone && (
            <p className="errorMsg"> {formik.errors.phone} </p>
          )}
          <button type="submit" onSubmit={handleSubmit}>
            {" "}
            Continue{" "}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
