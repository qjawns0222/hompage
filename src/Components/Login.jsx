import React from "react";
import { Link } from "react-router-dom";
import style from "./css/Login.module.css";
import Form from "./Form";

export default function Login({
  id,
  password,
  idchange,
  passwordchange,
  login,

  loginkey,
}) {
  return (
    <Form>
      <div className={style.loginbox}>
        <div className={style.inputbox}>
          <div className={style.option}>
            <div className={style.name}>아이디</div>:
            <div className={style.value}>
              <input
                type="text"
                value={id}
                className={style.id}
                placeholder="아이디를 입력해주세요"
                onChange={idchange}
                onKeyPress={loginkey}
              />
            </div>
          </div>
          <div className={style.option}>
            <div className={style.name}>비밀번호</div>:
            <div className={style.value}>
              <input
                type="password"
                value={password}
                placeholder="비밀번호 입력해주세요"
                className={style.password}
                onChange={passwordchange}
                onKeyPress={loginkey}
              />
            </div>
          </div>
        </div>
        <div className={style.buttonbox}>
          <button className={style.login} onClick={login}>
            로그인
          </button>
          <Link to={"/create"}>
            <button className={style.makecount}>회원가입</button>
          </Link>
        </div>
      </div>
    </Form>
  );
}
