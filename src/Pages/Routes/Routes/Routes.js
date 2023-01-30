
import { createBrowserRouter } from "react-router-dom";
import MainBillingPage from "../../BillingPage/MainBillingPage";
import Main from "../../Layout/Main";
import Registration from "../../Login/Registration";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import Login from "../../Login/Login"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage/>,
        children:[
            
    
            {
                path:'/',
                element:<MainBillingPage/>
            },
            {
                path:'/billing-page',
                element:<MainBillingPage/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/registration',
                element:<Registration/>
            },
        ]

    }
])