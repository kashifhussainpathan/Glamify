import { useState } from "react";
import { inputs } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { signupAsync } from "../../redux";
import FormInput from "../formInput/FormInput";

const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ user }) => user.error);

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
    setValues({ ...values, [e.target.name]: e.target.value });
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
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-white p-6 rounded shadow-small">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="text-2xl mt-[-10px] mb-1 font-semibold ">
            Register
          </div>
          {dynamicInputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="bg-slate-700 text-white p-6 mt-2 py-2 rounded hover:bg-slate-600 w-full font-semibold">
            REGISTER
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
