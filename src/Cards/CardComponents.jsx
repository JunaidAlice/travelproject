import React from "react";
import Card1 from "../Cardscomponents/Card1";
import bgImage1 from "../assets/images/1.jpg"
import bgImage2 from "../assets/images/2.jpeg"
import bgImage3 from "../assets/images/3.jpg"

export const CardComponents = () => {
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
  const card =[
    
  {
    title: "Gappa Valley",
    para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
    btn: "profile",
    bgImage: bgImage1,
  },
  {
    title: "Bar Valley",
    para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
    btn: "profile",
    bgImage: bgImage2,
  },
  {
    title: "Daiter Valley",
    para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem ullam pariatur iusto molestiae eligendi, voluptate soluta! Quo, iste doloribus.",
    btn: "profile",
    bgImage: bgImage3,
  },
  ]
  return (
    <>
    <div className="text-3xl flex justify-center   font-serif">
      Popular Distination
    </div>
    <div className="grid grid-cols-3 gap-6 ">
    {  card.map((b,ind)=>(
        <Card1 key={ind} card={b}/>
      ))}
    </div></>
  );
};
