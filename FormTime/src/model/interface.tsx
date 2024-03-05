export interface IFormData {
    date: Date;
    distance: number;
}


export interface ITrainingRecords {
    items: Array<IFormData>
}

export interface IFormDataFunc{
  onChangeData: (items: IFormData) => void
}

export interface ListItemProps {
    item: IFormData;
    removeItem: (date: Date) => void;
    changedItem: (date: Date) => void;
}
