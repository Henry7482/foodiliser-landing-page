import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import backgroundImage from "../assets/img/background-1.jpeg";
import mobileAppUI1 from "../assets/img/UI_test.png";
import mobileFrame from "../assets/img/iphone-frame.png";
import mobileAppUI3 from "../assets/img/iphone-frame.png";
import problemAndSolution from "../assets/img/problem&solution.png";
import bagImge from "../assets/img/bags.png";

export const OLIVE_GREEN = "#4B6F44";
export const SAGE_GREEN = "#8B9E77";
export const LIGHT_BEIGE = "#EDE9D5";
export const TAUPE = "#9C786C";
export const TERRACOTTA = "#D98E56";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 mb-23 flex content-center items-center justify-center"
          style={{
            minHeight: "100vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1
                    className=" font-semibold text-5xl"
                    style={{
                      color: TERRACOTTA,
                      textShadow: " -1px -1px 0 #fff",
                    }}
                  >
                    WASTE LESS, GAIN MORE
                  </h1>
                  <h2 className=" mt-2 text-gray-300 font-semibold text-2xl">
                    Practical Food Waste Solutions for QSRs
                  </h2>
                  <p
                    className="mt-4 text-xl text-gray-300"
                    style={{ paddingInline: "5rem" }}
                  >
                    Transform food waste into environmental and business value
                    with tailored solutions that drive impact and profitability
                  </p>
                  <button
                    className="mt-6 rounded-full text-white text-2xl font-semibold custom-button"
                    style={{
                      backgroundColor: SAGE_GREEN,
                      padding: "0.7rem 4rem",
                      boxShadow:
                        "0 4px 6px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
                className="fill-current"
                style={{ color: LIGHT_BEIGE, fontWeight: 300 }}
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}
        </div>
        <section>
          <img alt="problems and solutions" src={problemAndSolution}></img>
        </section>
        <section
          className="relative pb-20 -mt-24"
          // style={{ backgroundColor: LIGHT_BEIGE }}
        >
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
                className="fill-current"
                style={{ color: SAGE_GREEN, fontWeight: 300 }}
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  style={{ backgroundColor: LIGHT_BEIGE }}
                >
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                      style={{
                        backgroundColor: TERRACOTTA,
                        color: LIGHT_BEIGE,
                      }}
                    >
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <h6 className="text-2xl font-semibold">Reduced Costs</h6>
                    <p className="mt-2 mb-4 text-gray-600 text-lg">
                      Implement efficient waste management to cut disposal fees.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  style={{ backgroundColor: LIGHT_BEIGE }}
                >
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                      style={{
                        backgroundColor: TERRACOTTA,
                        color: LIGHT_BEIGE,
                      }}
                    >
                      <i className="fas fa-seedling"></i>
                    </div>
                    <h6 className="text-2xl font-semibold">
                      Boost Sustainability
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600 text-lg">
                      Repurpose waste into valuable products like fertiliser.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg"
                  style={{ backgroundColor: LIGHT_BEIGE }}
                >
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full "
                      style={{
                        backgroundColor: TERRACOTTA,
                        color: LIGHT_BEIGE,
                      }}
                    >
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h6 className="text-2xl font-semibold">Increase Profits</h6>
                    <p className="mt-2 mb-4 text-gray-600 text-lg">
                      Unlock new revenue streams with repurposed products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-wrap items-center"
              style={{ marginTop: "7rem ", marginBottom: "10rem" }}
            >
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div
                    className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full"
                    style={{
                      backgroundColor: TAUPE,
                      color: LIGHT_BEIGE,
                      fontWeight: "600",
                    }}
                  >
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-4xl font-semibold">
                    Our Range of Offerings
                  </h3>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex">
                        <div>
                          <span
                            className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                            style={{
                              backgroundColor: TAUPE,
                              color: LIGHT_BEIGE,
                              fontWeight: "600",
                            }}
                          >
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Waste Collection
                          </h4>
                          <p className="text-lg leading-relaxed text-gray-600">
                            Streamlined processes for gathering and sorting food
                            waste.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex">
                        <div>
                          <span
                            className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                            style={{
                              backgroundColor: TAUPE,
                              color: LIGHT_BEIGE,
                              fontWeight: "600",
                            }}
                          >
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Digital & Physical Infrastructure
                          </h4>
                          <p className="text-lg leading-relaxed text-gray-600">
                            Use technology for waste tracking and optimisation.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex">
                        <div>
                          <span
                            className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                            style={{
                              backgroundColor: TAUPE,
                              color: LIGHT_BEIGE,
                              fontWeight: "600",
                            }}
                          >
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Recycling & Repurposing
                          </h4>
                          <p className="text-lg leading-relaxed text-gray-600">
                            Turn waste into fertiliser, animal feed, or other
                            products.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex">
                        <div>
                          <span
                            className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                            style={{
                              backgroundColor: TAUPE,
                              color: LIGHT_BEIGE,
                              fontWeight: "600",
                            }}
                          >
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            Revenue Strategies
                          </h4>
                          <p className="text-lg leading-relaxed text-gray-600">
                            Increase profits through waste-to-value initiatives.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={bagImge}
                />
              </div>

              {/* <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
                  style={{ backgroundColor: OLIVE_GREEN }}
                >
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-current"
                        style={{ color: OLIVE_GREEN, fontWeight: 600 }}
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* <section className="relative py-20">
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
                className="fill-current"
                style={{ color: SAGE_GREEN, fontWeight: 300 }}
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
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
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div
                    className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full"
                    style={{
                      backgroundColor: TAUPE,
                      color: LIGHT_BEIGE,
                      fontWeight: "600",
                    }}
                  >
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                            style={{
                              backgroundColor: TAUPE,
                              color: LIGHT_BEIGE,
                              fontWeight: "600",
                            }}
                          >
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                            style={{
                              backgroundColor: TAUPE,
                              color: LIGHT_BEIGE,
                              fontWeight: "600",
                            }}
                          >
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                            style={{
                              backgroundColor: TAUPE,
                              color: LIGHT_BEIGE,
                              fontWeight: "600",
                            }}
                          >
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="relative pt-20 pb-48"
          style={{ backgroundColor: SAGE_GREEN }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12">
                <h2
                  className="text-white text-6xl font-semibold"
                  style={{ textShadow: "1px 1px 0 #000" }}
                >
                  Our Product
                </h2>
                {/* <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p> */}
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center relative w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div
                  className="mobile-ui relative px-6"
                  style={{ width: "20rem", height: "33rem" }}
                >
                  <img
                    alt="UI"
                    src={mobileAppUI1}
                    className="shadow-lg rounded-lg w-full h-full mx-auto"
                    style={{
                      objectFit: "fill",
                      width: "87%",
                      height: "98%",
                      paddingTop: "5%",
                    }}
                  />
                  <img
                    alt="iPhone Frame"
                    src={mobileFrame}
                    className="absolute top-0  w-full h-full"
                    style={{ maxWidth: "80%", left: "10%" }}
                  />
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Track Food Waste</h5>
                </div>
              </div>
              <div className="flex flex-col items-center relative w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div
                  className="mobile-ui relative px-6"
                  style={{ width: "20rem", height: "33rem" }}
                >
                  <img
                    alt="UI"
                    src={mobileAppUI1}
                    className="shadow-lg rounded-lg w-full h-full mx-auto"
                    style={{
                      objectFit: "fill",
                      width: "87%",
                      height: "98%",
                      paddingTop: "5%",
                    }}
                  />
                  <img
                    alt="iPhone Frame"
                    src={mobileFrame}
                    className="absolute top-0  w-full h-full"
                    style={{ maxWidth: "80%", left: "10%" }}
                  />
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">
                    Track Composting Process
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center relative w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div
                  className="mobile-ui relative px-6"
                  style={{ width: "20rem", height: "33rem" }}
                >
                  <img
                    alt="UI"
                    src={mobileAppUI1}
                    className="shadow-lg rounded-lg w-full h-full mx-auto"
                    style={{
                      objectFit: "fill",
                      width: "87%",
                      height: "98%",
                      paddingTop: "5%",
                    }}
                  />
                  <img
                    alt="iPhone Frame"
                    src={mobileFrame}
                    className="absolute top-0  w-full h-full"
                    style={{ maxWidth: "80%", left: "10%" }}
                  />
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Home Page</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
