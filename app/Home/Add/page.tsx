"use client"
import React, { useState, useEffect } from 'react';
import fadeIn from '../AboutUs/fadeIn';
import { motion } from 'framer-motion';

const Add=() => {
  const [chnageImage, setChangeImage] = useState<number>(0);

  const images: string[] = [
    'https://cdn.discordapp.com/attachments/1113064451806076990/1194582998566326302/navigation_1.png?ex=65b0e11d&is=659e6c1d&hm=59f75f6c5c3c9efc57c9fdb587b4a0f3432aaf9fa7d4a296e16ffa464ff23611&',
    'https://www.avisprestige.com/images/carImage/cropped/range-rover-sport-d300-autobiography-large-2.png',
    'https://cdn.discordapp.com/attachments/1113064451806076990/1197228982274371704/963e61a4d0ded9e115c5f9e7d25e1a07-removebg-preview.png?ex=65ba8160&is=65a80c60&hm=279c9bc150009e79565956f1259ebad6324764b68b35ea431e263250a6256439&',
    'https://cdn.discordapp.com/attachments/1113064451806076990/1197227999083368498/118-1181134_test-drive-a-2018-mercedes-benz-cla-class-removebg-preview.png?ex=65ba8076&is=65a80b76&hm=239f1c0d12ca985c3f9b3a960dafe3c2b5e74edf27a4b22cfce106dc2ee07f42&',
    'https://www.cupraofficial.tn/content/dam/public/cupra-website/cupra-global-navigation/models/cupra-range/x-large/cupra-formentor-model-conversion.png?imwidth=320'
  ];
  const changeImage = () => {
    setChangeImage((pr) => (pr + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(changeImage, 5000); 
    return () => clearInterval(interval); 
  }, []);


  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex">
        <motion.div
          className="flex flex-col justify-center p-4 gap-2 "
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl font-bold">CHOOSE YOUR CAR</h1>
          <h1 className="text-gray-400 text-4xl font-bold">ANYWHERE, ANYTIME</h1>
          <h1 className="text-4xl font-bold">AND ENJOY THE RIDE</h1>
          <button className="rounded w-40 h-[50px] flex justify-center ml-[90px] mt-5 items-center bg-gray-400">
            Explore Now
          </button>
        </motion.div>
        <motion.div
          className="ml-72 max-w-xl absolute-left"
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
        >
          <img src={images[chnageImage]} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Add;

