import React, { useEffect } from "react";
import useLoginAuth from "../Log/store/LoginStore"; 
import Private from "../Private/Private";
import Login from "../Log/Login";

export default function Public() {
  const { token } = useLoginAuth();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token"); 
    }
  }, [token]);
  


  if (token) {
    return <Private />;
  } 
  return <Login />;
}
