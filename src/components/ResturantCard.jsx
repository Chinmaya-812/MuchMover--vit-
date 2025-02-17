/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../config";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
  sla,
}) => {
  const str = cuisines;
  var length = str.length;
  var firstHalf;
  if (length <= 6) {
    firstHalf = str;
  } else {
    const middleIndex = Math.floor(length / 2);
    firstHalf = str.slice(0, middleIndex);
  }

  return (
    <>
      <div className="w-[250px] h-[350px] p-3 mx-4 my-3 shadow-lg rounded-md bg-gray-50 transition-transform duration-300 transform hover:scale-[1.1]">
        <img
          src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
          alt=""
          className="w-full h-1/2 rounded-lg "
        />
        <h2 className="font-bold text-[1.15rem] pt-4">{name}</h2>
        <p className="text-base pt-2">{firstHalf.join(", ")}</p>
        <h4 className="text">
          <span className="bg-green-700 px-2 mt-2 text-white  rounded-md">
            ★ {avgRatingString}
          </span> <span className="pt-2 ml-3 text-amber-600">{sla.slaString}</span>
        </h4>
      </div>
    </>
  );
};

export default ResturantCard;
