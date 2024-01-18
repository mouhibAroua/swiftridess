"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import fadeIn from '../AboutUs/fadeIn';
import Link from 'next/link';  

const Occasion = () => {
  const [animationTriggered, setAnimationTriggered] = useState<boolean>(false);
  const scrollDown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollDown.current) {
        const down = scrollDown.current.getBoundingClientRect();
        const vs = down.top < window.innerHeight;
        setAnimationTriggered(vs);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={scrollDown}
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      animate={animationTriggered ? 'show' : 'hidden'}
      className="mt-[100px]"
    >
      <h1 className="flex justify-center font-semibold text-3xl">
        Occasion
      </h1>
            <hr className="border-t-4 border-oronge-500 mb-4 w-[180px] ml-[650px]" />


      <div className="flex justify-center space-x-40 mt-[100px]">
      <Link href={`http://localhost:3001/Home/SearchBuyOccasion/wedding` }>
        <motion.div
          className="w-[200px] text-center mb-4"
          variants={fadeIn('left', 0.6)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1191774717003182175/1195382536692568194/9d586d2acbd77481e4650fe48aea7e0a-removebg-preview.png?ex=65b3c9bd&is=65a154bd&hm=d2c2817137a72b1fe812a597db6555165bc78a4e4a8ff2c4e9a7111f64e81fc5&"/>
          <h1 className="font-semibold text-black ">Weddings</h1>
        </motion.div>
        </Link> 
        
        <Link href={`http://localhost:3001/Home/SearchBuyOccasion/daily` }>
        <motion.div
          className="w-60 text-center mb-4"
          variants={fadeIn('left', 0.7)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1113064451806076990/1195294213252857927/43801ed6-940a-4810-aef1-fc7a93783b72_1.png?ex=65b3777b&is=65a1027b&hm=99ead9082d51a60062ef7869e5007b5c509fcd5b97c5c831321bcff53a92d324&"/>
          <h1 className="font-semibold text-black ">Daily Use</h1>
        </motion.div>
        </Link>

        <Link href={`http://localhost:3001/Home/SearchBuyOccasion/daily` }>
        <motion.div
          className="w-60 text-center mb-4"
          variants={fadeIn('left', 0.8)}
        >
          <img
            src="https://www.petitforestier.com/files/images/file/9b9bab13-765e-4620-ac40-b97696266bdc/iveco-daily-1.png"/>
          <h1 className="font-semibold text-black ">Transporter</h1>
        </motion.div>
        </Link>

      </div>
    </motion.div>
  );
};

export default Occasion;
