import './style.css';
import {useState } from 'react';
import { Button, Card, Switch, Form, Input, Row, Col, Radio, Select, Checkbox, Upload, DatePicker} from "antd";
import { FormListActivity } from '../FormList';
import axios from 'axios';
import { BackButton } from '../Buttons/Buttons';
import locale from 'antd/es/date-picker/locale/pt_BR'; // Importe o locale desejado
import { cargoOptions } from '../Variables';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../redux/formSlice';

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

export function cpfValidator(cpf : string) : boolean {
  const cleanCPF = cpf.replace(/[^\d]+/g, '');
  if (cleanCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }

  const rest = sum % 11;
  const digit1 = rest < 2 ? 0 : 11 - rest;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }

  const digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  return (
    parseInt(cleanCPF.charAt(9)) === digit1 && parseInt(cleanCPF.charAt(10)) === digit2
  );
}

export function Forms(){
  const [fileList, setFileList] = useState<any>([]);
  const [isDisabled, setIsDisabled] = useState(false)
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const checkCPF = (_ : any, value : string) => {
    if (!value || cpfValidator(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Insira um cpf válido.'));
  };

  const checkDate = async (_:any, value: any) => {
    if (!value || new Date(value).getTime() <= new Date().getTime()) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Insira uma data válida.'));
  };

  
  function handleForm(){
    dispatch(changeForm())
  }

  const handleFinish = (values: any) => {
    console.log('Received values:', values);

    onFinish(values);
    handleForm();
  };

  return (
    <Card 
      title={<BackButton/>}
      bordered={false}
      style={{marginBottom: 20}}
      >
      <Form
        form={form}
        onFinish={handleFinish}
        layout='vertical'
        initialValues={{ active: true, Activities:[{}]}}
        requiredMark={false}>
        <div className='forms-content'>
          <div className='fields-container' style={{display: 'flex'}}>
            <span> O trabalhador está ativo ou inativo? </span>
            <Form.Item name="active" style={{width: 67, margin:0}}>
              <Switch className='switch-form' checkedChildren="Ativo" unCheckedChildren="Inativo" defaultChecked/>
            </Form.Item>
          </div>
          <div className='fields-container'>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name='nome' label='Nome' required tooltip="Campo Obrigatório" rules={[{ required: true, message: 'Esse campo é obrigatório' }]}>
                  <Input className='input-form'/>
                </Form.Item>
                <Form.Item name='cpf' label='CPF' required tooltip="Campo Obrigatório" rules={[{ required: true, message: 'Esse campo é obrigatório' }, {validator : checkCPF}]}>
                  <Input className='input-form'/>
                </Form.Item>
                <Form.Item name='rg' label='RG' required tooltip="Campo Obrigatório" rules={[{ required: true, message: 'Esse campo é obrigatório' }]}>
                  <Input className='input-form'/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name='sexo' label='Sexo' required tooltip="Campo Obrigatório" rules={[{ required: true, message: 'Esse campo é obrigatório' }]}>
                  <Radio.Group>
                    <Radio value={1}>Masculino</Radio>
                    <Radio value={2}>Feminino</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name='data_nascimento' label='Data de Nascimento' required tooltip="Campo Obrigatório" rules={[{ required: true, message: 'Esse campo é obrigatório' }, {validator: checkDate}]}>
                  <DatePicker format="DD/MM/YYYY" locale={locale} className='input-form' placeholder='' />
                </Form.Item>
                <Form.Item name='cargo' label='Cargo' required tooltip="Campo Obrigatório" rules={[{ required: true, message: 'Esse campo é obrigatório' }]}>
                  <Select
                      bordered={false}
                      className='input-form'
                      style={{width: '100%'}}
                      options={cargoOptions}
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
          <Button style={{border: '1px solid #4FA1C1', width:'100%', marginTop: 20, borderRadius: '10px'}} htmlType='submit'> Salvar </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
