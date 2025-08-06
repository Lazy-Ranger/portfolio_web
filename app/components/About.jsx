import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";


const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-24">
      <h4 className="text-center mb-2 text-lg font-Ovo" >About Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Introduction</h2>
      <div>
        <div>
            <Image src={assets.user_image} alt="" className="w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
