import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess, useAxios } from "../utils";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "xyz",
    lastName: "abc",
    email: "",
    password: "",
  });
  const [userName, setUserName] = useState("User");

  //Login
  const {
    response: responseLogin,
    error: errorLogin,
    operation: operationLogin,
  } = useAxios();

  const onSubmitLogin = (e) => {
    e.preventDefault();
    operationLogin({
      method: "post",
      url: "/api/auth/login",
      headers: { accept: "*/*" },
      data: { email: formData.email, password: formData.password },
    });
  };

  useEffect(() => {
    if (responseLogin !== undefined) {
      setUserName(responseLogin.foundUser.firstName);
      notifySuccess("Login Successful");
      localStorage.setItem("cobraToken", responseLogin.encodedToken);
      setTimeout(() => {
        navigate("/products");
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseLogin]);
  useEffect(
    () => errorLogin !== "" && notifyError("Invalid Email or Password"),
    [errorLogin]
  );

  //Signup
  const {
    response: responseSignup,
    error: errorSignup,
    operation: operationSignup,
  } = useAxios();

  const onSubmitSignup = (e) => {
    e.preventDefault();
    operationSignup({
      method: "post",
      url: "/api/auth/signup",
      headers: { accept: "*/*" },
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      },
    });
  };

  useEffect(() => {
    if (responseSignup !== undefined) {
      setUserName(formData.firstName);
      notifySuccess("Signup Successful");
      localStorage.setItem("cobraToken", responseSignup.encodedToken);
      setTimeout(() => {
        navigate("/products");
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseSignup]);

  useEffect(
    () => errorSignup !== "" && notifyError("Email Already Exists"),
    [errorSignup]
  );

  //First Page load verify
  const { response: responseVerifyUser, operation: operationVerifyUser } =
    useAxios();
  useEffect(() => {
    operationVerifyUser({
      method: "post",
      url: "/api/auth/verify",
      headers: {
        accept: "*/*",
      },
      data: { encodedToken: localStorage.getItem("cobraToken") },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    responseVerifyUser !== undefined &&
      setTimeout(() => {
        setUserName(responseVerifyUser.user.firstName);
        notifySuccess(`Logged in as ${responseVerifyUser.user.firstName}`);
      }, 1000);
  }, [responseVerifyUser]);

  return (
    <AuthContext.Provider
      value={{
        formData,
        setFormData,
        onSubmitLogin,
        onSubmitSignup,
        userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
