import axios from 'axios';
import './style.css';
import { Button } from "antd";
import { useEffect, useState } from 'react';



export function ListUsers(){
  const [funcionarios, setFuncionarios] = useState<any[]>([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/funcionarios')
      .then((response) => {
        setFuncionarios(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error('Erro na requisição GET:', error));
  }, []);

  return(
    <div className="listusers-container">
      <div className="filter-container"> 
        <Button style={{borderRadius: '10px'}}>
          Ver apenas ativos
        </Button>

        <Button style={{borderRadius: '10px'}}>
          Limpar Filtros
        </Button>
      </div>

      <div className="listusers-content">
        <ul>
          {funcionarios.map((funcionario) => (
            <li key={funcionario.id}>
              {funcionario.values.Nome} - {funcionario.values.CPF}
              {funcionario.values.Activitys?.map((activity : any) => (
                <li key={activity.id}>
                  {activity.activity}
                </li>
              ))}
            </li>
          ))}
        </ul>
      </div>

    </div>    
  )
}