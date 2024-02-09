import {Belt} from "./Belt.jsx";
import {Header} from "./Header.jsx";
import {Body} from "./Body.jsx";
import {Component} from "react";
import moment from "moment";


export class Calendar extends Component{
    constructor(props) {
        super(props);

        this.date = props.date.getDate()
    }
    render() {
        return (
            <div className="ui-datepicker">
                <Header date={this.date}/>
                <Belt/>
                <Body/>
            </div>
        );
    }
}