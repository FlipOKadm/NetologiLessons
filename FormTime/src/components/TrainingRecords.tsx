import { Component } from "react";
import { IFormData, ITrainingRecords } from "../model/interface";
import FormTime from "./FormTime";
import ListData from "./ListData";

type TrainingRecordsProps = {
  items: ITrainingRecords; 
  changedData: IFormData;
}

type TrainingRecordsState = {
  items: Array<IFormData>;
}
export class TrainingRecords extends Component<TrainingRecordsProps, TrainingRecordsState>{
    public static defaultProps = {
        items: { items: [{ date: new Date(), distance: 0}] }
    };
    
    constructor(props: TrainingRecordsProps) {
        super(props);
        this.state = {
            items: props.items.items
        };
    }

    onSetData = (newTraining: IFormData)=>{
        
        if (!newTraining.date && !newTraining.distance) {
            return;
        }        
        this.setState((prevState: ITrainingRecords) => {
            let temp;
            let hasRecord = false;
            if (Object.keys(prevState).length !== 0){
                
                 temp = prevState.items.map((item) => {
                                       
                    if (item.date === newTraining.date) {
                        
                        item.distance += newTraining.distance;
                        hasRecord = true;
                    }
                        return item;
                });
                
                if(!hasRecord){
                    temp = [...prevState.items, newTraining];
                }
            } else {
                return {items: [newTraining]}
            }
            
            return {
                
                items: [...temp].sort((a, b) =>
                    Date.parse(b.date) - Date.parse(a.date))
            };

            
        });
    } 
    
    private removeItem = (date: string) => {
        this.setState((prevState: ITrainingRecords) => {
            return {
                items: prevState.items.filter((item) => item.date !== date)
            }
        })
    };
    
    

    render() {        
        const { items } = this.state;
        const { removeItem } = this;
        return (
            <>
                <FormTime onSetData={this.onSetData} />
                <ListData items={items} removeItem={removeItem}/>
            </>
        );
    }

}