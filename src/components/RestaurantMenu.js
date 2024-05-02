import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () =>{

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId) // custom hook to get restaurant menu information

    // useEffect(()=>{
    //     fetchMenu();
    // }, []);
    
    // const [resInfo, setResInfo] = useState(null)

    // const fetchMenu= async() =>{
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)
    //     //const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=552563&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)
    //     //const data = await fetch({MENU_API})
    //     const json = await data.json()
    //     console.log(json)
    //     // 733629
    //     setResInfo(json)
    // }

    if (resInfo == null) return <Shimmer />;

    const{name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    console.log(categories)

    return(
        <div className=" text-center menu m-4 p-4">
            <h1 className="font-bold text-2xl my-2 text-blue-950">{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>

            {/* categories accordian */}
            {categories.map((category) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} /> )}

        </div>
    )
}

export default RestaurantMenu

            // <h2 className="font-bold text-lg">Menu</h2>
            // <ul>
            //     {/* <li>{resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name}</li> */}
            //     {itemCards && itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - {"  Rs"} {(item.card.info.price)/100}</li>)}
            // </ul>