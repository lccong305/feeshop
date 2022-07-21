import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { getUser } from "../redux/actions";

const Profile = () => {
  const { currentUser, isFetching, error } = useSelector(
    (state) => state.auth.login
  );
  const dispatch = useDispatch();

  const { getUserFetching, getUserData, getUserError } = useSelector(
    (state) => state.user.getUser
  );

  // const getUser = async () => {
  //   try {
  //     let token = currentUser.token;
  //     console.log(token);
  //     const res = await axios.get(
  //       "https://apieshopbasic.herokuapp.com/User/Profile",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // getUser();
  useEffect(() => {
    if (!currentUser) return;
    getUser(currentUser?.token, dispatch);
  }, []);
  console.log(getUserData);

  return <div>profile</div>;
};

export default Profile;
