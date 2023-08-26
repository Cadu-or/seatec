import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";

export function FormListActivity(){
  return(
    <Form.List name="Activities">
      {(fields, { add, remove }) => (
        <div style={{gap: 10, display:'flex', flexDirection: 'column', marginBottom:10}}>
          {fields.map((field) => (
            <div className="fields-container" key={field.key} >
              <Form.Item
                name={[field.name, 'activity']} 
                style={{marginBottom: 50}} 
                label="Selecione a Atividade:"
              >
                <Select
                  style={{ width: "100%" }}
                  options={[
                    { value: "1", label: "Ativid. 1" },
                    { value: "2", label: "Ativid. 2" },
                    { value: "3", label: "Ativid. 3" },
                  ]}
                />
              </Form.Item>
              <Form.List name={[field.name, 'List_EPIS']}>
                {(fields2, {add, remove}) => (
                  <>
                    {fields2.map((field2, index) => {
                      return (
                        <Space style={{ display: "flex", marginBottom: 8 }} key={field2.key}>
                          <Form.Item
                            name={[field2.name, 'EPI']}
                            style={{ width: "200px" }}
                            label="Selecione o EPI"
                          >
                            <Select
                              style={{ width: "100%" }}
                              options={[
                                {value: "1", label: "Calçado de Segurança"},
                              ]}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field2.name, 'CA']}
                            label="Informe o número do CA"
                          >
                            <Input style={{ width: "100%" }} />
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
            <Button style={{width:"100%" }} onClick={() => {
              add();
              }}>Adicionar outra atividade</Button>
          </div>
        </div>
      )}
    </Form.List>
  )
}