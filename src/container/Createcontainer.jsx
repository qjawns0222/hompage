import Create from "../Components/Create";
import React, { useContext, useState } from "react";
import store from "../context/store";

import { useNavigate } from "react-router-dom";
export default function Createcontainer() {
  const value = useContext(store);
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idchange = (e) => {
    setId(e.target.value);
  };
  const passwordchange = (e) => {
    setPassword(e.target.value);
  };
  const login = () => {
    if (value.authdata.find((p) => p.id === id)) {
      alert("아이디 중복입니다.");
      return;
    } else if (id === "" || password === "") {
      alert("빈칸없이 입력해주세요");
      return;
    }
    value.authdata.push({ id: id, password: password });
    navigate("/login");
  };
  const loginkey = (e) => {
    if (e.charCode === 13) {
      if (value.authdata.find((p) => p.id === id)) {
        alert("아이디 중복입니다.");
        return;
      } else if (id === "" || password === "") {
        alert("빈칸없이 입력해주세요");
        return;
      }
      value.authdata.push({ id: id, password: password });
      navigate("/login");
    }
  };
  return (
    <Create
      id={id}
      password={password}
      idchange={idchange}
      passwordchange={passwordchange}
      login={login}
      loginkey={loginkey}
    />
  );
}
