import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { AnimatePresence} from 'framer-motion';
const Show = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const landpages = [
    { id: 1, img: "/land1.webp" },
    { id: 2, img: "/land2.webp" },
    { id: 3, img: "/land3.webp" },
    { id: 4, img: "/land4.webp" },
  ];

  return (
    <div className='h-screen w-screen bg-black relative'>

      <AnimatePresence>
      {/* Full view of selected image */}
      {selectedImage && (


        <motion.div initial={{h:"0%", width:"0%",opacity:0}} animate={{height:"100vh",width:"100vw" ,opacity:[0,0.4,1]}} exit={{width:"0%" ,opacity:[1,0.7,0.5,0] }} transition={{duration:1}}
          className='fixed inset-0 bg-[#ffffff3e] backdrop-blur-lg flex items-center justify-center z-50'
          onClick={() => setSelectedImage(null)} // click to close
          >
          <img
            src={selectedImage}
            alt='Selected'
            className='max-w-full max-h-full object-contain'
            />
        </motion.div>
      )}
      </AnimatePresence>

      {/* Grid of all images */}
      <div className='h-screen w-screen absolute bg-[#8f5736] flex flex-wrap justify-center items-center'>
        {landpages.map((item) => (
          <div
            key={item.id}
            className='h-[400px] w-[700px] rounded-md overflow-hidden cursor-pointer'
            onClick={() => setSelectedImage(item.img)}
          >
            <img
              src={item.img}
              alt=''
              className='h-full w-full object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
