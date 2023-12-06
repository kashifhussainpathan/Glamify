import "./signup.css";
import { useState } from "react";
import { inputs } from "../../constants";
import { useDispatch } from "react-redux";
import { signupAsync } from "../../redux";
import FormInput from "../formInput/FormInput";

const Signup = () => {
  const dispatch = useDispatch();

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
    <div className="signup flex">
      <>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          {dynamicInputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>REGISTER</button>
        </form>
      </>
    </div>
  );
};

export default Signup;
