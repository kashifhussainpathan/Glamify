import { useDispatch } from "react-redux";

import { useUserState } from "@hooks";
import { setToggleAuth } from "@redux";
import { Signin, Signup } from "@components";

const ToggleSigninSignup = () => {
  const dispatch = useDispatch();
  const { toggleAuth } = useUserState();

  const toggleAuthType = () => {
    dispatch(setToggleAuth(!toggleAuth));
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
