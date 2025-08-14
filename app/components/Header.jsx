import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-10/11 max-w-3Xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="w-22 rounded-full" />
      </div>
      <h3>
        Hi! i am Nitish
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1>Full stack Developer based in Noida</h1>
      <p>
        I am a full stack developer with a strong background in web development.
        I have experience in building scalable and high-performance web
        applications using various technologies such as React, Node.js, Express,
        MongoDB, and GraphQL. I am also proficient in working with popular
        frameworks like Next.js, NextAuth.js, and Tailwind CSS.
      </p>
      <div className="flex flex-col sm:flex-row item-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex item-center gap-2"
        >
          Contact{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-5" />
        </a>
        <a
          href="/sample_resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex item-center gap-4"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-5" />
        </a>
      </div>
    </div>
  );
};

export default Header;
