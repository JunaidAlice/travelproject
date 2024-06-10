import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "./Footer";
// import bgImage from '../assets/images/contact1.jpeg'

export const Contact = () => {
  return (
    <div className=" bg-[url('C:\Users\maske\Desktop\travel\src\assets\images\contact1.jpg')] bg-cover bg-center ">
      <div className="">
        <div className="p-4 ">
          <Navbar />
        </div>
        <div className="text-center pt-10 justify-center flex  ">
          <div className=" max-w-fit  grid grid-cols-1 backdrop-blur-sm rounded-md font-semibold p-2">
          <h1 className="font-bold text-2xl pb-4 ">Get in Touch</h1>
          <h1 className="pb-4">
            Phone Number <span>0200000000</span>{" "}
          </h1>
          <h1 className="pb-4">
            Email : <span className="">maskedwolf211@gail.com</span>
          </h1>
          <h1 className="pb-4">
            Adress:{" "}
            <span> P.O. Box 300. Princeton, NJ 08543. 800-369-0166</span>
          </h1></div>
        </div>
      </div>
      <div className="  p-4 flex pt-8  justify-evenly">
        <div className=" grid grid-cols-1 gap-4 active:border:none">
          <input
            type="Name"
            placeholder="Name"
            className="md: w-96 md:mr-3 rounded-sm focus:outline-none  active:border-blue-600 border px-2"
          />
          <input
            type="Email"
            placeholder="Email"
            required
            className="md: w-96 md:mr-3 rounded-sm focus:outline-none  active:border-blue-600 border px-2"
          />
          <input
            type=""
            placeholder="Phone Number"
            className=" md:mr-3 rounded-sm focus:outline-none active:border-blue-600 border px-2"
          />
        </div>
        <div className="">
          <textarea
            type="text"
            placeholder="Your Message"
            className=" md:mr-3 pb-20 p-2 w-96 h-40 text-start rounded-md border focus:outline-none active:border-blue-600 "
          />
        </div>
      </div>{" "}
      <div className="flex justify-center m-4 ">
        <button className="  active:border-blue-600 border rounded-md bg-gray-500 p-2 active:bg-gray-600 font-semibold ">
          send Message
        </button>
      </div>
      <Footer />
    </div>
  );
};
