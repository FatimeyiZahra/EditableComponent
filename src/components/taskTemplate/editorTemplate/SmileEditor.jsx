import React, { useState } from "react";
import DraggableTitle from "../title/draggableTitle";
import { Input, Radio, Space } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const SmileEditor = ({
  smileItems,
  onChangeSmileSize,
  radioValue,
  setSmileItems,
  clickedItemId,
}) => {
  const [selectedColor, setsSelectedColor] = useState("");
  const colotPalette = [
    {
      color: "aqua",
    },
    {
      color: "violet",
    },
    {
      color: "yellow",
    },
    {
      color: "blueviolet",
    },
  ];
  const handleClickColor = (color, itemId) => {
    setsSelectedColor(color);
    setSmileItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, color: color } : item
      )
    );
  };
  return (
    <>
      <DraggableTitle title={"Rate options"} />

      <Radio.Group onChange={onChangeSmileSize} value={radioValue}>
        <Space direction="vertical">
          {smileItems.map((item, index) => (
            <Radio
              style={{ marginRight: "5px" }}
              key={item.id}
              value={index + 1}
            >
              {smileItems.slice(0, index + 1).map((iconItem, iconIndex) => (
                <span
                  style={{ marginRight: "5px", fontSize: "20px" }}
                  key={iconItem.id}
                >
                  {iconItem.icon}
                </span>
              ))}
            </Radio>
          ))}
        </Space>
      </Radio.Group>

      <DraggableTitle title={"rate Label"} />

      <div>
        {smileItems.map((item) => (
          <Input
            key={item.id}
            style={{ marginBottom: "5px" }}
            addonBefore={item.icon}
            value={item.label}
            onChange={(e) => {
              setSmileItems(
                smileItems.map((smileItem) =>
                  smileItem.id === item.id
                    ? { ...smileItem, label: e.target.value }
                    : smileItem
                )
              );
            }}
          />
        ))}
      </div>

      <DraggableTitle title={"stroke color"} />

      {colotPalette.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: item.color,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "8px",
          }}
          className={selectedColor === item.color ? "border" : ""}
          onClick={() => handleClickColor(item.color, clickedItemId)}
        ></div>
      ))}
    </>
  );
};

export default SmileEditor;
