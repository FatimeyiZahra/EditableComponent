import React from "react";
import Smile from "./Smile";
import { Alert } from "antd";

const ContentByQuestion = ({
  draggedItem,
  smileItems,
  setSmileItems,
  radioValue,
  handleClick,
  clickedItemId,
}) => {
  switch (draggedItem) {
    case 1:
      return (
        <Smile
          smileItems={smileItems}
          setSmileItems={setSmileItems}
          radioValue={radioValue}
          handleClick={handleClick}
          clickedItemId={clickedItemId}
        />
      );
    default:
      return (
        <Alert
          style={{ marginBottom: "20px" }}
          message="Please reload the page then drag and drop smile. Cause it's only work
        for smile case for now."
          type="warning"
        />
      );
  }
};

export default ContentByQuestion;
