import {restaurants} from "../utils/data";
import {Card} from "./card";
import { useState,useEffect } from "react";
import { ShimmerUI } from "./ShimmerUi";
import {useNavigate} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Body = () => {
    const navigate = useNavigate();
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
        setdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setnewOffSet(json?.data?.pageOffset?.nextOffset);
        console.log(json);
        setisLoading(false);
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("Fetched restaurants:", restaurants);

    };

    useEffect(() => {
        a();
    }, [])

    const status = useOnlineStatus();
    

    
    //Conditional Rendering
    if (data.length === 0){
        console.log("Shimmer showing...");
        return <ShimmerUI />
    }
    if (status === false) return (<h1>Looks like your offline!!!!</h1>);  
    
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
                    const id = val.info.id;
                    {console.log(id)}
                   return <div key={id} onClick = {() => {
                    navigate(`RestuarentMenu/${id}`)
                   }}> <Card  {...val.info}/></div>
                })}
                </div>
                
            </div>
        </div>
    );
}


