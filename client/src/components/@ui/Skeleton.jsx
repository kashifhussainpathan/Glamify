import React from "react";

const Skeleton = ({ classes }) => {
  return <div className={`bg-gray-300 animate-pulse ${classes} `} />;
};

export default Skeleton;
