import { useState } from "react";
import { useEffect } from "react";


const useRestaurantMenu=(resId)=>{

    useEffect(()=>{
         fetchMenu();
     }, []);
    
     const [resInfo, setResInfo] = useState(null)

     const fetchMenu= async() =>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)
         //const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=552563&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)
         //const data = await fetch({MENU_API})
        const json = await data.json()
        console.log(json)
         // 733629
        setResInfo(json)
     }

    return resInfo
}

export default useRestaurantMenu