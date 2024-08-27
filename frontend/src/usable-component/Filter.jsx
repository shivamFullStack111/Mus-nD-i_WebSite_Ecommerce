import { motion } from "framer-motion";
import { useState } from "react";
import { RxCross1, RxArrowRight } from "react-icons/rx";
import "../Components/all.css";

const Filter = ({ filterOpen, setfilterOpen }) => {
  const [open, setopen] = useState(0);

  return (
    <div>
      {filterOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: filterOpen ? 1 : 0 }}
          transition={{ delay: filterOpen ? 0 : 1 }}
          className="fixed bg-[#00000070] w-[100vw] h-[100vh] top-0 left-0 z-50 flex justify-end "
        >
          <motion.div
            initial={{ x: 550 }}
            animate={{
              x: filterOpen ? 0 : 550,
            }}
            transition={{ duration: 0.4 }}
            className=" w-full 800px:w-[500px]  bg-white "
          >
            <RxCross1
              className="m-4 cursor-pointer hover:scale-110"
              onClick={() => setfilterOpen(false)}
              size={28}
            />

            <div className="border-t-[1px] border-b-[1px] mt-10 border-black w-full ">
              <div
                onClick={() => {
                  if (open == 1) setopen(0);
                  else setopen(1);
                }}
                className={`h-16 w-full hover:bg-slate-300 cursor-pointer headings flex items-center pl-5 pr-5 tracking-wider text-xl font-extralight justify-between ${
                  open == 1 && "bg-slate-300"
                }`}
              >
                <div> Sort By</div>
                <RxArrowRight
                  className={`text-2xl ${
                    open == 1 && "rotate-90"
                  }  cursor-pointer transition-all duration-200 `}
                />
              </div>
              {/* options */}

              {open == 1 && (
                <div className="mt-4 pb-4 flex justify-center gap-3  800px:gap-6">
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Low To High
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    High To Low
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Clear
                  </div>
                </div>
              )}
              <div></div>
            </div>
            <div className="border-t-[1px] border-b-[1px]  border-t-0 border-black w-full ">
              <div
                onClick={() => {
                  if (open == 2) setopen(0);
                  else setopen(2);
                }}
                className={`h-16 w-full hover:bg-slate-300 cursor-pointer headings flex items-center pl-5 pr-5 tracking-wider text-xl font-extralight justify-between ${
                  open == 2 && "bg-slate-300"
                }`}
              >
                <div> Colors</div>
                <RxArrowRight
                  className={`text-2xl ${
                    open == 2 && "rotate-90"
                  }  cursor-pointer transition-all duration-200 `}
                />
              </div>
              {/* options */}

              {open == 2 && (
                <div className="mt-4 pb-4 flex justify-center gap-3 flex-wrap  800px:gap-6">
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Blue
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Red
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Green
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Pink
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Purple
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    White
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Gray
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    Orange
                  </div>
                </div>
              )}
              <div></div>
            </div>
            <div className="border-t-[1px] border-b-[1px]  border-t-0 border-black w-full ">
              <div
                onClick={() => {
                  if (open == 3) setopen(0);
                  else setopen(3);
                }}
                className={`h-16 w-full hover:bg-slate-300 cursor-pointer headings flex items-center pl-5 pr-5 tracking-wider text-xl font-extralight justify-between ${
                  open == 3 && "bg-slate-300"
                }`}
              >
                <div>Size</div>
                <RxArrowRight
                  className={`text-2xl ${
                    open == 3 && "rotate-90"
                  }  cursor-pointer transition-all duration-200 `}
                />
              </div>
              {/* options */}

              {open == 3 && (
                <div className="mt-4 pb-4 flex justify-center gap-3 flex-wrap  800px:gap-6">
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    S
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    XS
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    M
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    L
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    XL
                  </div>
                  <div className="flex items-center w-32 p-1  800px:pt-2 800px:pb-2  border-black rounded-md hover:bg-slate-200 justify-center cursor-pointer border-[1px] ">
                    XXL
                  </div>
                </div>
              )}
              <div></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Filter;


