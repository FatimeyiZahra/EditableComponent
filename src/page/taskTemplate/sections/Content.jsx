import React from "react";
import { EditOutlined } from "@ant-design/icons";
import UploadButton from "../../../components/taskTemplate/upload/UploadButton";
import DraggButton from "../../../components/taskTemplate/dragButton/DraggButton";
import SubmitButton from "../../../core/shared/button/SubmitButton";
import ContentByQuestion from "../../../components/taskTemplate/contentByQuestion/ContentByQuestion";

const Content = ({
  items,
  handleDrop,
  draggedItem,
  smileItems,
  setSmileItems,
  radioValue,
  handleClick,
  clickedItemId,
}) => {
  const handleDragDrop = (e) => {
    e.preventDefault();
    const newIndex = items.length;
    handleDrop(e, newIndex);
  };

  return (
    <>
      <div className="tablet">
        <div className="tablet-title">
          <h5>
            Page 1
            <EditOutlined style={{ color: "#1677ff", fontSize: "15px" }} />
          </h5>
        </div>
        <div className="tablet-content">
          <UploadButton />

          {draggedItem === null ? (
            <DraggButton handleDragDrop={handleDragDrop} />
          ) : (
            <ContentByQuestion
              draggedItem={draggedItem}
              smileItems={smileItems}
              setSmileItems={setSmileItems}
              radioValue={radioValue}
              handleClick={handleClick}
              clickedItemId={clickedItemId}
            />
          )}
          <SubmitButton />
        </div>
      </div>
    </>
  );
};

export default Content;
