import { ListItemProps } from '../../model/interface';
import { formatDate } from '../../shared/function';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const ListItem: React.FC<ListItemProps> = ({ item, removeItem, changedItem }) => {
    
    return (
        <tr>
            <td>{formatDate(new Date(item.date))}</td>
            <td>{item.distance}</td>
            <td><button onClick={() => changedItem(item.date)}><EditIcon/></button><button onClick={() => removeItem(item.date)}><ClearIcon/></button></td>
        </tr>
    );
};

export default ListItem;