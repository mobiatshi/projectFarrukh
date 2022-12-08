import {CiLocationOn} from "react-icons/ci"
import {BsFillTelephoneFill,BsArrowRight} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

const btnArrow = < BsArrowRight/>
const navElements =
[
    {icon:<CiLocationOn/>,text:"4864 Carter Meadows Apt. 756"},
    {icon:<BsFillTelephoneFill/>, text:"+7 509-412-4661 (24/7)"},
    {icon:<MdEmail/>, text:"fleurdeselhotel@gmail.com"},

]
const langOptions = ["ENG","FR","DE"]
const mainNavBar = ["Home","Room Rates","Events","Gallery","Pages","Blog","Contact","About Us"]

export {navElements,langOptions,mainNavBar,btnArrow}