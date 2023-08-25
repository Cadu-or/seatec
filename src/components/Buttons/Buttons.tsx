import './style.css';
import { Building } from '../../assets/images/Building'
import { Badge, Button } from 'antd';

interface BuildingButtonProps {
  title: string;
  status: boolean;
}

interface SideButtonProps {
  icon: React.JSX.Element;
  badge: React.JSX.Element | null;
}

interface BackButtonProps {
  onClick: () => void;
}

export function BuildingButton ({title, status} : BuildingButtonProps){
  return(
    <div className='button-navbar'>
      <Button type="primary" icon={<Building />} size={'large'} style={{padding: '30px', alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '20px'}} />
      <span>{title}</span>
      {status ? <span> Concluído </span> : <span> </span>}
    </div>
  )
}

export function SideButton ({icon, badge} : SideButtonProps){
  return(
    <div>
      {badge ?
        <Badge count={badge} >
          <Button type="default" icon={icon} style={{padding:'16px',alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '10px', borderColor: 'none'}} />
        </Badge>
        :
        <Button type="default" icon={icon} style={{padding:'16px',alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '10px', border: 'none'}} />
      }
    </div>
  )
}

export function BackButton ({ onClick }: BackButtonProps){
  return(
    <div>
      <button type="button" onClick={() => onClick()}> Seta </button>
      <span> Adicionar Funcionário </span>
    </div>
    
  )
}