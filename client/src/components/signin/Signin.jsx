import React, { useState } from "react";
import { signInInputs } from "../../constants";
import FormInput from "../formInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { signinAsync } from "../../redux/user/userThunk";

const Signin = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ user }) => user.error);

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
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-white p-6 rounded shadow-small">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="text-2xl mt-[-10px] mb-1 font-semibold ">Sign In</div>
          {signInInputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name] || ""}
              onChange={onChange}
            />
          ))}
          <button className="bg-slate-700 text-white p-6 mt-2 py-2 rounded hover:bg-slate-600 w-full font-semibold">
            SIGN IN
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Signin;
