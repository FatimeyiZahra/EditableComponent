import React, { useState } from "react";
import { Button, Drawer, Row } from "antd";
import DraggableItem from "../../../components/taskTemplate/draggableItem/DraggableItem";
import DraggableTitle from "../../../components/taskTemplate/title/draggableTitle";
import { MenuFoldOutlined } from "@ant-design/icons";
const LeftDrawer = ({ items, handleDrop }) => {
  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <MenuFoldOutlined />
      </Button>
      <Drawer
        mask={false}
        title="Feedback Template"
        placement={"left"}
        onClose={onClose}
        open={open}
      >
        <DraggableTitle title={"QUESTION TYPE"} />
        <Row>
          <DraggableItem items={items} handleDrop={handleDrop} />
        </Row>
      </Drawer>
    </>
  );
};
export default LeftDrawer;
