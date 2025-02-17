import { useEffect, useState } from "react";

const useAllResturant = () => {
  const [allrestruants, setAllRestruants] = useState([]);
  const [filterrestruants, setFilterRestruants] = useState([]);
  useEffect(() => {
    //API Call
    getResturants();
  }, []);
  async function getResturants() {
    try {
      const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setAllRestruants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestruants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Failed to fetch:", error);
      // console.log("refresh the Page ,To Enabled the CORS")
      // Handle the error, e.g., show a message to the user
    }
  }
  
  // console.log(allrestruants)
  return [allrestruants,filterrestruants];
};

export default useAllResturant;
