import React from "react";
import { Upload } from "antd";

const UploadButton = () => {
  return (
    <div className="upload-logo d-flex justify-content-center ">
      <div>
        <Upload
          listType="picture-card"
          className="avatar-uploader custom-upload"
          showUploadList={true}
          beforeUpload={() => {
            return false;
          }}
          maxCount={1}
        >
          Browse
        </Upload>
      </div>
    </div>
  );
};

export default UploadButton;
