import { useState } from 'react';
import { IFilms } from '../../models/interface';
import data from '../../pages/rating/data.json'
interface FilmHolderProps {
    render: (film: IFilms[]) => React.ReactNode
}


export const FilmHolder = ({ render }:FilmHolderProps) => {
    const [film] = useState<IFilms[]>(data);

    return <>{render(film)}</>;
}