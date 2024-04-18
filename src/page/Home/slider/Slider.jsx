import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image1 from "../../../assets/image/woman-sale.png";
import Image2 from "../../../assets/image/sale3.png";
import Image3 from "../../../assets/image/Image3.jpg";

export default function Slider() {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Image1} alt="" style={{ imageRendering: "auto", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} alt="" style={{ imageRendering: "auto", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="" style={{ imageRendering: "auto", objectFit: "cover" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
