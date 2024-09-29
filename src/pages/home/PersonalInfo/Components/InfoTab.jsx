import { InfoIcon, User } from "lucide-react";
import React from "react";

const InfoTab = () => {
  return (
    <div className="w-full rounded-xl p-5 bg-gray-100 shadow-md border border-blue-500 flex flex-row items-center  gap-3">
      <User />
      <h4 className="text-start">Personal 1</h4>{" "}
    </div>
  );
};

export default InfoTab;
