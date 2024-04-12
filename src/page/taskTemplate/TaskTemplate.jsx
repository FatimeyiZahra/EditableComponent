import React, { useState } from "react";
import { Col, Row } from "antd";
import LeftDrawer from "./sections/LeftDrawer";
import Content from "./sections/Content";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import RightDrawer from "./sections/RightDrawer";
import { items } from "./items";

const TaskTemplate = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [clickedItemId, setClickedItemId] = useState(null); // State to track the currently clicked item ID

  const [smileItems, setSmileItems] = useState([
    {
      id: 1,
      label: "Neutral",
      icon: <MehOutlined />,
      color: "gray",
    },
    {
      id: 2,
      label: "Bad",
      icon: <FrownOutlined />,
      color: "gray",
    },
    {
      id: 3,
      label: "Excelent",
      icon: <SmileOutlined />,
      color: "gray",
    },
  ]);

  const [radioValue, setRadioValue] = useState(smileItems.length);
  const onChangeSmileSize = (e) => {
    setRadioValue(e.target.value);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const oldIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...items];
    const draggedItem = newItems.splice(oldIndex, 1)[0];
    setDraggedItem(draggedItem.id);
  };
  const handleClick = (itemId) => {
    setClickedItemId(itemId);
    setSmileItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, color: "blue" } : item
      )
    );
  };
  return (
    <>
      <Row>
        <Col md={6}>
          <LeftDrawer items={items} handleDrop={handleDrop} />
        </Col>
        <Col md={12}>
          <Content
            handleDrop={handleDrop}
            items={items}
            draggedItem={draggedItem}
            smileItems={smileItems}
            setSmileItems={setSmileItems}
            radioValue={radioValue}
            handleClick={handleClick}
            clickedItemId={clickedItemId}
          />
        </Col>
        <Col md={6}>
          <RightDrawer
            draggedItem={draggedItem}
            smileItems={smileItems}
            setSmileItems={setSmileItems}
            onChangeSmileSize={onChangeSmileSize}
            radioValue={radioValue}
            clickedItemId={clickedItemId}
          />
        </Col>
      </Row>
    </>
  );
};

export default TaskTemplate;
