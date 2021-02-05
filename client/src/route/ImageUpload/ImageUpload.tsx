import React, { FC, useState } from "react";
import { Form, Upload, Button, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "./ImageUpload.css";

const ImageUpload: FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const customRequest = () => {
    console.log("image Upload mutaion");
  };

  return (
    <>
      <Form onFinish={onSubmit}>
        <FormItem name="avatar" className="avatar-uploader">
          <Upload
            showUploadList={false}
            name="avatar"
            customRequest={customRequest}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </FormItem>

        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form>
    </>
  );
};

export default ImageUpload;
