import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestuarentsMenu";

const RestuarentMenu = () => {
    const { id } = useParams();
    const restuarents = useRestaurentMenu(id);  // ✅ Use hook directly

    return (
        <div>
            <h1>{restuarents?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.cuisines?.join(',')}</p>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.avgRatingString}</p>
            <p>{restuarents?.data?.cards[2]?.card?.card?.info?.totalRatingsString}</p>
        </div>
    );
};

export default RestuarentMenu;
