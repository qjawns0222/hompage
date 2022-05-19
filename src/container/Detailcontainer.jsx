import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../Components/Detail";
import store from "../context/store";

export default function Detailcontainer() {
  const time = new Date();

  const times = time.getHours() + ":" + time.getMinutes();
  const navigate = useNavigate();
  const value = useContext(store);

  const { id } = useParams();

  const filter = value.data.find((p) => p.id.toString() === id);

  const [odeng, setOdeng] = useState(filter.odeng);

  const [gimbab, setGimbab] = useState(filter.gim);
  const [addition, setAddition] = useState(filter.addition);

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

    filter.gim = gimbab;
    filter.odeng = odeng;
    filter.addition = addition;
    filter.date = times;
    alert("변경되었습니다.");
    navigate("/order");
  };

  return (
    <Detail
      value={value}
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
      user={filter.user}
    />
  );
}
