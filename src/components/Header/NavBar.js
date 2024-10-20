import React, { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
function NavBar() {
  const [NavBar, setNavBar] = useState(true);
  return (
    <>
      <div className="container cursor-pointer">
        {NavBar ? (
          <HiBars3CenterLeft
            className="text-4xl sm:hidden"
            onClick={() => {
              setNavBar(false);
            }}
          />
        ) : (
          ""
        )}
        {!NavBar && (
          <div className="border-e-2 absolute top-0 w-1/3 text-white flex flex-col left-0 h-[100vh] text-md duration-200 z-50">
            <IoIosCloseCircle
              className=" text-3xl ms-auto m-2 mb-0 sm:hidden text-red-700"
              onClick={() => {
                setNavBar(true);
              }}
            />
            <h1 className="text-2xl mx-auto border-b border-orange-600 rounded-xl shadow shadow-orange-700 p-2 my-4">
              Elearning
            </h1>
            <NavLink
              to="/"
              className={(NavData) =>
                NavData.isActive ? "px-4 py-3 text-orange-500" : "px-4 py-3"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/productList"
              className={(NavData) =>
                NavData.isActive ? "px-4 py-3 text-orange-500" : "px-4 py-3"
              }
            >
              COURCES
            </NavLink>
            <NavLink
              to="/about-us"
              className={(NavData) =>
                NavData.isActive ? "px-4 py-3 text-orange-500" : "px-4 py-3"
              }
            >
              ABOUT-US
            </NavLink>
            <NavLink
              to="/contact"
              className={(NavData) =>
                NavData.isActive ? "px-4 py-3 text-orange-500" : "px-4 py-3"
              }
            >
              CONTACT
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
