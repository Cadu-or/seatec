import axios from 'axios';
import './style.css';
import { Button, Switch, Tag } from "antd";
import { useEffect, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { changeFunctionary } from '../../redux/functionarySlice';
import { useDispatch } from 'react-redux';


export function ListUsers(){
  const [funcionarios, setFuncionarios] = useState<any[]>([]);
  const [countFuncionarios, setCountFuncionarios] = useState<number>();
  const [countAtivos, setCountAtivos] = useState<number>();
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get('http://localhost:3001/funcionarios?_sort=values.nome')
      .then((response) => {
        setFuncionarios(response.data);
        setCountFuncionarios(response.data.length);
      })
      .catch((error) => console.error('Erro na requisição GET:', error));

    axios.get('http://localhost:3001/funcionarios?values.active=true')
      .then((response) => {
        setCountAtivos(response.data.length);
      })
      .catch((error) => console.error('Erro na requisição GET:', error));
  }, []);

  const handleFilterActive = async() => {
    try {
      await axios.get('http://localhost:3001/funcionarios?values.active=true&_sort=values.nome')
      .then((response) => {
        setFuncionarios(response.data);
      })
    } catch (error) {
      console.error('Erro na requisição get:', error);
    }
  };

  const handleClearFilter = async() => {
    try {
      await axios.get('http://localhost:3001/funcionarios?_sort=values.nome')
      .then((response) => {
        setFuncionarios(response.data);
      })
    } catch (error) {
      console.error('Erro na requisição get:', error);
    }
  };
  
  function handleFunctionary(event: boolean){
    dispatch(changeFunctionary(event))
  }

  return(
    
    <div className="listusers-container">
      <div className="filter-container"> 
        <Button style={{borderRadius: '10px', width: '20%', border: '1px solid #4FA1C1', color: '#4FA1C1'}} onClick={() => handleFilterActive()}>
          Ver apenas ativos
        </Button>

        <Button style={{borderRadius: '10px', width: '20%', border: '1px solid #4FA1C1',  color: '#4FA1C1'}} onClick={() => handleClearFilter()}>
          Limpar Filtros
        </Button>

        <span className='count-func'>
          Ativos {countAtivos} / {countFuncionarios}
        </span>
      </div>

      <div className="listusers-content">
        {funcionarios.map((funcionario, key) => (
          <div className='card-content' key={key}>
            <div className='func-info'>
              <h1>{funcionario.values.nome}</h1>
              <Tag color='#4FA1C1' style={{borderRadius: '36px', fontSize: '14px'}}>{funcionario.values.cpf.slice(0,3)}.{funcionario.values.cpf.slice(3,6)}.{funcionario.values.cpf.slice(6,9)}-{funcionario.values.cpf.slice(9,11)}</Tag>
              { funcionario['values']['Activities'][0]['activity'] !== undefined ?
                funcionario['values']['Activities']?.map((atividade : any, key : any) => (
                <Tag key={key} color='#4FA1C1' style={{borderRadius: '36px', fontSize: '14px'}}>{atividade.activity}</Tag>
                )) : null}
              <Tag color='#4FA1C1' style={{borderRadius: '36px', fontSize: '14px'}}> Cargo {funcionario.values.cargo}</Tag>
            </div>
            <div>
              <Button>
                <EllipsisOutlined style={{fontSize: '25px'}}/>
              </Button>
            </div>  
          </div>
        ))}
      </div>

      <div style={{display: 'flex', justifyContent: 'flex-end', gap: '5px', color: '#3A3A3A'}}>
        <span> A etapa está concluída? </span>
        <Switch onChange={handleFunctionary} style={{backgroundColor: '#DBDBDB', color:'#3A3A3A'}} checkedChildren="Sim" unCheckedChildren="Não" disabled={false}/>
      </div>
    </div>    
  )
}
