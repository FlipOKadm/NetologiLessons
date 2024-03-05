import { ITrainingRecords, IFormData } from "../model/interface";
import ListItem from "./ListItem";

interface IListDataProps {
  items: ITrainingRecords,
  removeItem: (date: Date) => void,
  changedItem: (date: Date) => void
}

const ListData: React.FC<IListDataProps> = ({ items, removeItem, changedItem }) => {
  console.log("items", items);
  
    
  return(
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
        </tr>
      </thead>
      <tbody>
        { items.map((item: IFormData, index: number) => (
          <ListItem key={index} item={item} removeItem={(date: Date) => {removeItem(date)}} changedItem={(date: Date) => {changedItem(date)}} />
        ))}
      </tbody>
    </table>
  );
        };

export default ListData;