import React from "react";
// import { FaRegStar } from "react-icons/fa6";

export default function CommentsProps(props) {
  return (
    <>
      <div className="cards">
        <div className="flex">
          <div className="right">
            <div className="photo"></div>
            <h5>{props.h5}</h5>
          </div>
          <div className="icons">
            <div>
              <img className="img" src={props.icon} alt="" />
            </div>
          </div>
        </div>
        <div className="text">
          <p className="subtitle">{props.p}</p>
        </div>
      </div>
    </>
  );
}
