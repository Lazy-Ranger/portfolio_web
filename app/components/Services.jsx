import React from "react";
import { assets, serviceData } from "../../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="service" className="w-full px-[12%] py-10 scroll-mt-24">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo">
        I a full stack developer with a passion for creating innovative and
        user-friendly websites. I am proficient in HTML, CSS, and JavaScript,
        and I have experience in building responsive and mobile-friendly web
        applications.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData?.map(({ icon, title, description, link }, index) => (
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:shadow-dark hover:-translate-y-1 duration-500">
            <Image src={icon} alt="Service" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex item-center gap-2 text-sm mt-5">Read More <Image src={assets.right_arrow} alt="Read More" className="w-4" /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
