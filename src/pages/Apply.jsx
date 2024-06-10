import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../pages/Footer";

// import { Burger } from "./pages/burger";
export const Apply = () => {
  return (
    <div className="bg-gradient-to-r from-slate-100 h-screen  pt-4  to-slate-300">
      <Navbar />
      {/* <Burger/> */}
      
      <div className=" text-center flex justify-center pt-28 pb-24 ">
        <div className=" overflow-hidden grid grid-cols-2  max-w-[80%] rounded-2xl bg-white drop-shadow-2xl shadow-xl ">
          <div className=" p-10 ">
            <h1 className="font-bold text-2xl mb-4">Sign In </h1>
           
            <p>use your email and password</p>
            <div className="flex justify-center items-center flex-col ">
              <input
                type="email"
                placeholder="Email"
                required
                className=" p-1 font-sans bg-slate-100 rounded max-w-[70%] flex items-center my-4 "
              />
              <input
                type="password"
                placeholder="password"
                required
                className=" p-1  bg-slate-100 rounded max-w-[70%]  flex items-center "
              />
            </div>
          <div className="flex flex-col justify-center w-full items-center text-center ">  <a href="forget" className="my-4">forget password?</a> 
          <button className="w-[50%]  rounded-lg px-4 font-semibold py-1 w[40%] border-black text-neutral-100 bg-indigo-500 tex">
              Sign in
            </button></div>
          </div>
          <div
            className=" p-10 rounded-l-full rounded-r-lg items-center text-neutral-100 bg-gradient-to-tr from-indigo-500 to-indigo-800 flex
                flex-col justify-center  text-center  h-96  "
          >
            <h1 className="font-bold text-2xl flex flex-col   ">
              Hello Friend!
            </h1>
            <p className="p-4 ">
              Register your details to use all of site features{" "}
            </p>
            <button className="border-white border rounded-lg px-4 font-semibold py-1">
              Sign Up
            </button>
          </div>
        </div>
 
      
      </div>
      <Footer/>
     
    </div>
  );
};
