import { Button, Card } from "antd";
import { ListUsers } from "../ListUsers";
import { useDispatch } from "react-redux";
import { changeForm } from "../../redux/formSlice";

export function Functionary(){
  const dispatch = useDispatch();
  
  function handleForm(){
    dispatch(changeForm())
  }

  return (
    <>
      <Card title="Funcionário(s)" bordered={false} style={{fontFamily: 'Ubuntu'}}>
        <Button onClick={() => handleForm()}style={{border:'1px solid #4FA1C1', width: '100%', borderRadius: '10px', height:60, marginBottom: 15, color: '#4FA1C1'}}>
          + Adicionar Funcionário
        </Button>
        <ListUsers/>
      </Card>
      <div style={{width: '100%'}}>
        <Button style={{color: '#FFFFFF', backgroundColor: '#4FA1C1', borderRadius: '10px', marginTop: '10px', border: 'none', position: 'absolute', right: 40}}>
          Próxima Página
        </Button>
      </div>
    </>

  )
}