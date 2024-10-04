import React from "react";

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4
              className="text-5xl font-bold"
              style={{
                color: "#4B6F44",
                textShadow: "1px 1px 0 #000",
              }}
            >
              Connect with us
            </h4>
            <h5 className="text-lg mt-2 mb-2 text-gray-700">
              Stay connected to get the latest updates and discover our
              sustainability initiatives.
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-linkedin"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 flex flex-col items-end">
            <h4
              className="text-5xl font-bold"
              style={{
                color: "#4B6F44",
                textShadow: "1px 1px 0 #000",
              }}
            >
              More Information
            </h4>
            <a className="text-xl text-gray-700 mt-2 hover:text-black cursor-pointer">
              Privacy Policy
            </a>
            <a className="text-xl text-gray-700 mt-2 hover:text-black cursor-pointer">
              Terms of Service
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Foodiliser by{" "}
              <a
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Winners
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
