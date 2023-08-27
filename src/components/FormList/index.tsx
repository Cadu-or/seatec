import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { activityOptions, epiOptions } from "../Variables";

interface FormListActivityProps{
  isDisabled: boolean
}

export function FormListActivity( {isDisabled} : FormListActivityProps){
  return(
    <Form.List name="Activities">
      {(fields, { add }) => (
        <div style={{gap: 10, display:'flex', flexDirection: 'column', marginBottom:10}}>
          {fields.map((field) => (
            <div className="fields-container" key={field.key} >
              <Form.Item
                name={[field.name, 'activity']} 
                style={{marginBottom: 20}} 
                label="Selecione a Atividade:"
                required tooltip="Campo Obrigatório"
                rules={[{ required: !isDisabled, message: 'Esse campo é obrigatório'}]}
              >
                <Select
                  disabled={isDisabled}
                  bordered={false}
                  className="input-form"
                  options={activityOptions}
                />
              </Form.Item>
              <Form.List name={[field.name, 'List_EPIS']}>
                {(fields2, {add, remove}) => (
                  <>
                    {fields2.map((field2, index) => {
                      return (
                        <Space style={{ display: "flex"}} key={field2.key}>
                          <Form.Item
                            name={[field2.name, 'EPI']}
                            style={{ width: "200px" }}
                            label="Selecione o EPI"
                            required tooltip="Campo Obrigatório"
                            rules={[{ required: !isDisabled, message: 'Esse campo é obrigatório'}]}
                          >
                            <Select
                              disabled={isDisabled}
                              className="input-form"
                              bordered={false}
                              options={epiOptions}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field2.name, 'CA']}
                            label="Informe o número do CA"
                            required tooltip="Campo Obrigatório"
                            rules={[{ required: !isDisabled, message: 'Esse campo é obrigatório'}]}
                          >
                            <Input disabled={isDisabled} className="input-form" />
                          </Form.Item>
                          {fields2.length > 1 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => remove(field2.name)}
                            />
                          ) : null}
                        </Space>
                        
                      );
                    })}
                    <div className="button-add">
                      <Button
                        disabled={isDisabled}
                        onClick={() => add()}
                        style={{ width: "20%", border: "none", boxShadow: "unset" }}
                      >
                        Adicionar EPI
                      </Button>
                    </div>
                  </>
                )}
              </Form.List>
            </div>
          ))}
          <div style={{marginTop: 10, display:'flex', width: '100%'}}>
            <Button disabled={isDisabled} className="input-form" onClick={() => {
              add();
              }}>Adicionar outra atividade</Button>
          </div>
        </div>
      )}
    </Form.List>
  )
}