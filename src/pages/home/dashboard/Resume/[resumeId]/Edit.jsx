import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormResume from "./Components/FormResume";
import PreviewResume from "./Components/PreviewResume";
import { EditResumeContext } from "@/context/ResumeContext";
import dummy from "@/data/dummy";
import P1 from "./Components/Preview/P1";

const EditResume = () => {
  const { resumeid } = useParams();
  const [resumeInfo, setResumeInfo] = useState(dummy);
  useEffect(() => {
    setResumeInfo(dummy);
  }, [dummy]);
  return (
    <EditResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className=" px-7 py-14 bg-red-500">
        <div className="bg-green-200 p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormResume />
          <P1 />
          <PreviewResume />
        </div>
      </div>
    </EditResumeContext.Provider>
  );
};

export default EditResume;
