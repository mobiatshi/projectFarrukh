import React from "react";
import mainNavImage from "../assets/img02.png"
import { navElements,langOptions ,mainNavBar} from "./datastore";
export default function NavBar()
{
    console.log(navElements,"in navbar")
    return(
        <>
            <div className="w-full h-40 flex flex-wrap absolute -inset-y-0 pl-[7%] pr-[7%]">
                <div className=" flex justify-between md:h-16 w-3/4 static pr-28 ">
                    {
                        navElements.map(ele=>
                            {
                                return <span className="flex justify-between items-center text-white text-md">{ele.icon} &nbsp;<p>{ele.text}</p></span>
                            })
                    }
                </div>
                <div className="  md:h-16 w-1/4 static flex justify-evenly items-center pl-48">
                    {
                        langOptions.map(lang=>
                            {
                                return <p className="text-white text-sm font-bold">{lang}</p>
                            })

                    }
                </div>
                
                <div className="flex bg-white  md:h-20 w-full static top-[-100px] z-2">
                    <div className="h-20 w-1/5  flex justify-center items-center bg-center" style={{backgroundImage:`url(${mainNavImage})`,backgroundRepeat:"no-repeat",backgroundPosition:"50px 20px"}}>
                    </div>
                    <div className="h-20 w-4/5 flex justify-between items-center pl-32 pr-24">
                        {
                            mainNavBar.map(navEle=>
                                {
                                    return <p>{navEle}</p>
                                })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}