import { Empty } from "antd";
import React from "react";

const EmptyBox = () => {
  return (
    <Empty
      description={
        <p className="fw-500">
          Assign or Select field <br />
          to the page
        </p>
      }
    />
  );
};

export default EmptyBox;
