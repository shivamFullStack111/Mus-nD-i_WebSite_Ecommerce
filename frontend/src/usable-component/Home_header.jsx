import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { dummyImage } from "../utils";

const Home_header = ({ isTransparent }) => {
  const [scroll, setscroll] = useState(0);
  const [cartOpen, setcartOpen] = useState(false);

  const handleScroll = () => {
    setscroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {cartOpen && (
        <Cart_Slider cartOpen={cartOpen} setcartOpen={setcartOpen} />
      )}

      <div
        className={`h-20 max-800px:h-16  shadow-md flex items-center justify-between z-40 fixed w-full ${
          scroll > 180 && isTransparent
            ? "bg-white text-black"
            : "bg-transparent text-white"
        }  p-10 max-800px:p-5 ${!isTransparent && "!text-black !bg-white"}`}
      >
        <div className="flex  items-center text-lg">
          <img
            className="h-16 max-800px:h-14"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9LBQDDt7MfbpnUa_g1OGlvI5P4fG5UiGhQ&s"
          />
          <p className="companyName max-800px:text-[15px]">Company Name</p>
        </div>
        <div className="  flex  max-800px:hidden  items-center gap-8">
          <Link
            to={"/"}
            className="hoverNav hover:border-b-2 border-black text-[20px]"
          >
            Home
          </Link>
          <Link
            to={"/all-products"}
            className="hoverNav hover:border-b-2 border-black text-[20px]"
          >
            Products
          </Link>
          <Link className="hoverNav hover:border-b-2 border-black text-[20px]">
            Men's
          </Link>
          <Link
            onClick={() => setcartOpen(true)}
            className="hoverNav hover:border-b-2 border-black text-[20px]"
          >
            Cart
          </Link>
          <Link
            to={"/dashboard"}
            className="hoverNav hover:border-b-2 border-black text-[20px]"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home_header;

const Cart_Slider = ({ cartOpen, setcartOpen }) => {
  return (
    <div className="fixed z-50 bg-[#0000007d] w-[100vw] h-[100vh] right-0 top-0 ">
      <div className="500px:w-[500px] max-500px:w-[100vw] bg-[#F0F0F0] h-full ml-auto overflow-y-scroll p-3">
        <div className="p">
          <RxCross1
            onClick={() => setcartOpen(false)}
            className="text-2xl hover:scale-110  cursor-pointer"
          />
        </div>
        <div className="bg-white mt-5 py-5 pt-0 px-2 rounded-xl">
          {[1, 2, 3, 4].map((i) => {
            return (
              <div key={i} className=" border-b border-dashed border-gray-500">
                <div className="flex justify-between  items-center">
                  <div className="relative group ml-auto">
                    <RxCross1
                      className="cursor-pointer group  pt-2 text-gray-500 hover:scale-110 hover:text-black "
                      size={28}
                    />

                    <div className="absolute hidden group-hover:block right-5 shadow-lg text-gray-500 px-2 py-1   ">
                      Remove
                    </div>
                  </div>
                </div>
                <div className="flex mb-3 ">
                  <img src={dummyImage} className="h-28 rounded-md" alt="" />
                  <div className="ml-4">
                    <p className="font-semibold text-lg">
                      Classic Men's t-shirt{" "}
                    </p>
                    <p>Price: $393</p>
                    <p>Ratings: (4/5)</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="rounded-lg bg-white mt-5 py-5 px-2">
          <p className="font-extrabold text-2xl">Overview</p>
          <div className="px-5 py-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Total items</p>
              <p className="font-semibold text-gray-600 text-[18px]">3</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Shipping charges</p>
              <p className="font-semibold text-gray-600 text-[18px]">$9</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Discount</p>
              <p className="font-semibold text-green-500 text-[18px]">20%</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Total bill</p>
              <p className="font-semibold text-gray-600 text-[18px]">$343</p>
            </div>

            <div className="w-full h-14 rounded-lg cursor-pointer hover:text-white hover:bg-black mt-4 flex justify-center items-center border-2 border-black hover:border-white font-bold text-lg scale-90  hover:scale-100 transition-transform duration-300">
              Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
