import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-24">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row item-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none border">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 mx-w-2xl font-Ovo">
            I am experienced in the field of web development, and I have a
            passion for creating innovative and user-friendly websites. I ams
            proficient in HTML, CSS, and JavaScript, and I have experience in
            building responsive and mobile-friendly web applications.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="text-lg font-Ovo border-[0.5px] hover:shadow-dark border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
              >
                <Image src={icon} alt={title} className="w-6 h-6" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4>Tool we use</h4>
          <ul className="flex item-center gap-3 sm-gap-5">
            {toolsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-center w-20 sm:w-14 border aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <Image src={item} alt="Tool" className="w-6 h-6" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
