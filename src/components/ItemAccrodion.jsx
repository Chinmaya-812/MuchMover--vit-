/* eslint-disable react/prop-types */
import { useState } from "react";

import { notify } from "./AlertTost";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../config";
import gif from "../assets/img/load.png";

const ItemAccrodion = ({ card }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const dispatch = useDispatch();

  return (
    <div className="block">
      <div className="py-2 mx-auto md:w-[65%]">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full m-2"
        >
          <span className="text-orange-600 text-[2.05rem]">
            {card.card.title}
          </span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <ul>
              {(card.card.itemCards === undefined
                ? card.card.categories[0].itemCards
                : card.card.itemCards
              ).map(function (j) {
                return (
                  <li
                    className="m-2 bg-gray-100 flex flex-col md:flex-row justify-between md:h-[235px]"
                    key={j.card.info.id}
                  >
                    <div className="w-full md:w-[75%] flex flex-col justify-between md:flex-row">
                      <div>
                        <h5 className="ml-4 mt-2 text-md">
                          {j.card?.info?.itemAttribute?.vegClassifier ===
                            "NONVEG"
                            ? "🔴"
                            : "🟢"}
                        </h5>
                        <h2 className="text-xl font-[600] mx-2">
                          {j.card.info.name}
                        </h2>
                        <p className="text-[16px] m-2">
                          <span>₹</span>
                          {j.card.info.defaultPrice
                            ? Number(j.card.info.defaultPrice) / 100
                            : Number(j.card.info.price) / 100}
                          <span></span>
                        </p>
                        <p className="text-[14px] ml-3">
                          <span className="text-green-600 text-lg">★</span>
                          {j.card.info?.ratings?.aggregatedRating.rating === undefined ? '3.7' : j.card.info?.ratings?.aggregatedRating.rating}
                          <span>
                            [
                            {
                              j.card.info?.ratings?.aggregatedRating
                                .ratingCountV2 === undefined ? '79' : j.card.info?.ratings?.aggregatedRating.ratingCountV2
                            }
                            ]
                          </span>
                        </p>
                        <h6 className="mt-2 mx-2">{j.card.info.description}</h6>
                      </div>
                      <div className="flex justify-between items-center mx-3">
                        <button
                          className="bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-[#87acec]"
                          onClick={() => {
                            // console.log(j.card.info);
                            dispatch(addItem(j.card.info));
                            notify();
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/4">
                      <img
                        src={
                          j?.card?.info.imageId === "undefined"
                            ? gif
                            : `${IMG_CDN_URL}/${j?.card?.info.imageId}`
                        }
                        alt=""
                        className="w-full h-[20rem] object-cover md:h-[20rem] sm:h-[20rem] lg:h-full"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ItemAccrodion;
