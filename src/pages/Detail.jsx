import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form";
import Detailcontainer from "../container/Detailcontainer";
import store from "../context/store";

export default function Detail() {
  const navigate = useNavigate();
  const value = useContext(store);
  const { id } = useParams();
  console.log(value.data.find((p) => p.id.toString() === id) !== null);
  useEffect(() => {
    if (value.data.find((p) => p.id.toString() === id) === null) navigate("/");
  });
  if (value.data.find((p) => p.id.toString() === id) !== null) {
    return (
      <div>
        <Detailcontainer />
      </div>
    );
  } else {
    return <Form>오류입니다.</Form>;
  }
}
