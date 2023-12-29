import React, { useState } from "react";
import { Signin, Signup } from "@components";

const ToggleSigninSignup = () => {
  const [toggleAuth, setToggleAuth] = useState(false);

  const toggleAuthType = () => {
    setToggleAuth((prevToggleAuth) => !prevToggleAuth);
  };

  return (
    <div
      className={`container mx-auto mt-8 flex justify-center my-6 ${
        !toggleAuth && "h-[60vh] items-center"
      }`}
    >
      <div>
        {!toggleAuth ? <Signin /> : <Signup />}

        <div className="mt-4 text-center">
          {toggleAuth ? (
            <>
              <span>Already have an account?</span>{" "}
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={toggleAuthType}
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              <span>Don't have an account?</span>{" "}
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={toggleAuthType}
              >
                Sign Up
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleSigninSignup;
