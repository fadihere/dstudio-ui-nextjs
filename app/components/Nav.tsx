//
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Nav() {
  return (
    <nav className="flex place-content-between	">
      <div className="text-black flex space-x-3 items-center">
        <p className="font-bold text-lg font-serif">Lyf- &#41; </p>
        <p className="text-sm">/issurance@tiropay.au</p>
      </div>
      <div className="space-x-3 flex h-8 items-center">
        <button
          className="rounded-full outline outline-2 outline-slate-200 px-3 py-1 font-medium text-black hidden sm:block"
          style={{ outlineOffset: "-1px" }}
        >
          Log In
        </button>
        <button className="rounded-full bg-black px-3 py-1 font-medium text-white hidden sm:block">
          Get Started
        </button>
        <FontAwesomeIcon
          icon={faBars}
          className="text-black h-6 cursor-pointer pl-0 sm:pl-3"
        />
      </div>
    </nav>
  );
}

export default Nav;
