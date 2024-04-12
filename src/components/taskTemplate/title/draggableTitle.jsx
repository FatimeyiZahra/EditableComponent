import React from "react";

const DraggableTitle = ({ title }) => {
  return (
    <div className="category-name">
      <div className="separator"></div>
      <h5 style={{ textTransform: "uppercase" }}>{title}</h5>
      <div className="separator"></div>
    </div>
  );
};

export default DraggableTitle;
