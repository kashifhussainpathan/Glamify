const Button = (props) => {
  const { children, onClick, className, ...restProps } = props;

  console.log(restProps);

  return (
    <button
      onClick={onClick}
      {...restProps}
      className={`text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-base px-5 py-2.5 me-2 mb-2 max-md:text-xs max-md:px-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
