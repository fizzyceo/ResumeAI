import React from "react";
import InfoTab from "./Components/InfoTab";
import { PlusSquare } from "lucide-react";
import FormStaticInfo from "./FormStaticInfo";

const PersonalInfo = () => {
  return (
    <div className="">
      <div className="bg-rose-200 p-10 md:px-20 lg:px-32 flex flex-col items-start gap-2">
        <h2 className="font-bold text-2xl">Personal Informations:</h2>
        <p className="text-gray-600">
          Create, and Reuse wherever and whenever.
        </p>
      </div>
      <div className="flex flex-row  gap-3">
        <div className="flex flex-col w-1/3 items-center justify-center gap-3 p-3">
          <InfoTab />
          <div className="w-full rounded-xl p-5 bg-blue-100 cursor-pointer  shadow-md border border-blue-500 flex flex-row items-center  gap-3">
            <PlusSquare className="text-blue-600" />
            <h4 className="text-start font-sans text-blue-600">
              New Informations
            </h4>{" "}
          </div>
        </div>
        <div className="w-2/3  bg-red-300 p-14">
          <FormStaticInfo />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
