export interface IFormData {
    date: string;
    distance: number;
}

export interface IFuncData{
    removeItem: (date: string) => void;
    changedItem: (date: string) => void;
}
export interface ITrainingRecords {
    items: Array<IFormData>
}

export interface IFormDataFunc{
  onSetData: (items: IFormData) => void
  dataForm?: IFormData
}

export interface ListItemProps extends IFuncData {
    item: IFormData;
}
