import { FaChevronRight } from "react-icons/fa6";
// import Footer from "./Footer";
// import HeaderPage from "./HeaderPage";
import {  useState } from "react";
import { motion } from "framer-motion";
// import { addItemToCart } from "../store/utils/ClientActions";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dummyImage } from "../utils";
import Home_header from "../usable-component/Home_header";
import Footer from "../usable-component/Trust_marks";
import MainFotter from "../usable-component/MainFotter";

const Product_Detail = () => {
  const [open, setopen] = useState(0);
  const { productid } = useParams();
  const [product, setproduct] = useState(null);

  return (
    <>
      <Home_header isTransparent={false} />
      <div className="min-h-[100vh] mb-10 p-5 800px:pl-28 800px:pr-28 800px:pt-32 pb-10 pt-24 flex flex-col 900px:flex-row ">
        <div className="w-full flex flex-col 600px:flex-row gap-2 items-start">
          {/* Main Image Container */}
          <div className="relative w-full 600px:w-[65%] h-[400px] 800px:h-[500px] 1000px:h-[600px] 1200px:h-[700px] 1400px:h-[750px] flex items-center justify-center">
            <img
              className="h-full w-full object-contain object-top"
              src={dummyImage}
              alt="Product"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="h-full w-full 600px:w-[35%] flex flex-col gap-2 overflow-auto max-600px:flex-row max-600px:justify-center">
            {/* You may adjust the max-height or aspect ratio if needed */}
            <img
              className="rounded-md border h-24 w-20 object-cover border-black"
              src={dummyImage}
              alt="Thumbnail"
            />
            <img
              className="rounded-md border h-24 w-20 object-cover border-black"
              src={dummyImage}
              alt="Thumbnail"
            />
            <img
              className="rounded-md border h-24 w-20 object-cover border-black"
              src={dummyImage}
              alt="Thumbnail"
            />
            <img
              className="rounded-md border h-24 w-20 object-cover border-black"
              src={dummyImage}
              alt="Thumbnail"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full text-[80%] 600px:text-[100%] overflow-y-scroll hidden-scrollbar flex items-center flex-col">
          <div className="w-full 1400px:w-[60%] 500px:w-[80%] p-4 text-[130%] font-semibold mt-12">
            <p>{product?.title}</p>
            <p>₹ {product?.price}</p>
            <br />
            <p className="text-[90%]">COLORS</p>
            <div className="grid grid-cols-5 gap-8 flex-wrap mt-6">
              {product?.colors?.map((i) => (
                <div
                  key={i}
                  style={{ backgroundColor: i }}
                  className="h-9 w-9 border border-black rounded-full"
                ></div>
              ))}
            </div>
            <div className="text-[90%] mt-8">SIZE</div>
            <div className="flex gap-5">
              <div className="w-16 h-10 mt-4 flex justify-center items-center border border-black hover:bg-black hover:text-white text-[110%]">
                XS
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center border border-black hover:bg-black hover:text-white text-[110%]">
                S
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center border border-black hover:bg-black hover:text-white text-[110%]">
                M
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center border border-black hover:bg-black hover:text-white text-[110%]">
                L
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center border border-black hover:bg-black hover:text-white text-[110%]">
                XL
              </div>
            </div>
            <p className="mt-2 text-[80%]">Please select a size</p>
          </div>

          <div className="mt-8 w-[80%] text-[110%] overflow-y-scroll 600px:text-[130%] font-semibold">
            <motion.div
              initial={{ height: 52 }}
              animate={open === 1 ? { height: 200 } : { height: 52 }}
              className="border-t overflow-hidden border-black max-h-[50%]"
            >
              <div
                onClick={() => (open === 1 ? setopen(0) : setopen(1))}
                className="flex h-[52px] cursor-pointer items-center pl-2 pr-2"
              >
                Description{" "}
                <FaChevronRight
                  className={`ml-auto transition-all duration-150 ${
                    open === 1 ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
              <p className="text-[90%] font-normal text-gray-700">
                {product?.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ height: 52 }}
              animate={open === 2 ? { height: 200 } : { height: 52 }}
              className="border-t overflow-hidden border-black max-h-[50%]"
            >
              <div
                onClick={() => (open === 2 ? setopen(0) : setopen(2))}
                className="flex h-[52px] cursor-pointer items-center pl-2 pr-2"
              >
                Fabric core and origin{" "}
                <FaChevronRight
                  className={`ml-auto transition-all duration-150 ${
                    open === 2 ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
              <p className="text-[90%] font-normal text-gray-700">
                {product?.clothdetail}
              </p>
            </motion.div>

            <motion.div
              initial={{ height: 52 }}
              animate={open === 3 ? { height: 200 } : { height: 52 }}
              className="border-t border-b overflow-hidden border-black"
            >
              <div
                onClick={() => (open === 3 ? setopen(0) : setopen(3))}
                className="flex h-[52px] cursor-pointer items-center pl-2 pr-2"
              >
                Commitment{" "}
                <FaChevronRight
                  className={`ml-auto transition-all duration-150 ${
                    open === 3 ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
              <p className="text-[90%] font-normal text-gray-700">
                The model measures 186 cm and is wearing a size M. Reference:
                HTSC28015KPIN21 Thick cotton Round neck Short sleeves
                Serigraphy on the front and on the back
              </p>
            </motion.div>
          </div>

          <div className="w-full flex gap-4 text-[80%] mt-10 600px:text-[100%] justify-center">
            <button className="w-[140px] h-[50px] border border-black hover:bg-black hover:text-white text-[120%] font-bold">
              Buy now
            </button>
            <button
              // onClick={() => {
              //   addItemToCart(product) == true
              //     ? toast.success("Item added to cart")
              //     : toast.error("Item already added to cart");
              // }}
              className="w-[140px] h-[50px] border border-black hover:bg-black hover:text-white text-[120%] font-bold"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <MainFotter />
    </>
  );
};

export default Product_Detail;
