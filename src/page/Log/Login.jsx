import React, { useRef, useState } from "react";
import axios from "axios";
import useLoginAuth from "./store/LoginStore";

export default function Login() {
  const { setToken } = useLoginAuth();

  const elName = useRef();
  const elPassword = useRef();

  const handleForm = (evt) => {
    evt.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: elName.current.value,
        password: elPassword.current.value,
      })
      .then(function (response) {
        setToken(response.data);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error occurred while logging in. Please try again.");
      });

      
  };
  return (
    <section className="login">
      <div className="container">
        <div className="mains">
        <form onSubmit={handleForm}>
          <h1>Login</h1>
          <input type="text" ref={elName} />
          <input type="password" ref={elPassword} />
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
    </section>
  );
}
