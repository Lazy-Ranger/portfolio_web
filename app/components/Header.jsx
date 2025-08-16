import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import {motion} from 'motion/react'

const Header = () => {
  return (
    <div id="home" className="w-10/11 max-w-3Xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{scale: 0.5}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: "spring", stiffness: 100}}
      >
        <Image src={assets.profile_img} alt="" className="w-22 rounded-full" />
      </motion.div>
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
          className="px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex item-center gap-2 dark:bg-transparent"
        >
          Contact{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-5" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-4 dark:bg-white dark:text-black"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-6" />
        </a>
      </div>
    </div>
  );
};

export default Header;
