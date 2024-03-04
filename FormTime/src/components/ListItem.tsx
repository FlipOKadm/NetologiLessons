import { ListItemProps } from '../model/interface';



const ListItem: React.FC<ListItemProps> = ({ item, removeItem, changedItem }) => {
    return (
        <tr>
            <td>{item.date.toLocaleString()}</td>
            <td>{item.distance}</td>
            <td><button onClick={() => changedItem(item.date)}>Edit</button></td>
            <td><button onClick={() => removeItem(item.date)}>Delete</button></td>
        </tr>
    );
};

export default ListItem;