import React, { useState } from "react";
import { handleDragOver } from "../../../core/helper/handleDragOver";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const Smile = ({
  smileItems,
  setSmileItems,
  radioValue,
  handleClick,
  clickedItemId,
}) => {
  const [draggingItemId, setDraggingItemId] = useState(null); // State to track the ID of the currently dragging item

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const oldIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...smileItems];
    const draggedItem = newItems.splice(oldIndex, 1)[0];
    newItems.splice(newIndex, 0, draggedItem);
    setSmileItems(newItems);
  };

  const handleDragStart = (e, index, itemId) => {
    e.dataTransfer.setData("index", index);
    setDraggingItemId(itemId);
    setSmileItems(
      smileItems.map((smileItem) => ({
        ...smileItem,
        color: smileItem.id === itemId ? "blue" : "gray",
      }))
    );
  };

  const handleDragEnd = () => {
    setDraggingItemId(null);
  };
  return (
    <div>
      <h2>Smiley Field</h2>

      <Row style={{ borderLeft: "3px solid #744cbc", borderRadius: "3px" }}>
        {smileItems.slice(0, radioValue).map((item, index) => (
          <Col md={4} key={item.id}>
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, index, item.id)}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
              onDrop={(e) => handleDrop(e, index)}
              onClick={() => handleClick(item.id)}
              style={{
                margin: "5px",
                padding: "10px",
                cursor: "move",
                textAlign: "center",
                color: item.color,
              }}
            >
              <div style={{ margin: "12px 0 8px", fontSize: "50px" }}>
                {item.icon}
              </div>
              <span style={{ fontSize: "12px" }} className="d-block fw-500">
                {item.label}
              </span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Smile;
