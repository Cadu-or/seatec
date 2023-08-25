import "./style.css";
import React from "react";
import { Button, Card, Form, Select, Space } from "antd";
import { FormEPI } from "../FormEPI";


interface FormActivityProps {
  disabled: boolean;
}

export function FormActivity({ disabled }: FormActivityProps) {
  return (
    <Form
      name="Activity"
      style={{ maxWidth: "100%", margin:10 }}
      disabled={disabled}
      layout="horizontal"
    >
      <div className="activity-container">
        <Form.Item name='atividade' style={{marginBottom: 50}} label="Selecione a Atividade:">
          <Select
            style={{ width: "100%" }}
            options={[{ value: "1", label: "Ativid. 1" }]}
          />
        </Form.Item>
        <FormEPI />
      </div>
    </Form>
  );
}
