import React from "react";
import Form from "./Form";
import style from "./css/Menu.module.css";

export default function Menu({
  gimbab,
  odeng,
  addition,
  gimminus,
  gimplus,
  odengminus,
  odengplus,
  odengchange,
  gimchange,
  additionchange,
  addorder,
  value,
  user,
}) {
  return (
    <Form>
      <div
        className={
          value.auth || user === value.user ? style.form : style.formnone
        }
      >
        <div className={style.menus}>
          <div className={style.item}>
            <div className={style.imgs}>
              <img
                width={200}
                className={style.img}
                src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88%20%EB%A1%9C%EA%B3%A0.png"
                alt="#"
              />
            </div>
            <div className={style.name}>김밥</div>
            <div className={style.price}>2000원</div>
            <div className={style.buttons}>
              <button className={style.minus} onClick={gimminus}>
                -
              </button>
              <input
                type="number"
                onChange={gimchange}
                value={gimbab}
                className={style.menuinput}
              />
              <button className={style.plus} onClick={gimplus}>
                +
              </button>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.imgs}>
              <img
                width={200}
                className={style.img}
                src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88%20%EB%A1%9C%EA%B3%A0.png"
                alt="#"
              />
            </div>
            <div className={style.name}>오뎅</div>
            <div className={style.price}>500원</div>
            <div className={style.buttons}>
              <button className={style.minus} onClick={odengminus}>
                -
              </button>

              <input
                type="number"
                onChange={odengchange}
                value={odeng}
                className={style.menuinput}
              />

              <button className={style.plus} onClick={odengplus}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className={style.addition}>
          <h3 className={style.title}>요청 사항</h3>
          <hr className={style.hr}></hr>
          <div className={style.requests}>
            <textarea
              value={addition}
              onChange={additionchange}
              className={style.request}
              placeholder="요청사항을 입력하세요"
            />
          </div>
        </div>

        <div className={style.orders}>
          <button className={style.order} onClick={addorder}>
            주문
          </button>
        </div>
      </div>
    </Form>
  );
}
