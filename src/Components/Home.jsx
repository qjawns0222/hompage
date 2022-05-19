import React from "react";
import Form from "./Form";
import style from "./css/Home.module.css";
import { Link } from "react-router-dom";
export default function Home({ value, logout }) {
  return (
    <Form>
      <h1 className={style.name}>천생슈퍼</h1>
      <div className={style.image}>
        <img
          className={style.img}
          src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88%20%EB%A1%9C%EA%B3%A0.png"
          alt="메인"
        />
      </div>
      <div className={style.description}>
        30년 전동의 김밥 가게
        <br />
        김밥과 오뎅이 주 메뉴이다
      </div>
      {value.login === true ? (
        <button className={style.login} onClick={logout}>
          로그아웃
        </button>
      ) : (
        <Link to={"/login"}>
          <button className={style.login}>로그인</button>
        </Link>
      )}
    </Form>
  );
}
