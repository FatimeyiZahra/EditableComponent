import React, { useState } from "react";
import { Button, Drawer, Empty, Tabs, Tooltip } from "antd";
import {
  EditOutlined,
  MenuUnfoldOutlined,
  MergeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SmileEditor from "../../../components/taskTemplate/editorTemplate/SmileEditor";
import EmptyBox from "../../../core/shared/empty/EmptyBox";
const RightDrawer = ({
  draggedItem,
  smileItems,
  setSmileItems,
  onChangeSmileSize,
  radioValue,
  clickedItemId,
}) => {
  const [open, setOpen] = useState(true);
  const items = [
    {
      key: "1",
      label: (
        <Tooltip title="Edit">
          <EditOutlined style={{ fontSize: "20px" }} />
        </Tooltip>
      ),
      children:
        draggedItem === 1 ? (
          <SmileEditor
            draggedItem={draggedItem}
            smileItems={smileItems}
            setSmileItems={setSmileItems}
            onChangeSmileSize={onChangeSmileSize}
            radioValue={radioValue}
            clickedItemId={clickedItemId}
          />
        ) : (
          <EmptyBox />
        ),
    },
    {
      key: "2",
      label: (
        <Tooltip title="Setting">
          <SettingOutlined style={{ fontSize: "20px" }} />
        </Tooltip>
      ),
      children: <Empty />,
    },
    {
      key: "3",
      label: (
        <Tooltip title="Advance">
          <MergeOutlined style={{ fontSize: "20px" }} />
        </Tooltip>
      ),
      children: <Empty />,
    },
  ];
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <MenuUnfoldOutlined />
      </Button>
      <Drawer
        mask={false}
        title="Template Editor"
        placement={"right"}
        onClose={onClose}
        open={open}
      >
        <div style={{ fontWeight: "500" }}>
          By customizig this template you will gather more precise information
          for your business field
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </Drawer>
    </>
  );
};
export default RightDrawer;
