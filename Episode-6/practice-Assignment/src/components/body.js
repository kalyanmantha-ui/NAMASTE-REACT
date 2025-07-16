import {restaurants} from "../utils/data";
import {Card} from "./card";
import { useState,useEffect } from "react";
import { ShimmerUI } from "./ShimmerUi";


export const Body = () => {
    const [data , setdata] = useState([]);
    const [search , setsearch] = useState("");
    const [allRestaurants] = useState(data);
    const [newOffSet, setnewOffSet] = useState("");
    const [isLoading , setisLoading] = useState();

    const a = async () => {
        if (isLoading){
            return
        }
        setisLoading(true);
        const apidata1 = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724`;
        const fullURL = newOffSet ? `${apidata1}&nextOffset=${newOffSet}` : apidata1;
        const apidata = await fetch(fullURL);
        const json = await apidata.json();
        console.log("Received nextOffset:", json.data.pageOffset?.nextOffset);
console.log("Previous offset in state:", newOffSet);

        setdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setnewOffSet(json?.data?.pageOffset?.nextOffset);
        console.log(json?.data?.pageOffset?.nextOffset);
        console.log(json);
        setisLoading(false);
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("Fetched restaurants:", restaurants);

    };

    useEffect(() => {
        a();
    }, [])


    if (data.length === 0){
        console.log("Shimmer showing...");
        return <ShimmerUI />
    }  
    return (
        <div>
            <div className="search-container">
                <input type="text" onChange= {(e) => {setsearch(e.target.value)}}></input>
                <button onClick={
                    () => {
                        setdata(
                            data.filter((val) => (val.info.name.toLocaleLowerCase().startsWith(search)))
                        )
                    }
                }>Search</button>
                <div className="cardContainer">
                {data.map((val) => {
                   return <Card key={val.info.name} {...val.info}/>
                })}
                </div>
                
            </div>
        </div>
    );
}


