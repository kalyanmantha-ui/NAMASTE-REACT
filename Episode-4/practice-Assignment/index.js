import React from "react";
import ReactDOM from "react-dom/client";
import {restaurants} from "./data";

const parent = ReactDOM.createRoot(document.querySelector(".container"));


const Header = () => {
    return (
        <div className="headerMain">
            <div className="img-container">
                <img src="https://www.designevo.com/res/templates/thumb_small/yellow-hamburger-and-wheat.webp" />
            </div>
            <div className="items">
                <ul className='header-ul'>
                    <li className="header-li">Home</li>
                    <li className="header-li">About</li>
                    <li className="header-li">Contact</li>
                </ul>
            </div>
        </div>
    );
}

const Card = ({ obj1 }) => {
    const{name,cloudinaryImageId,costForTwo,cuisines,avgRating} = obj1;
    const img1 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId;
    return (
        <div className= "card">
            <img src={img1}></img>
            <div>{name}</div>
            <div>
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
            </div>
            <p>{cuisines.join(',')}</p>
        </div>
    );
  };
  

const Body = () => {
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Type for search "></input>
                <div className="cardContainer">
                {restaurants.map((val) => {
                   return <Card key={val.info.id} obj1 = {val.info}/>
                })}
                </div>
                
            </div>
        </div>
    );
}

const Main = () => {
    return (
        <div>
            <Header />
            <Body />
            {/* <Footer />  */}
        </div>
    );
}

parent.render(<Main />)
