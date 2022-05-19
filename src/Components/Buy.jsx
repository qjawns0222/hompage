import React from "react";
import Form from "./Form";
import style from "./css/Buy.module.css";
import { Link } from "react-router-dom";

export default function Buy({ value, delvalue }) {
  return (
    <Form>
      <div className={style.orderboxs}>
        <div className={style.orderbox}>
          <div className={style.id}>순번</div>
          <div className={style.gim}>김밥</div>
          <div className={style.odeng}>오뎅</div>
          <div className={style.addition}>요청사항</div>
          <div className={style.date}>시간</div>
          <div className={style.button}>삭제</div>
        </div>
        <hr className={style.line} />
        {value.data.map((p) => {
          return (
            <div key={p.id} className={style.data}>
              <div className={style.orderbox}>
                <div className={style.id}>
                  <Link to={`/detail${p.id}`}>{p.id}</Link>
                </div>
                <div className={style.gim}>
                  <Link to={`/detail${p.id}`}>{p.gim}</Link>
                </div>
                <div className={style.odeng}>
                  <Link to={`/detail${p.id}`}>{p.odeng}</Link>
                </div>
                <div className={style.addition}>
                  <Link to={`/detail${p.id}`}>{p.summary}</Link>
                </div>
                <div className={style.date}>
                  <Link to={`/detail${p.id}`}>{p.date}</Link>
                </div>
                <div className={style.button}>
                  <button
                    id={p.id}
                    onClick={delvalue}
                    className={
                      value.auth || p.user === value.user
                        ? style.delete
                        : style.disable
                    }
                  >
                    삭제
                  </button>
                </div>
              </div>
              <hr className={style.line} />
            </div>
          );
        })}
      </div>
    </Form>
  );
}
