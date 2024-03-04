import { Component } from "react";
import { IFormData, ITrainingRecords } from "../model/interface";
import FormTime from "./FormTime";
import ListData from "./ListData";



export class TrainingRecords extends Component{
    
    constructor(items: ITrainingRecords){
        super(items);
        this.state = items;
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
                    console.log('Date',item.date, newTraining.date);
                    
                    if (item.date === newTraining.date) {
                        item.distance += newTraining.distance;
                        hasRecord = true;
                        return item;
                    }
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
    
    

    public render() {
        
        return (
            <>
                <FormTime onChangeData={this.onChange} />
                <ListData items={this.state} />
            </>
        );
    }

}