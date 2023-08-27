import { FileTextOutlined } from "@ant-design/icons";
import BuildingSmall from "../../assets/images/BuildingSmall";
import Graph from "../../assets/images/Graph";
import Sign from "../../assets/images/Sign";
import Task from "../../assets/images/Task";
import { SideButton } from "../Buttons/Buttons";
import Recent from "../../assets/images/Recent";
import Person from "../../assets/images/Person";

export const cargoOptions = [
  { value: '1', label: 'Cargo 1' },
  { value: '2', label: 'Cargo 2' },
  { value: '3', label: 'Cargo 3' },
  { value: '4', label: 'Cargo 4' },
  { value: '5', label: 'Cargo 5' },
  { value: '6', label: 'Cargo 6' },
  { value: '7', label: 'Cargo 7' },
]

export const epiOptions = [
  {value: "1", label: "Calçado de Segurança"},
  {value: "2", label: "Óculos de Segurança"},
  {value: "3", label: "Proteção Respiratória"},
  {value: "4", label: "Coletes de Sinalização"},
  {value: "5", label: "Luvas de Segurança"},
  {value: "6", label: "Protetores Auditivos"},
  {value: "7", label: "Protetores Faciais"},
]

export const activityOptions = [
  { value: "Ativ 1", label: "Ativid. 1" },
  { value: "Ativ 2", label: "Ativid. 2" },
  { value: "Ativ 3", label: "Ativid. 3" },
  { value: "Ativ 4", label: "Ativid. 4" },
  { value: "Ativ 5", label: "Ativid. 5" },
  { value: "Ativ 6", label: "Ativid. 6" },
  { value: "Ativ 7", label: "Ativid. 7" },
  { value: "Ativ 8", label: "Ativid. 8" },
]

export const itemsSidebar = [
  { key: "1", label: <SideButton icon={<BuildingSmall />} badge={null} />, disabled: true },
  { key: "2", label: <SideButton icon={<Task />} badge={null} />},
  { key: "3", label: <SideButton icon={<Graph />} badge={null} />, disabled: true},
  { key: "4", label: <SideButton icon={<Sign />} badge={<FileTextOutlined className="badge-icon"/>} />, disabled: true},
  { key: "5", label: <SideButton icon={<Recent />} badge={null} />, disabled: true},
  { key: "6", label: <SideButton icon={<Person />} badge={null} />, disabled: true},
];