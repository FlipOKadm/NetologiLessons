import { useState } from 'react';
import { IProduct } from '../../models/interface';
import data from '../../pages/listing/data.json'
interface CardsHolderProps {
    render: (cards: IProduct[]) => React.ReactNode
}

const dataFillter = data.filter((card) => card.state==="active");
export const CardsHolder = ({ render }:CardsHolderProps) => {
    const [cards] = useState<IProduct[]>(dataFillter);

    return <>{render(cards)}</>;
}
