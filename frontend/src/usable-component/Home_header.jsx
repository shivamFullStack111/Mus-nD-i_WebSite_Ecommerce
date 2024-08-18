import React, { useEffect, useState } from "react";

const Home_header = () => {
  const [scroll, setscroll] = useState(0);

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
    <div
      className={`h-24 max-800px:h-16  shadow-md flex items-center justify-between z-50 fixed w-full ${
        scroll > 610 ? "bg-white text-black" : "bg-transparent text-white"
      }  p-10 max-800px:p-5`}
    >
      <div className="flex  items-center text-lg">
        <img
          className="h-20 max-800px:h-14"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9LBQDDt7MfbpnUa_g1OGlvI5P4fG5UiGhQ&s"
        />
        <p className="companyName max-800px:text-[16px]">Company Name</p>
      </div>
      <div className="  flex  max-800px:hidden  items-center gap-8">
        <p className="hoverNav hover:border-b-2 border-black text-[20px]">
          Home
        </p>
        <p className="hoverNav hover:border-b-2 border-black text-[20px]">
          Products
        </p>
        <p className="hoverNav hover:border-b-2 border-black text-[20px]">
          Men's
        </p>
        <p className="hoverNav hover:border-b-2 border-black text-[20px]">
          Women's
        </p>
        <p className="hoverNav hover:border-b-2 border-black text-[20px]">
          Kids's
        </p>
      </div>
    </div>
  );
};

export default Home_header;
