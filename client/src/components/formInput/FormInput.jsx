import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col w-80 mb-3">
      <label className="mb-1">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        className={`${
          focused && inputProps.value === "" ? "border-red-500" : ""
        } p-2 border border-gray-300 rounded`}
      />
      {focused && inputProps.value === "" && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
