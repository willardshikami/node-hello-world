import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap'
import $ from 'jquery';
import './css/resources.css';

class Resources extends Component {
  constructor(props){
    super(props);
    this.state={resources: []};
  }

  componentDidMount(){
    this.Resources();
  }

  Resources(){
    return $.getJSON('https://localhost:5000/api/resources')
    .then((data) => {
      this.setState({resources: data.results});
    });
  }

  render() {
    const resources = this.state.resources.map((item, index)=> {
      return(
        <div>
          <Row className="show-grid">
            <Col sm={4}>
            <Panel header={item.name} bsStyle="primary">
                <p>{item.description}</p>
                <a className="link" href={item.url}>View More</a>
            </Panel>
            </Col>
        </Row>
        </div>
      );
    });

    return (
      <div className="Resources">
        {resources}
      </div>
    );
  }
}

export default Resources;
