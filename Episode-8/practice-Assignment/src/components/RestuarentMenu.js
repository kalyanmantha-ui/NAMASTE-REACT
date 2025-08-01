import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";

// const {resId} = useParams();
// console.log(resId);
const RestuarentMenu = () => {
    const {id} = useParams();
    const [restuarents,setrestuarents] = useState();
     useEffect(() => {
        a()
     },[])
    const a = async () => {
    
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.425938120298223&lng=78.39342287825744&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json1 = await data.json();
        setrestuarents(json1);
        console.log(json1);
    }

    return (
        
        <div>
            <h1>{restuarents?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.cuisines.join(',')}</p>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.avgRatingString}</p>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.totalRatingsString}</p>
        </div>
    );
}

export default RestuarentMenu;