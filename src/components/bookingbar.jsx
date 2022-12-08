import React, { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Datepicker from "react-tailwindcss-datepicker";
// import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { MdArrowDropDown } from "react-icons/md";
import { btnArrow } from "./datastore";
export default function BookingBar() {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });
    const handleStartChange = (newValue) => {
        console.log("newValue:", newValue.startDate);
        setValue(newValue);
    }
    // const handleEndChange=(newValue)=>
    // {
    //     console.log("newValue",newValue);
    //     setValue({endDate:newValue.endDate})
    // }
    console.log(value, "my dates")
    return (
        <>
            <div className="border border-red-500  flex justify-center relative bg-white  md:h-32 w-full z-10">
                <div className="bg-white shadow-lg pl-16 pt-4 pb-4 flex items-center font-normal text-base  w-[84%] h-32 absolute top-[-60px] " style={{ fontFamily: 'Playfair Display,serif' }}>
                    <div className="myInp border-r-2 h-3/4 flex text-[#b98036] flex-wrap justify-center items-center w-[38%]">
                       <span className="pr-12  w-full flex justify-evenly">
                            <label className="pr-8 " htmlFor="Datepicker">Arrival Date</label>
                            <label htmlFor="Datepicker">Departure Date</label>
                       </span>
                        <Datepicker
                            useRange={true}
                            value={value}
                            onChange={handleStartChange}
                            primaryColor="amber"
                            showFooter={true}
                            placeholder="Select Arrival and Departure Dates"
                        />
                    </div>
                    <div className="h-3/4 flex flex-col border-l-1 border-r-2 text-[#b98036] flex-wrap justify-center items-center w-[15%]">
                    <label htmlFor="Select Box">Adults</label>
                        <select className="mySelect text-[25px] text-black w-2/4 text-center" name="" id="">
                            <option  selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="h-3/4 flex flex-col border-l-1 border-r-2 text-[#b98036] flex-wrap justify-center items-center w-[15%]">
                    <label htmlFor="Select Box">Children</label>
                        <select className=" mySelect text-[25px] text-black w-2/4 text-center " name="" id="" >
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="border-l-1 h-3/4 w-[28%] pl-8 flex justify-center items-center">
                        <button className="bg-[#b98036] h-3/4  font-sans w-3/4 text-white flex justify-evenly font-bold  items-center">Check Availability   <span className="text-2xl">{btnArrow}</span></button>

                    </div>
                </div>

            </div>

        </>
    )
}