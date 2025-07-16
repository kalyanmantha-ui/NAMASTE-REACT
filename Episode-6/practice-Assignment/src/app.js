import React from "react";
import ReactDOM from "react-dom/client";
import {Body} from "./components/body";
import {Header} from "./components/header";
import test from "./components/header";
const parent = ReactDOM.createRoot(document.querySelector(".container"));


console.log(test);
const App = () => {
    return (
        <div>
            <Header />
            <Body />
            {/* <Footer />  */}
        </div>
    );
}

parent.render(<App />)
