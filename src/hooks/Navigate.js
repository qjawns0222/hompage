import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import store from "../context/store";

export default function Tran() {
  const navigate = Navigate();
  const value = useContext(store);
  const { id } = useParams();
  useEffect(() => {
    console.log(value.data.find((p) => p.id === id) == null);
    navigate("/order");
  }, [id, navigate, value]);
}
