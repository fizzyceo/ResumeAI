import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-red-100">
      <div className="bg-green-200 w-1/2 h-screen"></div>
      <div className="w-1/2 flex  justify-center">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
