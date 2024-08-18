import React from "react";

const Cat_NavigationsImages = () => {
  return (
    <div className="flex p-10 gap-10 ">
      <div className="exploreimage w-[100%] h-[600px] bg-cover bg-center justify-center items-center flex">
        <div className="p-20">
          <p className="text-white text-3xl ">
            Lorem ipsum dolor sit amet consectetur adipis voluptatibus!
          </p>
          <div className="w-48 h-16 hover:bg-white bg-[#000000bc] cursor-pointer text-white hover:text-[#000000bc] cursor-pointer rounded-lg mt-6 ml-auto text-xl justify-center items-center flex">
            Explore
          </div>
        </div>
      </div>

      <div className="flex gap-7 justify-center items-center">
        <div>
          <div className="menNavImage h-72 mb-7 w-96 bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl font-bold ">Men's Collection</p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
                Men's
              </div>
            </div>
          </div>
          <div className="kidNavImage h-72 mb-7  w-96 bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-75 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl font-bold ">Kid's Collection</p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center mt-6 hover:text-white hover:bg-black cursor-pointer ">
                Kid's
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          {" "}
          <div className="womenNavImage h-72 mb-7 w-96 bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-0 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl font-bold  mb-7 ">Women's Collection</p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center  hover:text-white hover:bg-black cursor-pointer ">
                Women's
              </div>
            </div>
          </div>
          <div className="accessNavImage h-72 mb-7 w-96 bg-cover group bg-center flex justify-center items-center">
            <div className="w-[95%] h-[95%] bg-[#00000091] opacity-0 scale-0 transition-all duration-[300ms] group-hover:opacity-100 group-hover:scale-100 justify-center items-center text-white flex  flex-col">
              <p className="text-3xl font-bold  mb-7 ">
                Accessories Collection
              </p>
              <div className="w-[130px] h-[40px] bg-white text-black rounded-md flex justify-center items-center  hover:text-white hover:bg-black cursor-pointer ">
                Accessories
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Cat_NavigationsImages;
