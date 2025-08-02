import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const boxref = useRef();
  const containeRef = useRef();

  useGSAP(() => {

    if (!boxref.current) return;

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containeRef.current, 

        start: "70% 30%",
        end: "100% 50%", 
        scrub: true,
      },
    });

    const span = boxref.current.querySelectorAll("span");
    timeline.to(span, {
      y: 100,
      duration: 1.2,
      stagger: 0.6,
      ease: "power1",
    });
  }, []);

  return (
    <div
      className="h-[100vh]  w-screen bg-gradient-to-r from-[#8f5736] to-[#000000] relative overflow-hidden overflow-x-hidden flex flex-col"
      ref={containeRef}
    >
      <div className="h-[40vh] w-screen flex justify-center items-end">
        <motion.h1
          className="absolute  font-subhead text-[7vw] bg-clip-text text-transparent bg-gradient-to-b from-white to-[#9de5ff] top-[22%]"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ delay: 7, duration: 1.4 }}
        >
          Your Brand Deserves the
        </motion.h1>
      </div>
      <div
        className="flex-1 w-full  flex items-start justify-center
       "
      >
        {" "}
        <motion.h1
          className=" font-hero bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-gray-50"
          initial={{ fontSize: "65vw" }}
          animate={{ fontSize: "28vw" }}
          transition={{ backdropFilter: "blur(5px)", delay: 6, duration: 0.7 }}
        >
          SPOTLIGHT
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
