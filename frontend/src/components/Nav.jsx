import React, { useState } from "react";

import { AlignCenter, ArrowRightIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const Nav = () => {
  const [isclick, setIsclick] = useState(false);
  const [ishover, setIshover] = useState(false);

  const navitems = [
    { id: 1, title: "About Us", bg: "#c77dff" },
    { id: 2, title: "Works", bg: "#7bf1a8" },
    { id: 3, title: "Services", bg: "#e3f2fd" },
    { id: 4, title: "Contact", bg: "#ffe66d" },
  ];

  const handleClick = () => {
    setIsclick(!isclick);
  };

  return (
    <div
      className="h-[90px] z-50 absolute w-screen bg-gradient-to-r from-[#8f5736] to-[#000000] flex"
      onClick={handleClick}
    >
      <div className="h-full w-[50%] flex items-center justify-start">
        <motion.h1
          className=" font-logo mb-6 ml-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#9de5ff] text-[2.7vw]"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ delay: 7, duration: 1.4 }}
        >
          VISGRAPH
        </motion.h1>
      </div>
      <div className="h-full w-[50%]  flex items-center justify-end ">
        {" "}
        <button
          className={`h-[40px] w-[120px] rounded-md  border-black border-[1px] gap-1  text-[20px] font-bold bg-yellow-50  mr-[50px] transition-colors duration-500 ease-out   flex items-center justify-center hover:border-b-[5px]  hover:border-r-4 hover:transition-all ${
            isclick ? "hidden" : "block"
          } `}
          onClick={handleClick}
        >
          Menu <AlignCenter />{" "}
        </button>
      </div>

<AnimatePresence>


      {isclick && (
        <motion.div className="menu h-[100vh] w-[65vw] bg-[#765849] absolute right-2 rounded-xl overflow-hidden  flex flex-col top-2"  initial={{clipPath:"inset(0 100% 0 0 )"}} animate={{clipPath:"inset(0 0 0 0 )"}}  exit={{clipPath:"inset(0 100% 0 0 )"}}>
          <div className="h-[150px] w-full flex items-center   justify-between px-4">
            <h1 className=" font-loader max-w-lg  py-3 text-white text-2xl">
             We build digital solutions for ambitious brands — from web apps to enterprise platforms
            </h1>
            <button
              className={`h-[40px] w-[120px] rounded-md mb-9  text-[20px]  border-black text-lg font-bold border-[1px] bg-yellow-50  transition-colors duration-500 ease-out   flex items-center justify-center leading-tight hover:border-b-[5px]  hover:border-r-4 hover:transition-all ${
                isclick ? "block" : "hidden"
              } `}
              onClick={handleClick}
              >
              <b>Close</b>
              <b className="mt-1">
                <X />
              </b>
            </button>
          </div>
          <div className="flex-1 w-full mt-9">
            {navitems.map((item, idx) => (
              <div
              key={idx}
              className="border-b-2 cursor-pointer border-black w-full  text-white h-[120px] overflow-hidden relative hover:h-[200px] transition-all duration-250 ease-in-out "
              style={{
                backgroundColor:
                ishover === item.id ? item.bg : "transparent",
                border: `2px solid ${item.bg}`,
              }}
              onMouseEnter={() => setIshover(item.id)}
              onMouseLeave={() => setIshover(null)}
              >
                <h1 className="font-nav text-[8vw] tracking-wider text-yellow-50 left-[30%]  absolute">
                  {item.title}
                </h1>
                <button
                  className={`absolute px-3 py-2 rounded-2xl border-black bg-yellow-50 text-black right-3 top-1 ${
                    ishover === item.id
                    ? "border-b-[6px] py-3 px-4 transition-all"
                    : ""
                  }`}
                  >
                  <ArrowRightIcon />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
