import React from "react";
import Card from "./components/Card";
import Divider from "./components/Divider";
import Nav from "./components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="container mx-auto p-5 ">
      <Nav />
      <section className="px-3 text-center space-y-2 py-10 sm:space-y-6">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Life Planning, Making
          <br />
          Easy to Turn Dreams a Reality.
        </h1>
        <p className="text-xl">Get Exclusive offers on purchase of any plans</p>
        <div className="space-x-3 pt-5 px-2 space-y-2 justify-center sm:flex sm:space-y-0">
          <div className="relative flex items-center w-80 mx-auto sm:mx-0">
            <span className="w-8 absolute left-0 inset-y-0 flex items-center pl-3 text-black pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Your Email"
              className="pl-10 pr-10 py-2 w-full border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-black placeholder:text-black placeholder:font-medium"
            />
          </div>
          <button className="rounded-full bg-black px-6 py-1 h-10 font-medium text-white sm:h-auto">
            Sign up
          </button>
        </div>
      </section>
      <section className="space-y-6">
        <span className="flex items-end justify-between container">
          <h2 className="font-bold text-2xl">Feature Plans</h2>
          <h2 className="font-bold text-sm sm:text-lg">Explore All</h2>
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          <Card
            title="Money Momentum"
            message="Troct Premium helps you start saver investments insights covering."
            classProps="bg-[#5ecca0]"
            darkMode={false}
            percent={"7.20%"}
          />
          <Card
            title="Long-Term"
            message="Create a vision. TO get started, imagine life."
            classProps="bg-[#0a0a0a]"
            darkMode={true}
            percent={"14.20%"}
          />
          <Card
            title="Focussed"
            message="Be focused Life phoning. however, can serve as o roadmap or guide."
            classProps="bg-[#cb9bfa]"
            darkMode={false}
            percent={"11.20%"}
          />
          <Card
            title="Fixed Income"
            message="Get multiple benefits, and lumpsum option & Guaranteed Returns."
            classProps="bg-[#f8fd91]"
            darkMode={false}
            percent={"8.20%"}
          />
        </div>
      </section>

      <footer className="flex flex-col py-5 gap-4">
        <Divider classProps="border-slate-300" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <a href="https://fahadsaleem.com">Terms Policy</a>
            <span>•</span>
            <a href="https://fahadsaleem.com">Customer Story</a>
          </div>
          <button
            className="rounded-full outline outline-1 outline-slate-700 px-3 py-1 font-medium text-black"
            style={{ outlineOffset: "-1px" }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`h-4 cursor-pointer text-slate-700`}
            />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Home;
