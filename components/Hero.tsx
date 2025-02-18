"use client";

import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import DockHover from "./DockHover";

function Hero() {
  const [text] = useTypewriter({
    words: ["Vamsi Vadlamudi", "<ButLoveCodeMore />", "Code with Vamsi"],
    loop: true,
    deleteSpeed: 50,
  });
  return (
    <section className="min-h-screen flex flex-col items-center justify-center overflow-hidden max-w-screen-md mx-auto px-10">
      <div className="flex flex-col-reverse items-center justify-center gap-10">
        {/* Hero Details */}
        <div className="text-center space-y-5">
          <h5 className="uppercase tracking-[7px] font-medium text-gray-400">
            React Front-End Developer
          </h5>
          <h1 className="text-2xl md:text-4xl font-bold">
            I am <span className="text-orange-500">{text}</span>
            <Cursor cursorColor="#f97316" />
          </h1>
          <p className="md:text-lg">
            A passionate Front-End Developer focused on being a Software
            Developer and based in Vijayawada, AP, India.
          </p>

          <DockHover />
        </div>

        {/* Hero Image */}
        <div className="relative h-60 w-60 sm:h-72 sm:w-72 overflow-hidden rounded-lg">
          <Image
            src="/images/vamsi-img.png"
            alt="Vamsi Image"
            fill={true}
            priority={true}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
