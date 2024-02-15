
import * as PropTypes from "prop-types";
import { Component } from "react";
import Image from 'react-bootstrap/Image';

class ProjectList  extends Component{
    constructor(props){
        super(props);
        this.projects = props.projects
    }
    render(){
    return (
            <div>
                {this.projects && this.projects.map((p) =>(
                    <Image src={p.img} key={p.category} thumbnail >
                    </Image>
                    ))
                }
            </div>
        );
    }
    

}

ProjectList.propTypes = {
    projects: PropTypes.array
}
export default ProjectList