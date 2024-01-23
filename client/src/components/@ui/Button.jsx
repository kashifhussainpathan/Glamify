const Button = (props) => {
  const { children, onClick, className, ...restProps } = props;

  return (
    <button
      onClick={onClick}
      {...restProps}
      className={`text-white bg-gray-900 hover:bg-gray-800 font-medium rounded text-base px-5 py-2.5 mb-2 max-md:text-xs max-md:px-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
