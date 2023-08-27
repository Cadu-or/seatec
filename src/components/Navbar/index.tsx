import "./style.css"
import { BuildingButton } from "../Buttons/Buttons"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

export function Navbar(){
  const statusFunctionary = useSelector((state:RootState) => state.functionary.isConcluded)
  
  const items = [
    {key: '1', title: 'ITEM 1', status: statusFunctionary},
    {key: '2', title: 'ITEM 1', status: false},
    {key: '3', title: 'ITEM 1', status: false},
    {key: '4', title: 'ITEM 1', status: false},
    {key: '5', title: 'ITEM 1', status: false},
    {key: '6', title: 'ITEM 1', status: false},
    {key: '7', title: 'ITEM 1', status: false},
    {key: '8', title: 'ITEM 1', status: false},
    {key: '9', title: 'ITEM 1', status: false}
  ]

  return(
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="dashed-line"></div>
        {items.map((item, key) => (
          <BuildingButton
            key={key}
            title={item.title}
            status={item.status}
          />
        ))}
      </div>
    </div>
  )
}