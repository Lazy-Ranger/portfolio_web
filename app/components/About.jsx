import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-24 bo">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row item-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p>
            I am experienced in the field of web development, and I have a
            passion for creating innovative and user-friendly websites. I am
            proficient in HTML, CSS, and JavaScript, and I have experience in
            building responsive and mobile-friendly web applications.
          </p>
          <p>
            I have a strong understanding of web design principles and
            technologies, and I am skilled in using HTML, CSS, and JavaScript to
            create visually appealing and interactive web pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
