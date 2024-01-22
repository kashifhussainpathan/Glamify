const SuspenseFallback = () => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 `}
    >
      <div className="loader"></div>
    </div>
  );
};

export default SuspenseFallback;
