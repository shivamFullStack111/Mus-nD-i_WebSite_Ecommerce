import React from "react";

const TrendingCollections = () => {
  return (
    <div className="w-[100%]  bg-[#000000de] p-10 ">
      <p className="text-3xl headings text-white underline  tracking-wider ">
        Trending Collections
      </p>

      <div className="flex gap-10 hidden-scrollbar h-full mt-16 mb-16 w-[100%] overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          return (
            <div
              key={i}
              className="  h-[450px] min-w-[380px]  bg-white rounded-md"
            >
              <img
                src={`https://themewagon.github.io/hexashop/assets/images/men-0${
                  i % 2 == 0 ? 2 : 3
                }.jpg`}
                className="w-full h-[80%]"
                alt=""
              />
              
              <div className="p-2">
                <div className="w-full flex justify-between  text-xl">
                  <p className="">Classic Shirt</p>
                  <p className="">(4/5) ratings </p>
                </div>
                <div className="w-full flex justify-between  text-xl">
                  <div className=" flex gap-5">
                    <p className="line-through text-gray-500">$460</p>
                    <p className=" text-gray-800">$160</p>
                  </div>
                  {/* <p className="line-through text-gray-500"></p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCollections;
