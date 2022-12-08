import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
// importing images for slider
import sliderImage1 from "../assets/img06.jpg"
import sliderImage2 from "../assets/img03.jpg"
import sliderInnerImg1 from "../assets/img04.png"
import sliderInnerImg2 from "../assets/img05.png"
import NavBar from "./navbar";
import TextComponent from "./textcomponent";
import BookingBar from "./bookingbar";

export default function SwiperSlider() {
    return (
        <>

            <div className="overlay">
                <div className="overDiv z-10">
                   
                </div>
                <div className="underDiv z-0">
                    <Swiper

                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={true}

                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="bg-cover" style={{ backgroundImage: `url(${sliderImage1})`, height: "600px", backgroundSize: 'cover' }}>
                        <NavBar />
                    <TextComponent />
                            {/* <BookingBar /> */}
                        </SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${sliderImage2})`, backgroundSize: 'cover', height: '600px' }}>
                            <NavBar />
                            <TextComponent />

                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </>
    );
}
