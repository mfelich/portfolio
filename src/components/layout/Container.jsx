import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto max-w-7xl space-y-32 px-6 sm:px-6 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
