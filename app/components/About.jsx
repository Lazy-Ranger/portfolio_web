import React from "react";
import Image from "next/image";
import { assets, infoList } from "../../assets/assets";

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
                className="text-lg font-Ovo border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1"
              >
                <Image src={icon} alt={title} className="w-6 h-6" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
