import { EditResumeContext } from "@/context/ResumeContext";
import React, { useContext } from "react";

const P1 = () => {
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
    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      {/* Header Section */}
      <section className="text-center mb-0">
        {/* Profile Picture */}
        <div className="flex items-start justify-between">
          <div className="flex items-start justify-center gap-3">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Job Title */}
            <div className="flex flex-col items-start">
              <h1 className="text-4xl font-bold text-gray-900">
                {firstName} {lastName}
              </h1>
              <p className="text-lg text-gray-600 font-semibold">{jobTitle}</p>
            </div>
          </div>
          <div className="mt-4 text-gray-500">
            <p>{address}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
        {/* Contact Information */}
      </section>

      {/* Summary Section */}
      <section className="bg-gray-100 rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
        <p className="text-gray-700">{summery}</p>
      </section>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 rounded-lg shadow-md border-l-4"
              style={{ borderColor: themeColor }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.title}{" "}
                <span className="text-sm text-gray-500">
                  — {exp.companyName}, {exp.city}, {exp.state}
                </span>
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {exp.startDate} -{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
              <p className="text-gray-700">{exp.workSummery}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white p-6 rounded-lg shadow-md border-l-4"
              style={{ borderColor: themeColor }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.degree} in {edu.major}
                <span className="text-sm text-gray-500">
                  {" "}
                  — {edu.universityName}
                </span>
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default P1;
