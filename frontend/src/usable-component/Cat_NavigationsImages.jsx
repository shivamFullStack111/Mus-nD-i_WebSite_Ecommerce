import React from "react";

const Cat_NavigationsImages = () => {
  return (
    <div className="flex p-10 max-800px:p-2 gap-2 800px:gap-10  max-800px:flex-col ">
      {/* 1st container */}

      <div className="exploreimage  w-[100%]     bg-cover bg-center justify-center items-center flex ">
        <div className="p-20">
          <p className="text-white text-3xl ">
            Lorem ipsum dolor sit amet consectetur adipis voluptatibus!
          </p>
          <div className="w-48 h-16 hover:bg-white bg-[#000000bc] cursor-pointer text-white hover:text-[#000000bc] cursor-pointer rounded-lg mt-6 ml-auto text-xl justify-center items-center flex">
            Explore
          </div>
        </div>
      </div>

      {/* 2nd container */}

      <div className="flex gap-7  max-800px:gap-3 justify-center items-center   w-full  ">
        <div className="flex flex-col w-full">
          <div className="menNavImage h-72 mb-7 max-800px:mb-3  bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl max-800px:text-xl font-bold ">Men's Collection</p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
                Men's
              </div>
            </div>
          </div>
          <div className="kidNavImage h-72 mb- max-800px:mb-3  bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl max-800px:text-xl font-bold ">Kid's Collection</p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
                Kid's
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="womenNavImage h-72 mb-7 max-800px:mb-3  bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl max-800px:text-xl font-bold text-center">Women's Collection</p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
                Women's
              </div>
            </div>
          </div>
          <div className="accessNavImage h-72 mb- max-800px:mb-3  bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms]  group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl max-800px:text-xl font-bold text-center">Accessories's Collection</p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
                Accessories's
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat_NavigationsImages;

{
  /* <div className="flex gap-7  max-800px:gap-3 justify-center items-center  ">
<div className="flex flex-col">
  <div className="menNavImage h-72 mb-7 max-800px:mb-3 w-  bg-cover group bg-center flex justify-center items-center">
    <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
      <p className="text-3xl font-bold ">Men's Collection</p>
      <div className="w-[] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
        Men's
      </div>
    </div>
  </div>
  <div className="kidNavImage h-72 mb-7 max-800px:mb-3  w-  bg-cover group bg-center flex justify-center items-center">
    <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
      <p className="text-3xl font-bold ">Kid's Collection</p>
      <div className="w-[] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
        Kid's
      </div>
    </div>
  </div>{" "}
</div>

<div>
  {" "}
  <div className="womenNavImage h-72 mb-7 max-800px:mb-3 w-[100%]  bg-cover group bg-center flex justify-center items-center">
    <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-0 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
      <p className="text-3xl font-bold  mb-7 max-800px:mb-3 ">
        Women's Collection
      </p>
      <div className="w-[] h-[40px] bg-white text-black rounded-md flex justify-center items-center  hover:text-white hover:bg-black cursor-pointer ">
        Women's
      </div>
    </div>
  </div>
  <div className="accessNavImage h-72 mb-7 max-800px:mb-3 w-  bg-cover group bg-center flex justify-center items-center">
    <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-0 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
      <p className="text-3xl font-bold  mb-7 max-800px:mb-3 ">
        Accessories Collection
      </p>
      <div className="w-[] h-[40px] bg-white text-black rounded-md flex justify-center items-center  hover:text-white hover:bg-black cursor-pointer ">
        Accessories
      </div>
    </div>
  </div>{" "}
</div>
</div> */
}
