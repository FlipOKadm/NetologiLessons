export interface IFormData {
    date: Date;
    distance: number;
}


export interface ITrainingRecords {
    items: IFormData[]
}


export interface ListItemProps {
    item: IFormData;
    removeItem: (date: Date) => void;
    changedItem: (date: Date) => void;
}
