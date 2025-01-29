"use client";

import { motion } from "motion/react";
import Image from "next/image";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative lg:flex-row container px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-28 md:top-32 uppercase font-medium tracking-[10px] text-lg md:text-xl lg:text-2xl text-gray-400">
        About
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-72 sm:h-80 w-96 md:w-full lg:w-96 md:h-96 lg:h-full xl:h-[450px] overflow-hidden rounded-lg mx-auto"
        >
          <Image
            src="/images/about-img.jpg"
            alt="Profile"
            fill={true}
            priority={true}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-orange-500">little</span>{" "}
            background:
          </h2>
          <p className="text-gray-200">
            Hello, I'm Vamsi Vadlamudi, a dedicated Front-End Developer
            passionate about crafting engaging and responsive web experiences.
            Driven by a commitment to excellence, I tackle daily challenges to
            grow and refine my skills. Recently, my deep dive into React has
            helped enhance our web pages, advancing my development expertise.
          </p>
          <p className="text-gray-200">
            I am dedicated to supporting the deaf community by teaching coding
            and providing guidance. My goal is to empower talented individuals
            in the deaf community by helping them find meaningful employment
            opportunities.
          </p>
          <p className="text-gray-200">
            I have been learning Mobile Application Development with React
            Native, which I apply in my personal work. This motivates me to
            pursue new courses that will enhance my skills and contribute to the
            growth of our company and its people.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
export default About;
