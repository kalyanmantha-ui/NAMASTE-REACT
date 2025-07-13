import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
const container = ReactDOM.createRoot(document.querySelector('.container'));

const Header = () => {
    return (
        <div className="header">
            <div className="image">
                <img src="https://www.designevo.com/res/templates/thumb_small/yellow-hamburger-and-wheat.webp"></img>
            </div>
            <div className="list-items">
                <ul className="header-ul">
                    <li className="header-li">Home</li>
                    <li className="header-li">About</li>
                    <li className="header-li">Contact Us</li>
                    <li className="header-li">Cart</li>
                </ul>
            </div>
           
        </div>
    );
}

const Search = () => {
    return (
        <div className='search-bar'>
            <input type='search' placeholder="Type for search"></input>
        </div>
    );
}


const ResCard = ({resData}) => {
    return (
        <div className="res-card">
            <img
                className="res-img"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.image}`}
            />

            <div className='details'>
                <ul>
                    <li><b>{resData.name}</b></li>
                    <div>
                        <li>{resData.rating}</li>
                        <li className="time">{resData.deliveryTime}</li>
                    </div>
                    <li>{resData.cuisines.join(",")}</li>
                </ul>
            </div>
        </div>
    );
}



const dataList = [
    {
      "id": "1037841",
      "name": "Mr Phillys American Cheeseburgers",
      "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/6f24d4b2-d893-447c-a228-249b3007c2b4_953da2f6-056b-47f0-904d-c8c9f61fcd08.jpg",
      "area": "Frazer Town",
      "locality": "Coles Road",
      "costForTwo": "₹500 for two",
      "cuisines": ["Burgers", "American", "Biryani", "Fast Food"],
      "rating": 4.5,
      "deliveryTime": "25-30 mins",
      "discount": "60% OFF"
    },
    {
      "id": "1069386",
      "name": "MahaRaja Biryani",
      "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/29/4b26d934-3cc0-4191-82c5-43e0e9918aa9_1046b509-5a76-4d6b-aa74-f2de3b553814.jpg",
      "area": "Malleshwaram",
      "locality": "Malleshwaram",
      "costForTwo": "₹300 for two",
      "cuisines": ["Biryani", "Beverages", "Kebabs", "Street Food", "Snacks"],
      "rating": 3.5,
      "deliveryTime": "25-30 mins",
      "discount": "30% OFF"
    },
    {
      "id": "968193",
      "name": "Bagara Biryani Cafe",
      "image": "bbd6260ad225ac986b808807ee313a6a",
      "area": "JP Nagar",
      "locality": "JP Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": ["Biryani", "Grill", "Kebabs", "Seafood", "Tandoor", "Andhra", "Arabian", "Mughlai"],
      "rating": 4.0,
      "deliveryTime": "25-30 mins",
      "discount": "30% OFF"
    },
    {
      "id": "900529",
      "name": "Mammaslice",
      "image": "FOOD_CATALOG/IMAGES/CMS/2025/3/8/baf74046-da04-4b78-8fa7-c6b3e847791a_dd26fed7-ae3d-479c-86e9-eb5d0570de63.jpg",
      "area": "Malleshwaram",
      "locality": "Shastry Nagar ",
      "costForTwo": "₹278 for two",
      "cuisines": ["briyani", "Desserts", "Beverages", "Kebabs", "Fast Food"],
      "rating": 3.2,
      "deliveryTime": "30-35 mins",
      "discount": "30% OFF"
    },
    {
      "id": "32780",
      "name": "Late Night",
      "image": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/ba24feae-ff06-496c-9ceb-8e100f42337d_8d2cffc6-94f9-4405-94e7-b88a7d3d024f.jpeg",
      "area": "BTM",
      "locality": "4th Phase",
      "costForTwo": "₹300 for two",
      "cuisines": ["Biryani", "North Indian", "Chinese"],
      "rating": 3.9,
      "deliveryTime": "30-35 mins",
      "discount": "50% OFF"
    },
    {
      "id": "1033355",
      "name": "Biryani Mate",
      "image": "FOOD_CATALOG/IMAGES/CMS/2025/2/24/2af545f1-37c3-44f0-a982-9b19518fb8ab_de196ec0-2d28-48a1-ad7c-206b3daafe2e.jpg",
      "area": "Rajaji Nagar ",
      "locality": "D CORSS/ Gopalpura",
      "costForTwo": "₹500 for two",
      "cuisines": ["Biryani", "Grill", "Sweets", "Tandoor", "Kebabs"],
      "rating": 4.7,
      "deliveryTime": "20-25 mins",
      "discount": null
    },
    {
      "id": "1123792",
      "name": "COMIDA NILGIRIS",
      "image": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/63a26609-e40e-42a4-b168-315c93b0c5db_1123792.jpg",
      "area": "BTM",
      "locality": "BTM",
      "costForTwo": "₹200 for two",
      "cuisines": ["Chinese", "Biryani", "South Indian", "Indian", "Asian"],
      "rating": 5.0,
      "deliveryTime": "45-55 mins",
      "discount": "40% OFF"
    }
  ]
  


const Body = () => {
    return (
    
    <div>
        <Search />
        <div className="Rescard">
           {dataList.map((data1) => (
            <div key={data1.id}>
                <ResCard  resData={data1} />
            </div>
           ))}
        </div>
    </div>
    );
}


const App = () => {
    return (
        <div className='app'>
            <Header />
            <div> 
                <Body />
            </div>
        </div>
        
    );
}

container.render(<App />)