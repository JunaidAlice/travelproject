import React from "react";
import { Link } from "react-router-dom";
// import Apply from '/pages/Apply

export const Navbar = () => {
  const applyLink = [
    {
      title: "Creat Account",
      href: "/apply",
    },
  ];

  const NavLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Tour",
      href: "/tour",
    },
  ];
  return (
    <header className=" flex justify-between items-center ">
      <div className=" ">
        {" "}
        <h1 className="font-bold   cursor-pointer active:ring-blue-500  rounded-md px-4 py-1 ">
          FoG
          <span className=" font-semibold underline underline-offset-2">
            Travels
          </span>{" "}
        </h1>
      </div>
      <div className="flex gap-8 font-semibold ">
        <div className=" flex items-center">
          <ol className="Buttons  flex gap-6 mr-3 ">
            {NavLinks.map((l, ind) => (
              <Link to={`${l.href}`} key={ind}>
                <li className=" active:ring-cyan-500 hover:cursor-pointer rounded-lg hover:shadow-lg px-2">
                  {l.title}
                </li>
              </Link>
            ))}
            {/* <li className=" active:ring-cyan-500 hover:cursor-pointer rounded-lg hover:shadow-lg px-2">
              Home
            </li>
            <Link to={'about'}>
            <li className=" active:ring-cyan-500 hover:cursor-pointer rounded-lg hover:shadow-lg px-2">
              About
            </li>
            </Link>
            <Link to={'contact'}>

            <li className=" active:ring-cyan-500 hover:cursor-pointer rounded-lg hover:shadow-lg px-2">
              Contact
            </li>
            </Link>
            <li className=" active:ring-cyan-500 hover:cursor-pointer rounded-lg hover:shadow-lg px-2">
              Tour
            </li> */}
          </ol>
        </div>
        <div className="flex gap-4 ml-4">
          {applyLink.map((g, ind) => (
            <Link
              to={`${g.href}`}
              key={ind}
              className="px-4 py-1 flex items-center font-semibold rounded-md bg-orange-500 hover:shadow-lg active:bg-orange-400 mr-2 "
            >
              {g.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
