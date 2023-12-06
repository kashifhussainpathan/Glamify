const ErrorFallback = ({ error }) => {
  return (
    <div role="alert" className="">
      <div>
        <h3>Opps🙃, Something went wrong..</h3>
        <p style={{ color: "red" }}>Error: {error.message}</p>
      </div>
    </div>
  );
};

export default ErrorFallback;
