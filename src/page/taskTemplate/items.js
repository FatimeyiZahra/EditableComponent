import {
  CalendarOutlined,
  CheckSquareOutlined,
  InfoCircleOutlined,
  PictureOutlined,
  SmileOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";

export const items = [
  {
    id: 1,
    label: "Item 1",
    icon: <SmileOutlined style={{ fontSize: "24px" }} />,
  },
  {
    id: 2,
    label: "Multipple choice",
    icon: <CheckSquareOutlined style={{ fontSize: "24px" }} />,
  },
  {
    id: 3,
    label: "Media file",
    icon: <PictureOutlined style={{ fontSize: "24px" }} />,
  },
  {
    id: 4,
    label: "Date Option",
    icon: <CalendarOutlined style={{ fontSize: "24px" }} />,
  },
  {
    id: 5,
    label: "Information",
    icon: <InfoCircleOutlined style={{ fontSize: "24px" }} />,
  },
  {
    id: 6,
    label: "Free text",
    icon: <WechatWorkOutlined style={{ fontSize: "24px" }} />,
  },
];
