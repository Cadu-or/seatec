import "./style.css";
import React from "react";
import { Button, Form, Input, Select, Space } from "antd";

export const onFinish = (values: any) => {
  console.log("Received values of form:", values);
};

export function FormEPI() {
  return (
    <Form
      name="EPI"
      onFinish={onFinish}
      style={{ maxWidth: "100%" }}
      layout="horizontal"
    >
      <div className="EPI-container">
        <div className="fields-container">
          <Space
            style={{ display: "flex", marginBottom: 8, width: "100%" }}
            align="baseline"
          >
            <Form.Item style={{ width: "200px" }} label="Selecione o EPI">
              <Select
                style={{ width: "100%" }}
                options={[{ value: "1", label: "Calçado de Segurança" }]}
              />
            </Form.Item>
            <Form.Item label="Informe o número do CA">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Space>
          <Form.List name="EPI">
            {(fields, { add }) => (
              <div>
                {fields.map(({ key }) => (
                  <Space style={{ display: "flex", marginBottom: 8 }}>
                    <Form.Item
                      style={{ width: "200px" }}
                      label="Selecione o EPI"
                    >
                      <Select
                        style={{ width: "100%" }}
                        options={[
                          { value: "1", label: "Calçado de Segurança" },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item label="Informe o número do CA">
                      <Input style={{ width: "100%" }} />
                    </Form.Item>
                  </Space>
                ))}
                <div className="button-add">
                  <Button
                    onClick={() => add()}
                    style={{ width: "20%", border: "none", boxShadow: "unset" }}
                  >
                    Adicionar EPI
                  </Button>
                </div>
              </div>
            )}
          </Form.List>
        </div>
      </div>
    </Form>
  );
}
