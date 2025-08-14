import React from "react";
import Image from "next/image";
import { workData, assets } from "../../assets/assets";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-24">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo">
        Welome to my portfolio, here you can see my latest work, I am a full
        stack developer with a passion for creating innovative and user-friendly
        websites. I am proficient in HTML, CSS, and JavaScript, and I have
        experience in building responsive and mobile-friendly web applications.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10">
        {workData.map((project, index) => {
          return (
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 
              left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
               justify-between duration-500 group-hover:bottom-7"
              >
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div
                  className="border rounded-full border-black w-9 aspect-square flex item-center justify-center
                  shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transaction
                "
                >
                  <Image src={assets.send_icon} alt="" className="w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
        border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show more <Image src={assets.right_arrow_bold} alt="" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
