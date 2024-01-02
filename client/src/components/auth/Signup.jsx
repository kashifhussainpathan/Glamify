import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { inputs } from "@constants";
import { useUserState } from "@hooks";
import { signupAsync } from "@redux";
import { Button } from "@components/@ui";
import FormInput from "../formInput/FormInput";

const Signup = () => {
  const dispatch = useDispatch();
  const { error, status } = useUserState();

  const [values, setValues] = useState({
    username: "",
    email: "",
    avatar: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...userDetails } = values;
    dispatch(signupAsync(userDetails));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const dynamicInputs = inputs.map((input) => {
    if (input.name === "confirmPassword") {
      return {
        ...input,
        pattern: values.password,
      };
    }
    return input;
  });

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-small">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="text-2xl mt-[-10px] mb-1 font-semibold ">
            Register
          </div>
          {dynamicInputs?.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <Button className="w-full mt-2">
            {status === "loading" ? " Registering..." : "REGISTER"}
          </Button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
