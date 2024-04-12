import React from "react";
import { handleDragEnter } from "../../../core/helper/handleDragEnter";
import { handleDragOver } from "../../../core/helper/handleDragOver";
import { handleDragLeave } from "../../../core/helper/handleDragLeave";

const DraggButton = ({ handleDragDrop }) => {
  return (
    <div
      className="drag"
      style={{ marginBottom: "20px" }}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragDrop}
    >
      <p>
        Drag and drop a question <br /> here
      </p>
    </div>
  );
};

export default DraggButton;
