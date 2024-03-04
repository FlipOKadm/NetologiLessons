import { ITrainingRecords, ListItemProps } from "../model/interface";
import ListItem from "./ListItem";



const ListData = ({ items }: ITrainingRecords) => {

  console.log(JSON.stringify(items));
  
    
  return(
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
        </tr>
      </thead>
      <tbody>
        {/* {items.map((item: ListItemProps, index) => (
          <ListItem key={index} item={item} />
        ))} */}
      </tbody>
    </table>
  );
        };

export default ListData;