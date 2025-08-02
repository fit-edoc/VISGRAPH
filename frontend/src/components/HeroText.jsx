import { motion, useScroll, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const HeroText = () => {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState(1);
  const controls = useAnimation(); // animation controller

  useEffect(() => {
    const handleScroll = () => {
      const scrollingValue = scrollY.get() - scrollY.getPrevious();
      setDirection(scrollingValue > 0 ? 1 : -1);
    };

    scrollY.on("change", handleScroll);
  }, [scrollY]);

  // Start the animation
  useEffect(() => {
    controls.start({
      x: direction > 0 ? -6700 : 0,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }
    });
  }, [direction, controls]);

  return (
    <motion.div
      className=' top-[90%] h-[10vh] w-screen  whitespace-nowrap'
      initial={{ x: -3350 }}
      animate={controls}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({
        x: direction > 0 ? -6700 : 0,
        transition: {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }
      })}
    >
      {Array(5).fill("We Build Brands That Speak — We Design With Purpose — We Create Impac - ").map((text, index) => (
        <h1 key={index} className='whitespace-nowrap inline-block font-loader cursor-pointer text-[2vw] bg-clip-text text-transparent bg-gradient-to-t from-slate-800 to-yellow-50'>
          {text}
        </h1>
      ))}
    </motion.div>
  );
};

export default HeroText;
