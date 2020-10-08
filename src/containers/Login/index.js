import React, { useEffect, useState } from "react";
import LoginUI from "../../layout/Login";
import useForm from "./useForm";

const LoginComponent = () => {
  return <LoginUI form={useForm()} />;
};

export default LoginComponent;
