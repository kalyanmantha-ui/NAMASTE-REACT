import {restaurants} from "../utils/data";
import {Card} from "./card";
import { useState } from "react";



export const Body = () => {
    const [data , setdata] = useState(restaurants);
    const [search , setsearch] = useState("");
    const [allRestaurants] = useState(restaurants);  
    return (
        <div>
            <div className="search-container">
                <input type="text" onChange= {(e) => {setsearch(e.target.value)}}></input>
                <button onClick={
                    () => {
                        setdata(
                            allRestaurants.filter((val) => (val.name.toLocaleLowerCase().startsWith(search)))
                        )
                    }
                }>Search</button>
                <div className="cardContainer">
                {data.map((val) => {
                   return <Card key={val.name} {...val}/>
                })}
                </div>
                
            </div>
        </div>
    );
}