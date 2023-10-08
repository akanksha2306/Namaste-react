import { CDN_URL } from "../utils/constant";

const RestaurantCard =(props)=>{
    const {resData} = props;

    const{cloudinaryImageId,
      name,
      cuisines,
      avgRating, 
      deliveryTime
    } = resData?.data;

    return(
        <div className="res-card">
            <img className="res-logo" alt="" src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{deliveryTime}</h3>
            <h3>{deliveryTime}minutes</h3>
        </div>
    );
};

export default RestaurantCard;