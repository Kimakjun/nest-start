import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const errorMessage = (type: string) => {
  switch (type) {
    case "required":
      return "required";
    case "minLength":
      return "minLength";
  }
};

const AntdForm: FC = () => {
  const { control, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Please enter your email address" }}
          as={
            <Form.Item
              label="email"
              validateStatus={errors.email && "error"}
              help={errors.email && errors.email.message}
            >
              <Input name="email" />
            </Form.Item>
          }
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            minLength: 5,
          }}
          as={
            <Form.Item
              label="password"
              validateStatus={errors.password && "error"}
              help={errors.password && errorMessage(errors.password.type)}
            >
              <Input type="password" name="password" />
            </Form.Item>
          }
        />
        <Button htmlType="submit">Submit</Button>
      </Form>
    </>
  );
};

export default AntdForm;
