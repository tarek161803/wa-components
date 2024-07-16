import React from "react";
const ComponentContainer = ({ title, children }) => {
  return (
    <div>
      <p className="ctx-mb-1 ctx-text-base ctx-font-medium ctx-capitalize">{title}</p>
      <div className="ctx-border ctx-border-gray-300 ctx-p-4 ctx-rounded-lg">{children}</div>
    </div>
  );
};

export default ComponentContainer;
