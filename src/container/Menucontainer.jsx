import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import store from "../context/store";
export default function Menucontainer() {
  const time = new Date();
  const times = time.getHours() + ":" + time.getMinutes();
  const navigate = useNavigate();
  const value = useContext(store);
  const [odeng, setOdeng] = useState(0);
  console.log(value.data.length);
  const [gimbab, setGimbab] = useState(0);
  const [addition, setAddition] = useState("");
  const gimminus = () => {
    setGimbab(gimbab - 1);
  };
  const gimplus = () => {
    setGimbab(gimbab + 1);
  };
  const odengminus = () => {
    setOdeng(odeng - 1);
  };
  const odengplus = () => {
    setOdeng(odeng + 1);
  };
  const gimchange = (e) => {
    setGimbab(e.target.value);
  };
  const odengchange = (e) => {
    setOdeng(e.target.value);
  };
  const additionchange = (e) => {
    setAddition(e.target.value);
  };
  const addorder = () => {
    if (gimbab === 0 && odeng === 0) {
      alert("주문을 추가해주세요");
      return;
    }
    if (value.id <= 10000) {
      value.id = value.data[value.data.length - 1].id + 1;
    } else {
      value.id = 1;
    }

    value.data.push({
      id: value.id,
      gim: gimbab,
      odeng: odeng,
      addition: addition,
      user: value.user,
      date: times,
    });
    alert("순번을 기억해주세요\n 순번:" + value.id);

    setGimbab(0);
    setOdeng(0);
    setAddition("");
    navigate("/order");
  };
  return (
    <Menu
      odeng={odeng}
      gimbab={gimbab}
      addition={addition}
      gimminus={gimminus}
      gimplus={gimplus}
      odengminus={odengminus}
      odengplus={odengplus}
      gimchange={gimchange}
      odengchange={odengchange}
      additionchange={additionchange}
      addorder={addorder}
      value={value}
    />
  );
}
