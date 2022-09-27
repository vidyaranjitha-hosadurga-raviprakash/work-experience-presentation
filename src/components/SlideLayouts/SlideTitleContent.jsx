import React from "react";

export const SlideTitleContent = ({ children }) => {
  return (
    <div className="slide-heading-content">
      <div>
        <h2 className="slide-heading">{children[0]}</h2>
      </div>
      <div className="slide-content"> {children[1]}</div>
    </div>
  );
};
