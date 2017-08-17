import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Card } from 'antd';

class ResourceList extends Component{
    createListItems(){
         return this.props.resources.map((resource) => {
            return(
                <div>
                    <Card key={resource.id} title="resource.title" bordered={false} style={{ width: 300 }}>
                        <p>{resource.description}</p>
                        <a href={resource.url}>More</a>
                    </Card>
                </div>
            )
         });
    }
    render(){
        return(
            <div>
                {this.createListItems()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        resources:state.resources
    }
}

export default connect(mapStateToProps)(ResourceList);
    
//REMOVE THIS
//<div>
//<li key={resource.id}>{resource.title}</li>
//</div>