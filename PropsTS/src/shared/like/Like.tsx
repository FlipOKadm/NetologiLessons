import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { FC } from 'react';
import { ILike } from '../../models/interface';


export const Like: FC<ILike> = ({onLike, like}) => (
    <IconButton aria-label="like" onClick={()=>onLike()} color="primary">
        {like} <FavoriteIcon />
    </IconButton>
);

