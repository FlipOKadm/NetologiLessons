import { ListItemProps } from '../model/interface';
import { formatDate } from '../shared/function';


const ListItem: React.FC<ListItemProps> = ({ item, removeItem }) => {
    const changedItem = (date: string) => {
        console.log('date',date);
    }
    return (
        <tr>
            <td>{formatDate(new Date(item.date))}</td>
            <td>{item.distance}</td>
            <td><button onClick={() => changedItem(item.date)}>Edit</button></td>
            <td><button onClick={() => removeItem(item.date)}>Delete</button></td>
        </tr>
    );
};

export default ListItem;