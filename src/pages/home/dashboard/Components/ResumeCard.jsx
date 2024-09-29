import { EllipsisVertical, Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ResumeCard = ({ info }) => {
  return (
    <Link to={`/dashboard/resume/` + info.resumeId + `/edit`}>
      <div className="flex flex-col items-center justify-center h-[300px] bg-secondary rounded-md transition-all hover:border-2 hover:border-purple-600">
        <div className=" flex flex-col items-center justify-center  h-4/5">
          <Notebook className="w-28" />
        </div>
        <div className="py-2 px-4 flex justify-between items-center h-1/5  rounded-t-xl rounded-md w-full bg-white shadow-md">
          <h3 className="font-semibold">{info.title}</h3>
          <EllipsisVertical />{" "}
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
