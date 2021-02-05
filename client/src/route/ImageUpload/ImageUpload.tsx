import React, { FC, useState } from "react";
import { Form, Upload, Button, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "./ImageUpload.css";
import { UPLOAD_FILE } from "../../queries/upload";
import { useMutation } from "@apollo/client";

const ImageUpload: FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [addFileMutation] = useMutation(UPLOAD_FILE, {
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const customRequest = (data: any) => {
    console.log("image Upload mutaion");
    addFileMutation({
      variables: { file: data.file },
    });
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
      </Form>
    </>
  );
};

export default ImageUpload;
