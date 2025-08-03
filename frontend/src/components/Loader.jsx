import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import {motion} from 'framer-motion'
gsap.registerPlugin(ScrollTrigger);

const Loader = () => {


 const [count, setCount] = useState(1);


  useEffect(() => {


    
    const startDelay = 100; 
    const intervalSpeed = 50; 

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, intervalSpeed);
    }, startDelay);

    return () => clearTimeout(delayTimeout); 
  }, []);

  const textRef1 = useRef();
  const textRef2 = useRef();
   const textRef3 = useRef();
    

  

  const loader = useRef();
  useGSAP(() => {
    const spans1 = textRef1.current.querySelectorAll("span");
    const spans2 = textRef2.current.querySelectorAll("span");
     const spans3 = textRef3.current.querySelectorAll("span");
    const allSpans = [...spans1, ...spans2,...spans3];

    const tl = gsap.timeline();


    tl.fromTo(
      allSpans,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        stagger: 0.4,
        ease: "elastic.out(1,0.3)",
      }
    );


    tl.to(allSpans, { opacity: 0, duration: 1, delay: 1, rotateX: 90 ,stagger:0.4});

 
    tl.fromTo(
      loader.current,
      { zIndex: 99, height: "100%", opacity: 1 },
      {
        height: "0%",
        zIndex: 0,
        opacity: 0,
        display: "none",
        duration: 2,
        ease: "expo.inOut",
      }
    );
  }, []);

  return (
    <div
      className="loader h-screen bg-black text-white   fixed  flex items-center justify-center"
      ref={loader}
    >
      <div className="h-[100vh] w-screen">
   
        <div className=" h-[30%] w-full  relative flex items-end px-4">
          <h1
            className="text-[6vw]  font-loader uppercase overflow-hidden absolute bottom-0"
            ref={textRef1}
          >
            <span className="inline-block">Design & Code </span>
          </h1>
        </div>
        <div className=" h-[30%] w-full  relative">
          <h1
            className="text-[6vw]  font-loader text-center uppercase overflow-hidden"
            ref={textRef2}
          >
            <span className="inline-block">Loading Your</span>{" "}
          </h1>
        </div>
        <div className=" h-[30%] w-full flex justify-end  relative px-5">
          <h1
            className="text-[6vw]  text-center uppercase overflow-hidden"
            ref={textRef3}
          >
            <span className="inline-block font-loader mr-4">digital journey 

</span>{" "}
<motion.b className="font-black absolute left-10" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.1}}>{count}%</motion.b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
