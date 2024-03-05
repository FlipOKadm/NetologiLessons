export interface IFormData {
    date: string;
    distance: number;
}

export interface IFuncData{
    removeItem: (date: string) => void;
}
export interface ITrainingRecords {
    items: Array<IFormData>
}

export interface IFormDataFunc{
  onSetData: (items: IFormData) => void
}

export interface ListItemProps extends IFuncData {
    item: IFormData;
}
