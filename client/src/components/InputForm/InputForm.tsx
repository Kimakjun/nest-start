import { FC, useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import Password from "antd/lib/input/Password";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const InputForm: FC = () => {
  const { handleSubmit, control, errors, watch, reset } = useForm();

  // https://stackoverflow.com/questions/59875287/react-hook-form-reset-is-not-working-with-controller-antd
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    /** 입려값 초기화 */
    Object.keys(data).forEach((v) => (data[v] = ""));
    reset({
      ...data,
    });
  };
  const password = useRef({});
  password.current = watch("password", "");
  const watchPassword = watch("password", false);

  return (
    <Form {...layout} onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        label="email"
        validateStatus={errors.email && "error"}
        help={errors.email && "올바른 이메일 입력"}
        required
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: true, pattern: /\.com$/ }}
          render={({ onChange, value }) => (
            <Input
              placeholder="email is required"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Form.Item>
      <Form.Item
        label="password"
        validateStatus={errors.password && "error"}
        help={errors.password && "올바른 password 입력"}
        required
      >
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: 3, maxLength: 15 }}
          render={({ onChange, value }) => (
            <Input
              placeholder="password is required"
              onChange={onChange}
              value={value}
              type="password"
            />
          )}
        />
      </Form.Item>
      {watchPassword && !errors.password && (
        <Form.Item
          label="passwordCheck"
          validateStatus={errors.passwordCheck && "error"}
          help={errors.passwordCheck && "올바른 passwordCheck 입력"}
          required
        >
          <Controller
            name="passwordCheck"
            control={control}
            rules={{
              required: true,
              minLength: 3,
              maxLength: 15,
              validate: (value) => value === password.current,
            }}
            render={({ onChange, value }) => (
              <Input
                placeholder="passwordCheck is required"
                onChange={onChange}
                value={value}
                type="password"
              />
            )}
          />
        </Form.Item>
      )}
      <Form.Item {...tailLayout}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
