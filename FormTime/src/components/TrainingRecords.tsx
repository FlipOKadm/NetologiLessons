import { Component } from "react";
import { IFormData, ITrainingRecords } from "../model/interface";
import FormTime from "./FormTime/FormTime";
import ListData from "./List/ListData";

type TrainingRecordsState = {
  items: Array<IFormData>;
  changedData?: IFormData;
}
export class TrainingRecords extends Component<ITrainingRecords, TrainingRecordsState>{    
    constructor(props: ITrainingRecords) {
        super(props);
        this.state = {
            items: [{date: new Date().toISOString().slice(0,10), distance: 0}]
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

    private changedItem = (data: string) => {
        this.setState((prevState: ITrainingRecords) => {
            return {
                changedData: prevState.items.filter((item) => item.date === data)[0]
            }
        })
        
    }
    

    

    render() {        
        const { items, changedData } = this.state;
        const { removeItem, changedItem } = this;
        
        return (
            <>
                <FormTime onSetData={this.onSetData} dataForm={changedData}/>
                <ListData items={items} removeItem={removeItem} changedItem={(data) => changedItem(data)}/>
            </>
        );
    }

}