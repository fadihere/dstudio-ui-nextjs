import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Divider from "./Divider";

interface CardProps {
  title: string;
  message: string;
  classProps?: string;
  darkMode: boolean;
  percent: string;
}

const Card = ({
  title,
  message,
  classProps,
  percent,
  darkMode = false,
}: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl items-start p-5 space-y-3 ${
        darkMode ? "text-white" : "text-black"
      } ${classProps}`}
    >
      <div className="w-full space-y-2">
        <p
          className={`${
            darkMode ? "text-slate-300" : "text-slate-600"
          } text-slate-600 font-bold text-[0.7rem]`}
        >
          STRATEGY
        </p>
        <p className={`font-bold text-xl`}>{title}</p>
        <p className="text-xs font-medium">{message}</p>
      </div>
      <div className="w-full space-y-2">
        <Divider classProps="border-slate-500/30" />
        <p
          className={`font-bold text-xs ${
            darkMode ? "text-slate-300" : "text-slate-700"
          } `}
        >
          3 yrs CAGR
        </p>
        <span className="flex items-center justify-between w-full">
          <p className="font-bold text-xl">{percent}</p>
          <div
            className={`${darkMode ? "bg-white" : "bg-black"} rounded-lg p-2`}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`h-3 cursor-pointer ${
                darkMode ? "text-black" : "text-white"
              }`}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Card;
