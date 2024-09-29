import React, { useEffect, useState } from "react";
import AddResume from "./Components/AddResume";
import { useUserResumeStore } from "@/stores/userResume";
import ResumeCard from "./Components/ResumeCard";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { getUserResumes, userResumes } = useUserResumeStore((state) => state);
  const [resumeList, setResumeList] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    user && getUserResumes(user.primaryEmailAddress.emailAddress);
  }, [user]);

  useEffect(() => {
    setResumeList(userResumes);
  }, [userResumes]);
  return (
    <div className="p-10 md:px-20 lg:px-32 flex flex-col items-start gap-2">
      <h2 className="font-bold text-2xl">My Resumes:</h2>
      <p className="text-gray-600">
        Got a job / Gig description ? create a resume for it
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 ">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((res, indx) => <ResumeCard key={indx} info={res} />)}
      </div>
    </div>
  );
};

export default Dashboard;
