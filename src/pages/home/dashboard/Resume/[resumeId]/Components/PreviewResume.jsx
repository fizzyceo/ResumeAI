import { EditResumeContext } from "@/context/ResumeContext";
import React, { useContext } from "react";

const PreviewResume = ({ data }) => {
  const { resumeInfo } = useContext(EditResumeContext);
  const {
    firstName,
    lastName,
    jobTitle,
    address,
    phone,
    email,
    themeColor,
    summery,
    experience,
    education,
    skills,
  } = resumeInfo;

  return (
    <div className="max-w-4xl text-start mx-auto p-8 bg-white shadow-md">
      {/* Header */}
      <div
        className="flex items-center justify-between border-b-4 p-2"
        style={{ borderColor: themeColor }}
      >
        <div>
          <h1 className="text-3xl font-bold" style={{ color: themeColor }}>
            {firstName} {lastName}
          </h1>
          <p className="text-xl font-medium">{jobTitle}</p>
        </div>
        <div className="text-right text-gray-500 text-sm">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>

      {/* Summary */}
      <section>
        <p className="mt-2 text-sm text-gray-600">{summery}</p>
      </section>

      {/* Experience */}
      <section className="my-8 space-y-4">
        <h2
          className="text-xl font-semibold border-b-2 p-2"
          style={{ color: themeColor, borderColor: themeColor }}
        >
          Experience
        </h2>
        {experience.map((exp) => (
          <div key={exp.id} className="mt-4">
            <h3 className="text-lg font-bold">
              {exp.title} - {exp.companyName}
            </h3>
            <p className="text-gray-500">
              {exp.city}, {exp.state} | {exp.startDate} -{" "}
              {exp.currentlyWorking ? "Present" : exp.endDate}
            </p>
            <p className="mt-2 text-gray-600 whitespace-pre-line">
              {exp.workSummery}
            </p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="my-8 space-y-4">
        <h2
          className="text-xl font-semibold border-b-2 p-2"
          style={{ color: themeColor, borderColor: themeColor }}
        >
          Education
        </h2>
        {education.map((edu) => (
          <div key={edu.id} className="mt-4">
            <h3 className="text-lg font-bold">{edu.universityName}</h3>
            <p className="text-gray-500">
              {edu.degree} in {edu.major} | {edu.startDate} - {edu.endDate}
            </p>
            <p className="mt-2 text-gray-600">{edu.description}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="my-8 space-y-4">
        <h2
          className="text-xl font-semibold py-2 border-b-2 p-2"
          style={{ color: themeColor, borderColor: themeColor }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center">
              <span className="font-medium w-32">{skill.name}</span>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${skill.rating}%` }}
                ></div>
              </div>
              <span className="ml-2">{skill.rating}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreviewResume;
