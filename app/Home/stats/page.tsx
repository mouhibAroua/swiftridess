"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import fadeIn from '../AboutUs/fadeIn';

const StatsSection: React.FC = () => {
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

  const stats = [
    {
      data: 450,
      title: "Cars For Rent"
    },
    {
      data: 800,
      title: "Happy Clients"
    },
    {
      data: 750,
      title: "Rental Locations"
    },
  ];

  const [countedStats, setCountedStats] = useState(stats.map(stat => ({ ...stat, current: 0 })));
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 1 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    let stepMultiplier = 1;

    const interval = setInterval(() => {
      setCountedStats((prevStats) =>
        prevStats.map((stat) => {
          const step = Math.ceil(stat.data / (30 * stepMultiplier));
          const nextValue = stat.current + step;
          return {
            ...stat,
            current: nextValue >= stat.data ? stat.data : nextValue,
          };
        })
      );
      if (countedStats.every(stat => stat.current === stat.data)) {
        clearInterval(interval);
      }

      stepMultiplier *= 1.05;
    }, 10);
  };

  return (
    <motion.div
      ref={scrollDown}
      variants={fadeIn('right', 0.4)}
      initial="hidden"
      animate={animationTriggered ? 'show' : 'hidden'}
    >
      <section ref={statsSectionRef} className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-black text-3xl font-semibold sm:text-4xl">
            </h3>
            <p className="mt-3">
            </p>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:flex-wrap lg:divide-x">
              {countedStats.map((item, idx) => (
                <li key={idx} className="text-center px-2 md:px-20">
                  <h4 className="text-4xl text-black font-semibold">+ {item.current}</h4>
                  <hr className="border-t-4 border-oronge-500 w-16 rotate-90 mr-[150px]"/>
                  <p className="mt-3 font-medium text-black">{item.title}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default StatsSection;

