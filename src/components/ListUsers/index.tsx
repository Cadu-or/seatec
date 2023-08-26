import axios from 'axios';
import './style.css';
import { Button, Card, Tag } from "antd";
import { useEffect, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';



export function ListUsers(){
  const [funcionarios, setFuncionarios] = useState<any[]>([]);
  const [filtroAtivo, setFiltroAtiv] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:3001/funcionarios')
      .then((response) => {
        setFuncionarios(response.data);
      })
      .catch((error) => console.error('Erro na requisição GET:', error));
  }, []);

  const setFilter = () => {
    {filtroAtivo ? setFiltroAtiv(false) : setFiltroAtiv(true)}
  };

  return(
    <div className="listusers-container">
      <div className="filter-container"> 
        <Button style={{borderRadius: '10px'}} onClick={() => setFilter()}>
          Ver apenas ativos
        </Button>

        <Button style={{borderRadius: '10px'}}>
          Limpar Filtros
        </Button>
      </div>

      <div className="listusers-content">
        {funcionarios.map((funcionario, key) => (
          <div className='card-content' key={key}>
            <div className='func-info'>
              <h1>{funcionario.values.nome}</h1>
              <Tag color='#4FA1C1' style={{borderRadius: '36px'}}>{funcionario.values.cpf}</Tag>
              <Tag color='#4FA1C1' style={{borderRadius: '36px'}}> Cargo {funcionario.values.cargo}</Tag>
              {funcionario['values']['activities']?.map((atividade : any, key : any) => (
                <Tag key={key} color='#4FA1C1' style={{borderRadius: '36px'}}>{atividade.activity}</Tag>
              ))}
            </div>
            <div>
              <Button>
                <EllipsisOutlined style={{fontSize: '25px'}}/>
              </Button>
            </div>  
          </div>
        ))}
      </div>

    </div>    
  )
}