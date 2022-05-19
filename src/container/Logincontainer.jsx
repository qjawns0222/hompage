import React, { useContext, useState } from "react";
import store from "../context/store";
import Login from "../Components/Login";
import { useNavigate } from "react-router-dom";
export default function Logincontainer() {
  const value = useContext(store);
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const idchange = (e) => {
    setId(e.target.value);
  };
  const passwordchange = (e) => {
    setPassword(e.target.value);
  };
  const login = () => {
    value.authdata.map((p) => {
      if (p.id === id && p.password === password) {
        value.login = true;
        value.user = p.id;
        setId("");
        setPassword("");
        if (p.id === "qjawns0222") {
          value.auth = true;
        } else {
          value.auth = false;
        }
      } else if (p.id !== id && p.password !== password) {
        value.idfalse = true;
      } else if (p.id === id && p.password !== password) {
        value.passwordfalse = true;
      }
      return p;
    });
    if (value.login) {
      navigate("/");
    } else if (value.passwordfalse) {
      alert("비밀번호가 틀렸습니다.");
    } else if (value.idfalse) {
      alert("비밀번호와아이디를 확인해주세요.");
    }
    value.idfalse = false;
    value.passwordfalse = false;
  };
  const loginkey = (e) => {
    if (e.charCode === 13) {
      value.authdata.map((p) => {
        if (p.id === id && p.password === password) {
          value.login = true;
          value.user = p.id;
          setId("");
          setPassword("");
          if (p.id === "qjawns0222") {
            value.auth = true;
          } else {
            value.auth = false;
          }
        } else if (p.id !== id && p.password !== password) {
          value.idfalse = true;
        } else if (p.id === id && p.password !== password) {
          value.passwordfalse = true;
        }
        return p;
      });
      if (value.login) {
        navigate("/");
      } else if (value.passwordfalse) {
        alert("비밀번호가 틀렸습니다.");
      } else if (value.idfalse) {
        alert("비밀번호와아이디를 확인해주세요.");
      }
    }
  };

  return (
    <Login
      id={id}
      password={password}
      idchange={idchange}
      passwordchange={passwordchange}
      login={login}
      loginkey={loginkey}
    />
  );
}
