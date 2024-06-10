import React from "react";


const Card1 = ({ card }) => 
{
  
 
  return (
    <div className="flex  justify-around mt-20   ">
      <div
        className="max-w-sm rounded  shadow-lg transform 
      transition duration-300 hover:scale-105 bg-cover bg-center mb-4 "
        style={{ backgroundImage: `url(${card.bgImage})` }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{card.title}</div>
          <p className="text-white text-base lg:text-left sm:text-center">{card.para}</p>
<a href={card.href} target="_blank">
          <button className="px-4 py-1  font-semibold rounded-md mt-8
           bg-orange-500 hover:shadow-lg active:bg-orange-400  ml-4 " >
         Explore
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Card1;
