import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const image = "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740";


const parent = ReactDOM.createRoot(document.querySelector('.container'));
const icon = "https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360";

const Header = () => {
    return (
      <div className="header">
        <img className="image" src= {image} alt="A descriptive alt text for your image" />
        <input type='search' className='search' placeholder='search bar'></input>
        <img className='icon' src={icon}></img>
      </div>
    );
  };

parent.render(<Header />);