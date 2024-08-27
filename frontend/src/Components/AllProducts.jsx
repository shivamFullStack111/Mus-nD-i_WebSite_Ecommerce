import Home_header from "../usable-component/Home_header";
import { TbListTree } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import Filter from "../usable-component/Filter";
import { dummyImage } from "../utils";
import "../Components/all.css";
import Footer from "../usable-component/Trust_marks";
import MainFotter from "../usable-component/MainFotter";

const AllProducts = () => {
  const [filterOpen, setfilterOpen] = useState(false);

  return (
    <div>
      <Home_header isTransparent={false} />
      <div className=" flex max-800px:flex-col justify-between  items-center text-black p-5 pt-20 800px:pt-28 ">
        {/* filter slider */}
        <Filter filterOpen={filterOpen} setfilterOpen={setfilterOpen} />

        <div className=" flex  justify-start w-full  ">
          <div className="input-container ml-10 ">
            <input
              className="input 800px:w-64 1000px:w-72 1200px:w-96 h-10 800px:h-12 "
              name="text"
              type="text"
              placeholder="Search the internet..."
            />
          </div>
          <div></div>
        </div>
        <div className="flex max-800px:mt-6 justify-end items-center gap-5 ">
          <div
            onClick={() => setfilterOpen((p) => !p)}
            className="w-24 h-9 800px:w-32 800px:h-12  hover:scale-105  transition-all duration-200 border-[1px] rounded-md justify-center items-center flex gap-3 cursor-pointer border-black"
          >
            <TbListTree size={28} />
            <p>Filter</p>
          </div>
          <div className="w-28 h-9 800px:mr-10  1000px:mr-16 800px:w-32 800px:h-12 border-[1px] rounded-md justify-center items-center flex gap-3 cursor-pointer border-black">
            jghv
          </div>
        </div>
      </div>

      <div className="800px:pl-5 mb-6 800px:mb-10 800px:pr-5 800px:mt-7 ">
        <div className="flex 800px:gap-14 gap-2 450px:gap-5  overflow-x-scroll hidden-scrollbar p-2 flex-wrap justify-center">
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
        </div>
      </div>
      <Footer />
      <MainFotter />
    </div>
  );
};

export default AllProducts;

const HoverCard = () => {
  return (
    /* From Uiverse.io by ElSombrero2 */
    <div className="card 800px:min-w-[320px] hover:cursor-pointer 800px:min-h-[410px] max-700px:max-w-[180px] max-700px:max-h-[240px]">
      <div className="content">
        <div className="back p-[1.4px] 800px:p-[1.8px]">
          <div className="w-full h-full bg-white z-50">
            <img
              src={dummyImage}
              className="w-full h-[82.5%] 800px:h-[85%] "
              alt=""
            />
            <div className=" 800px:p-2 p-1 ">
              <div className="flex font-semibold items-center justify-between">
                <p className="text-md max-800px:text-[12px]">Classic t-shirt</p>
                <p className="max-800px:text-[12px]">Addidas</p>
              </div>
              <div className="flex  items-center justify-between">
                <p className="text-md max-800px:text-[13px]">$493</p>
                <p className="max-800px:text-[12px]">(3/5) Ratings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="front p-1">
          <div className="w-full h-full bg-white z-50 text-black">
            <div className="p-[3px] 800px:p-2">
              <div className="flex gap-2 ">
                <img
                  src={dummyImage}
                  className="w-[40%] h-[40%] rounded-sm"
                  alt=""
                />
                <div className="font-semibold max-800px:text-[10.5px] ">
                  <p>Classic t-shirt</p>
                  <p>$493</p>
                  <p>(4/5) Ratings</p>

                  <p className="text-lg font-semibold  max-800px:mt-0 mt-2 underline 800px:mb-1 max-800px:text-[13.5px]">
                    Size
                  </p>
                  <div className="  flex flex-wrap gap-1">
                    <p className="pl-[7px]  pr-[7px] 800px:p-1  800px:pl-[10.7px] 800px:pr-[10.7px] border-[1px] rounded-md hover:scale-105 border-black w-min ">
                      XS
                    </p>
                    <p className="pl-[7px]  pr-[7px] 800px:p-1  800px:pl-[10.7px] 800px:pr-[10.7px] border-[1px] rounded-md hover:scale-105 border-black w-min ">
                      XS
                    </p>
                    <p className="pl-[7px]  pr-[7px] 800px:p-1  800px:pl-[10.7px] 800px:pr-[10.7px] border-[1px] rounded-md hover:scale-105 border-black w-min ">
                      XS
                    </p>
                    <p className="pl-[7px]  pr-[7px] 800px:p-1  800px:pl-[10.7px] 800px:pr-[10.7px] border-[1px] rounded-md hover:scale-105 border-black w-min ">
                      XS
                    </p>
                    <p className="pl-[7px]  pr-[7px] 800px:p-1  800px:pl-[10.7px] 800px:pr-[10.7px] border-[1px] rounded-md hover:scale-105 border-black w-min ">
                      XS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center font-semibold animate-bouce mt-5 800px:mt-10 animate-bounce 800px:text-xl 800px:font-bold flex-col">
                <p className="">Click to see</p>
                <p>details</p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

/* From Uiverse.io by Smit-Prajapati */
