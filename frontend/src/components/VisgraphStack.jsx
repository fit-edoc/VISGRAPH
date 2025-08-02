import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisgraphStack = () => {
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      linesRef.current.forEach((el, index) => {
        gsap.to(el, {
          y: 100, 
          duration:0.6,
          yoyo:true,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            end: "bottom center",
            scrub: true,
          
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const textBlocks = [
    'V',
    'VI',
    'VIS',
    'VISG',
    'VISGR',
    'VISGRA',
    'VISGRAP',
    'VISGRAPH',
  ];

  return (
    <div
      ref={containerRef}
      className="back h-screen w-screen relative bg-black flex flex-col justify-center items-center space-y-4"
    >
        <div className='h-screen w-screen absolute'><img src="/back1.jpg" alt="" /></div>
      {textBlocks.map((part, idx) => (
        <div
          key={idx}
          className="h-[70px] w-screen overflow-hidden flex items-center bg-black"
        >
          <h1
            ref={(el) => (linesRef.current[idx] = el)}
            className="text-white text-[6vw] font-bold ml-8 relative"
          >
            {part}
          </h1>
        </div>
      ))}
      <div className="h-[100px] w-screen overflow-hidden flex items-center bg-black">
        <h1 className='text-white text-[6vw] font-bold ml-8 relative'>VISGRAPH</h1>
      </div>
    </div>
  );
};

export default VisgraphStack;
