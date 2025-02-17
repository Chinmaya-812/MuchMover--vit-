import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";
// import { data } from "autoprefixer";
import KeepMountedModal from "./Modal";
import { useState } from "react";

const Cart = () => {

  const [modalOpen, SetModalOpen] = useState(false);


  const cartItems = useSelector((Store) => Store.cart.items);
  const dispatch = useDispatch();
  let handleClearcart = () => {
    alert("hello")
    dispatch(clearCart());
  };

  console.log(cartItems)
  const totalQuantity = cartItems.reduce((acc, curr) => acc + curr?.qty, 0);
  const totalAmount = cartItems?.reduce(
    (acc, curr) => acc + (((curr.price ? curr.price : curr.defaultPrice
    ) / 100) * curr?.qty),
    0
  );


  const modaltoggle = () => {
    SetModalOpen(false);
  }

  console.log(modalOpen);



  return (
    <div>
      <div className="flex flex-col py-[11px]">
        <div className="flex flex-wrap flex-row p-2.5 h-[33rem] overflow-y-scroll">
          {cartItems.map(function (i) {
            return (
              <>
                <CartCard key={i.id} cartData={i} />
              </>
            );
          })}
        </div>
        <div className="bg-slate-200 rounded-lg shadow-lg w-full md:w-auto">
          <h1 className="text-3xl text-center p-3 font-bold">Checkout</h1>
          <div className="p-4 md:p-6 lg:p-10 lg:flex lg:justify-between lg:items-center">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold">Cart Summary</h2>
              <p className="text-lg font-semibold">
                Cart Items: <span className="text-gray-700">{cartItems.length}</span>
              </p>
              <p className="text-lg font-semibold">
                Total Quantity: <span className="text-gray-700">{totalQuantity}</span>
              </p>
              <p className="text-lg font-semibold">
                Total Amount: <span className="text-gray-700">${totalAmount.toFixed(2)}</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row">
              <button
                className="bg-red-500 hover:bg-red-600 font-bold py-2 px-4 rounded-lg border-2 border-solid border-black mb-4 sm:mb-0 sm:mr-4"
                onClick={handleClearcart}
              >
                Clear Cart
              </button>
              <button
                disabled={totalAmount === 0}
                onClick={() => SetModalOpen((i) => !i)}
                className="bg-green-400 hover:bg-green-500 font-bold py-2 px-4 rounded-lg border-2 border-solid border-black shadow-xl">
                Proceed & Order <span>: {totalAmount.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
        <KeepMountedModal modalOpen={modalOpen} modaltoggle={modaltoggle} />
      </div>
    </div >
  );
};

export default Cart;
