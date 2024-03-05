import { Component } from "react";
import { IFormData, ITrainingRecords } from "../model/interface";
import FormTime from "./FormTime";
import ListData from "./ListData";

type TrainingRecordsProps = {
  items: ITrainingRecords;
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
        this.state = props.items as TrainingRecordsState;
    }

    onChange = (newTraining: IFormData)=>{
        
        if (!newTraining.date && !newTraining.distance) {
            return;
        }        
        this.setState((prevState: ITrainingRecords) => {
            let temp;
            let hasRecord = false;
            if (Object.keys(prevState).length !== 0){
                
                 temp = prevState.items.map((item) => { 
                    console.log("date",item.date === newTraining.date);
                                       
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
                    new Date(a.date).getTime() - new Date(b.date).getTime())
            };
        });
    } 
    
    private removeItem = (date: Date) => {
        this.setState((prevState: ITrainingRecords) => {
            return {
                items: prevState.items.filter((item) => item.date !== date)
            }
        })
    };

    
    

    render() {
        const { items } = this.state;
        return (
            <>
                <FormTime onSetData={this.onChange} onChangeData={this.onChange} />
                <ListData items={items} removeItem={(date: Date) => {this.removeItem(date)}} changedItem={(date: Date) => {this.changedItem(date)}} />
            </>
        );
    }

}