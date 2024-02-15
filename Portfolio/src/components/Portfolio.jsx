import { Component} from "react"
import ProjectList from './ProjectList'
import projectsJson from '../assets/projects.json'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const filters = ["All", "Websites", "Flayers", "Business Cards"];

class Portfolio  extends Component {
    constructor(props){
        super(props);
        this.state = {key: "All"}
    }
    render(){
        return (
            <>
                <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={(k) => this.setState({key: k})}
                className="mb-3"
                >
                    {filters.map((name)=>(
                        <Tab  eventKey={name} key={name} title={name}>
                            <ProjectList  projects={name=="All" ? projectsJson : projectsJson.filter(k=>k.category ==name)} />
                        </Tab>
                    ))}        
                </Tabs>
                
            </>
        );
    }
}


export default Portfolio;