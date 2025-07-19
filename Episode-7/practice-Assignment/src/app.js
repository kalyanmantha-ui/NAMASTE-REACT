import React from "react";
import ReactDOM from "react-dom/client";
import {Body} from "./components/body";
import {Header} from "./components/header";
import test from "./components/header";
const parent = ReactDOM.createRoot(document.querySelector(".container"));
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {About} from "./components/about";
import {Contact} from "./components/Contact";
import Error from "./components/Error";
import RestuarentMenu from "./components/RestuarentMenu";
console.log(test);
const App = () => {
    return (
        <div>
            <Header />
             <Outlet /> {/*for choosing based on path */}
            {/* <Footer />  */}
        </div>
    );
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //child routes
        children : [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/RestuarentMenu/:id",
                element: <RestuarentMenu />
            }
        ],
        errorElement: <Error />
    }
    
])

parent.render(<RouterProvider router={approuter}/>)
