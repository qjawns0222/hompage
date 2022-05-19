import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./css/Form.module.css";
export default function Form({ children }) {
  const { pathname } = useLocation();

  return (
    <div>
      <div className={style.nav}>
        <div className={style.mainnav}>
          <div className={pathname === "/" ? style.active : style.home}>
            <Link to="/">메인화면</Link>
          </div>
          <div className={pathname === "/menu" ? style.active : style.buy}>
            <Link to="/menu">구매</Link>
          </div>
          <div
            className={
              pathname === "/order" || pathname.length >= 8
                ? style.active
                : style.order
            }
          >
            <Link to="/order">order</Link>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
