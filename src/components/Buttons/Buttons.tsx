import './style.css';
import { Building } from '../../assets/images/Building'
import { Badge, Button } from 'antd';
import { ArrowLeft } from '@phosphor-icons/react';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../redux/formSlice';

interface BuildingButtonProps {
  title: string;
  status: boolean;
}

interface SideButtonProps {
  icon: React.JSX.Element;
  badge: React.JSX.Element | null;
}

export function BuildingButton ({title, status} : BuildingButtonProps){
  return(
    <div className='button-navbar'>
      <Button icon={<Building />} size={'large'} style={{padding: '30px', alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '20px', margin: 'auto'}} />
      <span>{title}</span>
      {status ? <span> CONCLUÍDO </span> : <span style={{visibility: 'hidden'}}> CONCLUÍDO </span>}
    </div>
  )
}

export function SideButton ({icon, badge} : SideButtonProps){
  return(
    <div>
      {badge ?
        <Badge count={badge} >
          <Button icon={icon} style={{padding:'16px',alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '10px', border: 'none'}} />
        </Badge>
        :
        <Button icon={icon} style={{padding:'16px',alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '10px', border: 'none'}} />
      }
    </div>
  )
}


export function BackButton (){
  const dispatch = useDispatch();
  function handleForm(){
    dispatch(changeForm())
  }
  return(
    <div className='backbutton-container'>
      <button className='back-button' onClick={() => handleForm()}>
        <ArrowLeft size={35} color="#FFFFFF" weight="bold" cursor={'pointer'}/> 
      </button>
      <span> Adicionar Funcionário </span>
    </div>
  )
}