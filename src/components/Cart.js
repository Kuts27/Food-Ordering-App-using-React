import { useDispatch, useSelector } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { clearCart } from "../utils/cartSlice"

 const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    let total=0
    return(

        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-medium" >Cart</h1> 
        <div>
           
            <div className="flex justify-center"> 
                <div>
                 {cartItems.map((item, index) => {
                    total += item.card?.info?.price / 100
                    return (
                    <li className="flex justify-between my-3 gap-20">{index + 1}. {item?.card?.info?.name} -Rs.{item?.card?.info?.price/100} 
                    <div><img src={CDN_URL + item?.card?.info?.imageId} className="w-20"/></div></li> 
                    )
                })}
                </div>
            </div> 
                {cartItems.length > 0 && (
                    <div className="font-bold">Total Price: Rs.{total}</div>
                )}
            
            <div><button onClick={handleClearCart} className="m-2 p-2 bg-gray-300 font-bold rounded-lg cursor-pointer">Clear Cart</button></div>
            {cartItems.length == 0 && (
                <h1 className="text-xl">Cart is empty. Add items to the cart</h1>
            )}

        </div>        
        </div>        
    )
 }

 export default Cart

