import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { W3_CONFIG } from "../../config";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `$}{${W3_CONFIG.API_KEY}`);

    const response = await fetch(`${W3_CONFIG.URL}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-24">
      <h4 className="text-center mb-2 text-lg font-Ovo">Contact with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo">
        I'd love to hear from you! If you have any questions or feedback, please
        use the form below to get in touch. I'm always happy to hear from you!
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-6 mb-8">
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
          row="6"
          placeholder="Enter your message"
          id=""
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex item-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
