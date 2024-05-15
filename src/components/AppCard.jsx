import React from "react";
import { globe } from "../assets";

const AppCard = ({ app }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={app.icon} className="w-[64px] h-[64px] object-contain mb-1" />
      <span className="text-lg">{app.name}</span>
    </div>
  );
};

export default AppCard;
