import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  return (
    <div className="flex items-center justify-between shadow-md p-3">
      <Link to={"/"}>
        <img src="/logo.svg" width={50} alt="" />
      </Link>
      <div className="flex items-center justify-center gap-3">
        {isSignedIn && isLoaded ? (
          <>
            <Link to={"/personal-info"}>
              <Button variant={"outline"}>Static Informations</Button>
            </Link>
            <Link to={"/dashboard"}>
              <Button variant={"outline"}>Dashboard</Button>
            </Link>
            <UserButton />
          </>
        ) : (
          <Link to={"/auth/sign-in"}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
