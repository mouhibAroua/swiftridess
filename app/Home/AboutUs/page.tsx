"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import fadeIn from './fadeIn';

const AboutUs = () => {
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
      className="mt-[100px] p-6  bg-gray-600" 
      ref={scrollDown}
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      animate={animationTriggered ? 'show' : 'hidden'}
    >
      <h1 className="flex justify-center font-semibold text-3xl">
        Unmatched excellence and customer satisfaction
      </h1>

      <motion.div className="w-[900px] ml-60 mt-20" variants={fadeIn('down', 0.6)}>
        <motion.img
          src="https://images2.imgbox.com/7f/62/9xR78TOz_o.png"
          alt=""
          variants={fadeIn('left', 0.6)}
        />
        <p className="text-center mt-4 text-2xl">
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </p>
      </motion.div>

      <div className="flex ml-[70px] mt-[100px] space-x-40">
        <div className="flex text-center font-medium italic"></div>
      </div>
    </motion.div>
  );
};

export default AboutUs;