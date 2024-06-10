import React from "react";
import Card1 from "../Cardscomponents/Card1";
import bgImage1 from "../assets/images/1.jpg";
import bgImage2 from "../assets/images/2.jpeg";
import bgImage3 from "../assets/images/3.jpg";
import bgImage4 from "../assets/images/4.jpg"
import bgImage5 from "../assets/images/5.jpg"
import bgImage6 from "../assets/images/6.jpg"
import bgImage7 from "../assets/images/7.jpg"

import bgImage8  from '../assets/images/8.jpg'
import bgImage9  from '../assets/images/9.jpg'
import bgImage10  from '../assets/images/10.jpg'
import { Navbar } from "../components/Navbar";
import { Footer } from "./Footer";
import { HiRefresh } from "react-icons/hi";

export const Tour = () => {
  // const bgImage =[
  //   {  title:"img1",
  //     background:"url../assets/images/1.jpg"
  //   },
  //   {title:"img1",
  //     background:"url../assets/images/2.jpg"
  //   },
  //   {title:"img1",
  //     background:"url../assets/images/1.jpg"
  //   }
  // ]
  const card = [
    {
      title: "Gappa Valley",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage1,
      href:"https://maps.app.goo.gl/mLHSndB3dtZtqott9",
    },
    {
      title: "Bar Valley",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage2,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },
    {
      title: "Daiter Valley",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage3,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },
    {
      title: "Funder Valley",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage4,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },
    {
      title: "passu cones",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage5,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },
    {
      title: "Shaney Glacier",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage6,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },
    {
      title: "Hoper Glacier",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage7,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
      
    },
    {
      title: "Daiter Valley56",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage8,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },
    {
      title: "Daiter Valley6",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage9,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },{
      title: "Rakaposhi base camp 1",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
      btn: "Explore",
      bgImage: bgImage10,
      href:'https://maps.app.goo.gl/mLHSndB3dtZtqott9',
    },
  ];
  return (
    <>
      <div className="p-4 ">
        <Navbar />
      </div>
      <div className="text-3xl flex justify-center   font-serif">
        Popular Distination
      </div>
      <div className="grid grid-cols-3 gap-6  shadow-lg drop-shadow-md   ">
        {card.map((b, ind) => (
          <Card1 key={ind} card={b} />
        ))}
      </div>
      <div className="">
      <Footer /></div>
    </>
  );
};
