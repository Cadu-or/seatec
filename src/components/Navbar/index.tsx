import "./style.css"
import { BuildingButton } from "../Buttons/Buttons"
import { useState } from "react"

export function Navbar(){
  const [status, setStatus] = useState(false)

  const items = [
    {key: '1', title: 'ITEM 1', status: status},
    {key: '2', title: 'ITEM 1', status: status},
    {key: '3', title: 'ITEM 1', status: status},
    {key: '4', title: 'ITEM 1', status: status},
    {key: '5', title: 'ITEM 1', status: status},
    {key: '6', title: 'ITEM 1', status: status},
    {key: '7', title: 'ITEM 1', status: status},
    {key: '8', title: 'ITEM 1', status: status},
    {key: '9', title: 'ITEM 1', status: status}
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