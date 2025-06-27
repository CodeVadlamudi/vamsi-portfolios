"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { SocialIcon } from "react-social-icons";

function DockHover() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <SocialIcon url="https://vamsi-portfolio-ten.vercel.app/" bgColor="transparent" fgColor="#fff" />
        </DockIcon>
        <DockIcon>
          <SocialIcon
            network="instagram"
            bgColor="transparent"
            fgColor="#fff"
          />
        </DockIcon>
        <DockIcon>
          <SocialIcon network="twitch" bgColor="transparent" fgColor="#fff" />
        </DockIcon>
        <DockIcon>
          <SocialIcon url="https://www.linkedin.com/in/vamsi-vadlamudi-52173b1aa/" bgColor="transparent" fgColor="#fff" />
        </DockIcon>
      </Dock>
    </div>
  );
}

export default DockHover;
