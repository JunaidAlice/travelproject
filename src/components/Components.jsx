import React, { lazy } from "react";
import { Navbar } from "./Navbar";
import Hero from "./Hero";
// import React, { PureComponent } from 'react'





export const Components = () => {
  return (
    <div className="p-4 bg-cover bg-center h-screen bg-[url('./assets/images/background.jpg')]">
      <Navbar />
      <Hero onload={lazy} />
      {/* <CardComponents />  */}
    </div>
  );
};
