/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { decQty, incQty, removeItem } from "../utils/cartSlice";

const CartCard = ({ cartData }) => {
  // console.log(cartData);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center p-4 border border-gray-300 rounded-md h-52 w-96 justify-between my-4 mx-2">
      <div className="flex flex-col items-center mr-4 pt-2 h-full">
        <img
          src={`${IMG_CDN_URL}/${cartData?.imageId}`}
          alt="${name}"
          className="max-w-full h-32 w-32 rounded-md"
        />
        <h4 className="text-center pt-3">
          <span className="bg-green-700 px-2 mt-2 text-white  rounded-md">
            {" "}
            {cartData?.ratings?.aggregatedRating?.rating===undefined?'3.9':cartData?.ratings?.aggregatedRating?.rating} ⭐️
          </span>
        </h4>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-semibold mb-1">{cartData?.name}</h3>
        <p className="text-gray-600 mb-4">
          {" "}
          Price :{" "}
          {cartData.defaultPrice
            ? (Number(cartData.defaultPrice) / 100) * cartData?.qty
            : (Number(cartData.price) / 100) * cartData?.qty}
        </p>
        <p className="text-gray-600 mb-4">Quantity : {cartData?.qty}</p>
        <div>
          <button
            className="bg-gray-200 hover:bg-orange-300 rounded-md py-1 px-2 mr-1"
            onClick={() => dispatch(incQty(cartData?.id))}
          >
            +
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded-md py-1 px-2 mr-1"
            onClick={() => {
              dispatch(removeItem(cartData?.id));
            }}
          >
            REMOVE
          </button>
          <button
            className="bg-gray-200 hover:bg-orange-300 rounded-md py-1 px-2"
            onClick={() => dispatch(decQty(cartData?.id))}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
