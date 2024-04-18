import React from "react";
import CommentsProps from "./CommentsProps";
import Icon1 from "../../../assets/image/Vectors.png";

export default function Comments(props) {
  return (
    <>
      <section className="next-section">
        <div className="container">
          <div className="title">Our happy customers</div>
          <div className="flex-block">
            <CommentsProps
              h5="CUSTOMER A"
              icon={Icon1}
              p="Будьте пожалуйста, добрее!"
            />
            <CommentsProps
              h5="CUSTOMER B"
              icon={Icon1}
              p=" Мы пройдём ИН ША АЛЛАХ!"
            />
            <CommentsProps
              h5="CUSTOMER C"
              icon={Icon1}
              p="Great product, highly recommended!"
            />
            <CommentsProps
              h5="CUSTOMER D"
              icon={Icon1}
              p="Great product, highly recommended!"
            />
            <CommentsProps
              h5="CUSTOMER E"
              icon={Icon1}
              p="Great product, highly recommended!"
            />
            <CommentsProps
              h5="CUSTOMER F"
              icon={Icon1}
              p="Great product, highly recommended!"
            />
          </div>
        </div>
      </section>
    </>
  );
}
