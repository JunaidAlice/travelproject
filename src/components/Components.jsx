import React from "react";
import { Navbar } from "./Navbar";
import Hero from "./Hero";
// import React, { PureComponent } from 'react'





export const Components = () => {
  return (
    <div className="p-4 bg-cover bg-center h-screen bg-[url('C:\Users\maske\Desktop\travel\src\assets\images\background.jpg')]">
      <Navbar />
      <Hero />
      {/* <CardComponents />  */}
    </div>
  );
};
