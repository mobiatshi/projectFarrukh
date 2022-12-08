import React from "react";
// import mainNavImage from "../assets/img02.png"
import sliderInnerImg1 from "../assets/img04.png"
import sliderInnerImg2 from "../assets/img05.png"
import { navElements, langOptions, mainNavBar } from "./datastore";
export default function TextComponent() {
    console.log(navElements, "in navbar")
    return (
        <>

            <div>
                <div className="h-32 w-28" style={{ backgroundImage: `url(${sliderInnerImg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: "30px 10px", position: "absolute", right: "37%", top: "19%", zIndex: "" }}>
                    <p className="font-bold text-white mt-20">BIG DAY</p>
                </div>
                <div className="text-white  absolute top-[40%] ">
                    <p className="text-8xl " style={{ fontFamily:'Playfair Display,serif' }}>
                        Wedding<br /> Show
                    </p>
                    <div className=" h-20 flex flex-col justify-around  items-center">
                        <p>Sunday 1st March <br/> 11AM - 3PM <br /> </p>
                        <div className="h-1 w-12 ">
                            <img className="object-contain h-32 w-32" src={sliderInnerImg2} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}