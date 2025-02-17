/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";

import ItemAccrodion from "./ItemAccrodion";

const ResturantMenu = () => {
  const params = useParams();

  const { id } = params;

  const resturantInfo = useResturant(id);
  // console.log(resturantInfo?.data?.cards[2]?.card?.card?.info);


  return resturantInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="grid grid-flow-row mt-8">
      <div className="w-full flex items-center justify-center bg-gray-200 shadow-lg">
        {/* <h1 className="font-bold text-4xl my-2">Resturant id :{id} </h1> */}

        <div className="flex flex-col lg:flex-row h-auto lg:h-[275px] p-2 shadow-md w-[65%]">
          <div className="w-full lg:w-[35%] h-[250px] lg:h-auto overflow-hidden">
            <img
              src={`${IMG_CDN_URL}/${resturantInfo?.data?.cards[2]?.card?.card?.info.cloudinaryImageId}`}
              className="w-full h-full block lg:pr-[50px] md:pr-[50px] sm:pr-0"
              alt="Restaurant"
            />
          </div>
          <div className="w-full lg:w-[65%] pl-0 lg:pl-6">
            <h2 className="text-[2.25rem] pt-3">
              {resturantInfo?.data?.cards[2]?.card?.card?.info.name}
            </h2>
            <p className="pt-3">
              {resturantInfo?.data?.cards[2]?.card?.card?.info.cuisines.join(
                ","
              )}
            </p>
            <h3 className="mt-2 pt-3">
              <span className="bg-green-700 px-2 py-1 text-white font-[400] rounded-md">
                ★ {resturantInfo?.data?.cards[2]?.card?.card?.info.avgRating}
              </span>
              <span className="mx-3 font-[700] text-xl"> | </span>
              <span className="font-[500]">
                {/* {
                  resturantInfo?.data?.cards[2]?.card?.card?.info.sla
                    .minDeliveryTime
                }{" "}
                -{" "}
                {
                  resturantInfo?.data?.cards[2]?.card?.card?.info.sla
                    .maxDeliveryTime
                }{" "} */}
                10-25 MINS
              </span>
              <span className="mx-3 font-[700] text-xl"> | </span>
              <span className="font-[500]">
                {
                  resturantInfo?.data?.cards[2]?.card?.card?.info
                    .costForTwoMessage
                }
              </span>
            </h3>

            <h4 className="pt-2 mt-3">
              {resturantInfo?.data?.cards[2]?.card?.card?.info.aggregatedDiscountInfo.descriptionList.map(
                function (i, vl) {
                  return (
                    <span
                      className="text-[#008000] font-[600] text-xl"
                      key={vl}
                    >
                      {i.meta}
                    </span>
                  );
                }
              )}
            </h4>
            <h5 className="mt-3 text-orange-600">
              <span>
                {"Address :- "}
                {
                  resturantInfo?.data?.cards[2]?.card?.card?.info.slugs
                    .restaurant
                }{" "}
                {" , "}
              </span>
              <span>
                {(resturantInfo?.data?.cards[2]?.card?.card?.info.slugs.city).toUpperCase()}
              </span>
            </h5>
          </div>
        </div>
      </div>
      {/* {console.log(
        resturantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
          2,
          resturantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards.length - 2
        )
      )} */}
      <div className="p-6">
        {(resturantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
          .slice(
            2,
            resturantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards.length - 2
          )
          .map(function (i, k) {
            {
              /* return <Section index={k} {...i} key={k}/>; */
            }
            return <ItemAccrodion {...i} key={k} />;
          })}
      </div>
    </div>
  );
};

export default ResturantMenu;
