import React from "react";
import SimpleCard from "../../../core/shared/card/SimpleCard";
import { Col } from "antd";
import { HolderOutlined } from "@ant-design/icons";
import { handleDragStart } from "../../../core/helper/handleDragStart";
import { handleDragOver } from "../../../core/helper/handleDragOver";

const DraggableItem = ({ items, handleDrop }) => {
  return (
    <>
      {items.map((item, index) => (
        <Col md={8} key={index}>
          <SimpleCard>
            <div
              className="text-align-center"
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <div style={{ margin: "12px 0 8px" }}> {item.icon}</div>
              <span style={{ fontSize: "10px" }} className="d-block">
                {item.label}
              </span>
              <HolderOutlined style={{ transform: "rotate(90deg)" }} />
            </div>
          </SimpleCard>
        </Col>
      ))}
    </>
  );
};

export default DraggableItem;
