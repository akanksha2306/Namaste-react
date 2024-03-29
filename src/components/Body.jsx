
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

 
const Body =() =>{
    return(
        <div className="body-container">
            <div className="search-box">
                Yaha Search hoga
            </div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData ={restaurant} />
                ))}
            </div> 
        </div>

    )
};

export default Body;