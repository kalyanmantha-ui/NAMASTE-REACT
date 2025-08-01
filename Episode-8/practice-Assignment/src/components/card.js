import {CARD_URL} from "../utils/data"
export const Card = ({ name, cloudinaryImageId, costForTwo, cuisines, avgRating }) => {
    // const{name,cloudinaryImageId,costForTwo,cuisines,avgRating} = obj1;
    const img1 = CARD_URL+cloudinaryImageId;
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