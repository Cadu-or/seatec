import { itemsSidebar } from "../Variables";
import "./style.css";
import { Tabs } from "antd";


export function Sidebar() {

  const items = itemsSidebar

  return (
    <div className="sidebar-container">
      <div className="blank-element">
      </div>
      <Tabs
        defaultActiveKey="2"
        tabPosition={"right"}
        items={items}
      />
    </div>
  );
}
