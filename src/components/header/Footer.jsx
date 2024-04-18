import React from "react";
import { FaHome } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    const header = document.getElementById("header");
    header.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <footer className="footer" onClick={scrollToTop}>
        <div className="container">
          <div className="footer-main">
            <button className="logos">
              <FaHome className="home" />
              CHOP4GODIES
            </button>
            <div className="information">
              <h4>#footerwithoutadesign © 2024 Dosio Dosev.</h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
