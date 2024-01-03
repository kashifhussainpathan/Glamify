import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signinAsync } from "@redux";
import { useUserState } from "@hooks";
import { Button } from "@components/@ui";
import { signInInputs } from "@constants";
import FormInput from "../formInput/FormInput";

const Signin = () => {
  const dispatch = useDispatch();

  const { error, signinStatus } = useUserState();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinAsync(values));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-small">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="text-2xl mt-[-10px] mb-1 font-semibold ">Sign In</div>
          {signInInputs?.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name] || ""}
              onChange={onChange}
            />
          ))}

          <Button className="w-full mt-2">
            {signinStatus === "loading" ? "Signing in.." : "SIGN IN"}
          </Button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Signin;
