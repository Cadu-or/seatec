import './style.css';
import {useState } from 'react';
import { Button, Card, Switch, Form, Input, Row, Col, Radio, Select, Checkbox, Upload, DatePicker} from "antd";
import { FormListActivity } from '../FormList';
import axios from 'axios';
import { BackButton } from '../Buttons/Buttons';


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

export function Forms(){
  const [fileList, setFileList] = useState<any>([]);
  const [isDisabled, setIsDisabled] = useState(false)
  const [form] = Form.useForm();


  return (
    <Card 
      title={<BackButton/>} 
      bordered={false}>
      <Form
        form={form}
        onFinish={onFinish}
        layout='vertical'
        initialValues={{ active: true }}>
        <div className='forms-content'>
          <div className='fields-container' style={{display: 'flex'}}>
            <span> O trabalhador está ativo ou inativo? </span>
            <Form.Item name="active" style={{width: 67, margin:0}}>
              <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" defaultChecked/>
            </Form.Item>
          </div>
          <div className='fields-container'>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name='nome' label='Nome'>
                  <Input className='input-form'/>
                </Form.Item>
                <Form.Item name='cpf' label='CPF'>
                  <Input className='input-form'/>
                </Form.Item>
                <Form.Item name='rg' label='RG'>
                  <Input className='input-form'/>
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
                  <DatePicker className='input-form' placeholder='' />
                </Form.Item>
                <Form.Item name='cargo' label='Cargo'>
                  <Select
                      bordered={false}
                      className='input-form'
                      style={{width: '100%'}}
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
                  checked={isDisabled}
                  onChange={(e) => setIsDisabled(e.target.checked)}
                >
                  O trabalhador não usa EPI.
                </Checkbox>
                <FormListActivity isDisabled={isDisabled}/>
              </Col>
            </Row>
          </div>
          <div className='fields-container'>
            <Row gutter={24}>
              <Col span={24} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <span> Adicione Atestado de Saúde Ocupacional (opcional)</span>
                <Input name='atestado' className='input-form' placeholder={fileList[0]?.name}/>
                  <Upload 
                    customRequest={(info) =>{
                      setFileList([info.file])
                    }}
                    showUploadList={false}
                    style={{width: '100%'}}
                  >
                    <Button className='input-form'> Selecionar Arquivo</Button>
                  </Upload>
              </Col>
            </Row>
          </div>
        </div>
        <Form.Item>
          <Button style={{border: '1px solid #4FA1C1', width:'100%', marginTop: 10, borderRadius: '10px'}} htmlType='submit'> Salvar </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
