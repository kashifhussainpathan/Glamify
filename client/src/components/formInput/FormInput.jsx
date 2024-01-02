import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, pattern, value, ...inputProps } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const showError =
    value !== "" && (pattern ? !new RegExp(pattern).test(value) : true);

  return (
    <div className="flex flex-col w-80 mb-3 max-md:w-48">
      <label className="mb-1">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        className={`${
          showError ? "border-red-500" : ""
        } p-2 border border-gray-300 rounded`}
      />
      {showError && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
