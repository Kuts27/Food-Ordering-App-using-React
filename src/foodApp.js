import React, { useEffect } from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom" // it will create routing configuration for us
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"  
import { Suspense, lazy } from "react"
import Grocery from "./components/Grocery"
import UserContext from "./utils/UserContext"
import { useState } from "react"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {

    const [userName, setUserName] = useState()

    //authentication
    useEffect(()=>{
        //make an api call and send username and password
        const data = {
            name:"Sachin Kute"
        }
        setUserName(data.name)
    },[])

    return(

        <Provider store={appStore}> 
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className = "app">
            <Header/>
            {/* <Body/> */}
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}


// this configuration takes an array of list.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {   
                path: "/home",
                element: <Body />,
            },
            {   
                path: "/about",
                element: <About />,
            },
            {   
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading..</h1>} > <Grocery/> </Suspense>,
            },
            {   
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },

        ],
        errorElement: <Error />
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<AppLayout/>)

root.render(<RouterProvider router = {appRouter}/>)
