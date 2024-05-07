import { CDN_URL } from "../utils/constants"


const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData?.info
    return(
        <div className="res-card w-52 rounded-lg bg-gray-200 hover:bg-gray-300">
            <img className="res-logo rounded-lg" alt="res-logo" src = {CDN_URL+resData.info.cloudinaryImageId}/>
            <h3 className="py-4 font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating + " stars"}</h4>    
            <h4>{resData.info.sla.deliveryTime} minutes</h4>    
        </div>
    )
}

// const RestaurantCard = (props) =>{
//     console.log(props)
//     return(
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" alt="res-logo" src= {CDN_URL}></img>
//             <h3>{props.resName}</h3>
//             <h5>{props.cusine}</h5>
//             <h5>4.4*</h5>
//             <h5>30 minutes</h5>
//         </div>
//     )
// }

export default RestaurantCard