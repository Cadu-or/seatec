import "./style.css";

import { Tabs } from "antd";
import { SideButton } from "../Buttons/Buttons";
import BuildingSmall from "../../assets/images/BuildingSmall";
import Task from "../../assets/images/Task";
import Graph from "../../assets/images/Graph";
import Sign from "../../assets/images/Sign";
import Recent from "../../assets/images/Recent";
import Person from "../../assets/images/Person";

export function Sidebar() {
  const items = [
    { key: "1", label: <SideButton icon={<BuildingSmall />} badge={null} />, disabled: true },
    { key: "2", label: <SideButton icon={<Task />} badge={null} />},
    { key: "3", label: <SideButton icon={<Graph />} badge={null} />, disabled: true},
    { key: "4", label: <SideButton icon={<Sign />} badge={null} />, disabled: true},
    { key: "5", label: <SideButton icon={<Recent />} badge={null} />, disabled: true},
    { key: "6", label: <SideButton icon={<Person />} badge={null} />, disabled: true},
  ];

  return (
    <div className="sidebar-container">
      <Tabs
        defaultActiveKey="2"
        tabPosition={"right"}
        items={items}
      />
    </div>
  );
}
