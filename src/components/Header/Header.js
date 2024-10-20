import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
function Header() {
  const [Logging, setLogging] = useState(false);
  const [loggingBox, setloggingBox] = useState(false);
  const [Text, setText] = useState();
  const [Email, setEmail] = useState();
  const [Name, setName] = useState();
  return (
    <>
      <header className="w-full bg-transparent">
        <div className="container px-8 flex text-white">
          <div
            className="absolute z-10 h-64 w-64 rounded-full
             bg-cnBlue-20/10 sm:h-80 sm:w-80 lg:h-34rem lg:w-34rem 
             -top-20 left-1/2 -translate-x-1/2 opacity-0 blur-[100px]
              transition-opacity dark:opacity-100 sm:-top-28 
              lg:top-[-20rem] lg:blur-[220px] "
            style={{ backgroundColor: "rgb(255, 138, 0)" }}
          ></div>
          <div className="w-1/3 mt-7 ">
            <NavBar />
            <div className="hidden md:block font-serif">
              <NavLink
                to="/"
                className={(NavData) =>
                  NavData.isActive ? "text-orange-600 me-4" : "me-4"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/Cources"
                className={(NavData) =>
                  NavData.isActive ? "text-orange-600 me-4" : "me-4"
                }
              >
                Cources
              </NavLink>
              <NavLink
                to="/About-us"
                className={(NavData) =>
                  NavData.isActive ? "text-orange-600 me-4" : "me-4"
                }
              >
                About-us
              </NavLink>
              <NavLink
                to="/Contact"
                className={(NavData) =>
                  NavData.isActive ? "text-orange-600 me-4" : "me-4"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="w-1/3 ">
            <div className="h-20 w-24 bg-orange-600 top-0 rounded-b-xl relative mx-auto z-30">
              <h2 className="text-white bg-orange-600 font font-bold absolute mt-6 text-center w-full ">
                Elearning
              </h2>
            </div>
          </div>
          <div className="w-1/3 cursor-pointer text-3xl mt-8">
            {Name ? (
              <FaUserCircle
                className="ms-auto"
                onClick={() => {
                  setloggingBox(true);
                }}
              />
            ) : (
              <FaRegUserCircle
                className="ms-auto"
                onClick={() => {
                  !loggingBox ? setloggingBox(true) : setloggingBox(false);
                }}
              />
            )}
            {Name && (
              <h3 className="uppercase text-base font-semibold text-end mt-1">
                {Name}
              </h3>
            )}
            {loggingBox && (
              <div className="text-white w-36 bg-gray-600 ms-auto rounded-md rounded-se-none z-50">
                <label className="text-sm text-white px-2 bg-gray-600">
                  Name:
                </label>
                <input
                  type="text"
                  className="rounded-xl ms-4 w-4/5 h-7 text-base font-semibold uppercase "
                  required
                  onChange={(e) => setText(e.target.value)}
                />
                {!Text && (
                  <h4 className="text-red-700 font-bold text-[15px] px-2 bg-gray-600">
                    Name is requierd
                  </h4>
                )}
                <label className="text-sm text-white px-2 bg-gray-600">
                  Email:
                </label>
                <input
                  type="email"
                  className="rounded-xl ms-4 w-4/5 h-7 text-base font-semibold"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {!Email && (
                  <h4 className="text-red-700 font-bold text-[15px] px-2 bg-gray-600">
                    Email is requierd
                  </h4>
                )}
                <div className="flex gap-2 justify-center bg-gray-600 rounded-md">
                  <button
                    onClick={() => {
                      setloggingBox(false);
                      setName(Text);
                    }}
                    disabled={(!Text || !Email) && true}
                    className="text-sm bg-green-600 p-2 rounded-lg my-3"
                  >
                    LogIn
                  </button>
                  <button
                    onClick={() => {
                      setloggingBox(false);
                      setName();
                    }}
                    className="text-sm bg-red-600 p-2 rounded-lg my-3"
                  >
                    LogOut
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
