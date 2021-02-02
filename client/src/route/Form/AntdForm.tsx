import { FC } from "react";
import { Menu, Row, Col } from "antd";
import InputForm from "../../components/InputForm";

const AntdForm: FC = () => {
  return (
    <div>
      <Menu
        mode="horizontal"
        style={{
          width: "100%",
        }}
      >
        <Menu.Item>Main</Menu.Item>
        <Menu.Item>Login</Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽(반응형)
        </Col>
        <Col xs={24} md={12}>
          <InputForm />
        </Col>
        <Col xs={24} md={6}>
          오른쪽(반응형)
        </Col>
      </Row>
    </div>
  );
};

export default AntdForm;
