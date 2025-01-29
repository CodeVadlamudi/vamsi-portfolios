"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface SkillCardProps {
  img: string;
  title: string;
  bgColor: string;
}

function SkillCard({ img, title, bgColor }: SkillCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="cursor-pointer rounded-lg shadow w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative group overflow-hidden border-white/10 border"
    >
      <Image
        src={img}
        alt={title}
        className={bgColor}
        fill={true}
        priority={true}
      />
    </motion.div>
  );
}
export default SkillCard;
