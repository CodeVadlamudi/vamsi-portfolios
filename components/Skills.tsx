"use client";

import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="h-screen flex items-center justify-center w-full relative px-8 container mx-auto">
      <div className="absolute top-28 md:top-32 uppercase font-medium text-center space-y-2">
        <h3 className="tracking-[10px] text-lg md:text-xl lg:text-2xl text-gray-300">
          Skills
        </h3>
        <p className="tracking-[5px] text-base text-gray-300">
          Hover over a skill for current proficiency
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
        <SkillCard
          img="https://imgur.com/YrHaU0E.png"
          title="HTML"
          bgColor="bg-[#fc490b]/10 hover:bg-[#fc490b]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
        <SkillCard
          img="https://imgur.com/S15Akwm.png"
          title="CSS"
          bgColor="bg-[#663399]/10 hover:bg-[#663399]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
        <SkillCard
          img="https://imgur.com/x2iwDhO.png"
          title="JavaScript"
          bgColor="bg-[#f7e01d]/10 hover:bg-[#f7e01d]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
        <SkillCard
          img="https://imgur.com/OS6Pait.png"
          title="React"
          bgColor="bg-[#61dbfb]/10 hover:bg-[#61dbfb]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
        <SkillCard
          img="https://imgur.com/JTT3eTD.png"
          title="Tailwind CSS"
          bgColor="bg-[#14b4c6]/10 hover:bg-[#14b4c6]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
        <SkillCard
          img="https://imgur.com/mbkleDt.png"
          title="Next.JS"
          bgColor="bg-[#ffffff]/10 hover:bg-[#ffffff]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
        <SkillCard
          img="https://imgur.com/Bblwqn4.png"
          title="Sass"
          bgColor="bg-[#cd6699]/10 hover:bg-[#cd6699]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
        <SkillCard
          img="https://imgur.com/jRX7cre.png"
          title="Figma"
          bgColor="bg-[#a08cf8]/10 hover:bg-[#a08cf8]/20 duration-300 w-full h-full p-4 sm:p-6 lg:p-10 object-contain"
        />
      </div>
    </section>
  );
}
export default Skills;
