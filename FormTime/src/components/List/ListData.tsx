import {IFormData, ITrainingRecords, IFuncData } from "../../model/interface";
import ListItem from "./ListItem";
import  './list.module.css';

interface ListDataProps extends ITrainingRecords, IFuncData {
}

const ListData: React.FC<ListDataProps> = ({ items, removeItem, changedItem}) => {    
  return(
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        { items.map((item: IFormData, index: number) => (
          <ListItem key={index} item={item} removeItem={(date: string) => {removeItem(date)}} changedItem={(date: string) => changedItem(date)} />
        ))}
      </tbody>
    </table>
  );
        };

export default ListData;