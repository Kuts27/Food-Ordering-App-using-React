import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
const [btnNameReact, setBtnNameReact] = useState("Login")

const onlineStatus = useOnlineStatus()
const {loggedInUser} = useContext(UserContext)
console.log(loggedInUser)

console.log(onlineStatus)

//if no dependency array => useEffect is called on every render
// if dependecy array is empty[] => useeffect is called on initial render(just once)
// if dependency array is [btnNameReact] => called everytime btnNameReact is updated
 
useEffect(()=>{console.log("useEffect called")},[btnNameReact]) // arguments as callback function and dependecy array

const cartItems = useSelector((store) => store.cart.items)
console.log(cartItems)

    return (
        <div className="header h-24 flex justify-between bg-gray-900 text-white lg:bg-black ">
            <div className="logo w-24 p-2">
                <img src={LOGO_URL}></img>
            </div>

            <div className="nav-items flex items-center">
                <ul className="flex m-4 p-2 gap-6">
                    <li> OnlineStatus: {onlineStatus ? "🟢"  : "Offline"} </li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}> About</Link></li>
                    <li><Link to={"/contact"}> Contact Us</Link></li>
                    <li><Link to={"/grocery"}> Grocery</Link></li>
                    <li><Link to={"/cart"}>Cart({cartItems.length} items)</Link></li>   
                    
                    <button className="login" onClick={()=>{
                        //Toggle functionality
                        btnNameReact =="Login"? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                    <li className=" text-green-400">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}    

export default Header;