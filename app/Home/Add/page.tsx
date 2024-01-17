"use client"
import fadeIn from '../AboutUs/fadeIn';
import { motion } from 'framer-motion';
const Add = () => {
    return ( 
        <div className="flex items-center justify-center mt-20">
      <div className="flex">
        <motion.div
          className="flex flex-col justify-center p-4 gap-2"
          variants={fadeIn('right', 0.4)} 
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl font-bold">CHOOSE YOUR CAR</h1>
          <h1 className="text-gray-400 text-4xl font-bold">ANY WHERE, ANY TIME</h1>
          <h1 className="text-4xl font-bold">AND ENJOY THE RIDE</h1>
          <button className="rounded w-40 h-[50px] flex justify-center ml-[90px] mt-5 items-center bg-gray-400">
            Explore Now
          </button>
        </motion.div>
        <motion.div
          className="ml-72"
          variants={fadeIn('left', 0.4)} 
          initial="hidden"
          animate="show"
        >
          <img
            src="https://cdn.discordapp.com/attachments/1113064451806076990/1194582998566326302/navigation_1.png?ex=65b0e11d&is=659e6c1d&hm=59f75f6c5c3c9efc57c9fdb587b4a0f3432aaf9fa7d4a296e16ffa464ff23611&"
            alt=""/>
        </motion.div>
      </div>
    </div>
    );
}
 
export default Add;
