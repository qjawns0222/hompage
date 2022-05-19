import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Components/Home";
import store from "../context/store";
export default function Homecontainer() {
  const value = useContext(store);
  const navigate = useNavigate();
  const logout = () => {
    value.login = false;
    value.auth = false;
    value.user = "";

    navigate("/");
  };

  return <Home value={value} logout={logout} />;
}
