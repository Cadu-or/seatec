import './style.css';
import { useEffect, useState } from 'react';
import { Button, Card, Modal, Switch, Form, Input, Row, Col, Radio, Select, Checkbox, Upload, message, UploadProps, Space} from "antd";
import { BackButton } from '../Buttons/Buttons';
import { FormListActivity } from '../FormList';
import { ListUsers } from '../ListUsers';
import axios from 'axios';


export const onFinish = async(values: any) => {
  try {
    const response = await axios.post('http://localhost:3001/funcionarios', {
      values
    });
    console.log('Resposta da requisição POST:', response.data);
  } catch (error) {
    console.error('Erro na requisição POST:', error);
  }
};

export function FormFunc(){
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState<any>([]);
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <div className="form-container">
      <Card title="Funcionário(s)" bordered={false}>
        <Button onClick={showModal} style={{border:'1px solid #4FA1C1', width: '100%', borderRadius: '10px'}}>
          + Adicionar Funcionário
        </Button>
        <ListUsers/>
      </Card>
      <Modal
        title={<BackButton onClick={closeModal}/>}
        style={{ top: 20, width: '100%'}}
        open={open}
        closeIcon={null}
        cancelText={null}
      >
        <Form
          form={form}
          onFinish={onFinish}
          layout='vertical'>
          <div className='forms-content'>
            <div className='fields-container' style={{display: 'flex'}}>
              <span> O trabalhador está ativo ou inativo? </span>
              <Form.Item name="active" style={{width: 67, margin:0}}>
                <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" defaultChecked />
              </Form.Item>
            </div>
            <div className='fields-container'>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name='Nome' label='Nome'>
                    <Input />
                  </Form.Item>
                  <Form.Item name='CPF' label='CPF'>
                    <Input/>
                  </Form.Item>
                  <Form.Item name='RG' label='RG'>
                    <Input/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name='sexo' label='Sexo'>
                    <Radio.Group>
                      <Radio value={1}>Masculino</Radio>
                      <Radio value={2}>Feminino</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name='data_nascimento' label='Data de Nascimento'>
                    <Input />
                  </Form.Item>
                  <Form.Item name='cargo' label='Cargo'>
                    <Select
                        style={{width: 120}}
                        options={[
                          { value: '1', label: 'Cargo 1' },
                          { value: '2', label: 'Cargo 2' },
                        ]}
                      />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className='fields-container'>
              <Row gutter={24}>
                <Col span={24} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                  <span> Quais EPIs o trabalhador usa na atividade? </span>
                  <Checkbox
                    checked={componentDisabled}
                    onChange={(e) => setComponentDisabled(e.target.checked)}
                  >
                    O trabalhador não usa EPI.
                  </Checkbox>
                  <FormListActivity/>
                </Col>
              </Row>
            </div>
            <div className='fields-container'>
              <Row gutter={24}>
                <Col span={24} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                  <Input placeholder={fileList[0]?.name}/>
                  <Form.Item>
                    <Upload 
                    customRequest={(info) =>{
                      setFileList([info.file])
                    }}
                    showUploadList={false}
                    >
                      <Button>Selecionar Arquivo</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </div>
          <Form.Item>
            <Button htmlType='submit'>Salvar</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
