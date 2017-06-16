import React, { Component } from 'react';
import {FieldGroup, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;


class AddResource extends Component {
  render() {
    return (
        <form>
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter Name"/>

            <FieldGroup
                id="formControlsText"
                type="url"
                label="Url"
                placeholder="Enter URL"/>

            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <Button type="submit">
                Submit
            </Button>
        </form>
    );
  }
}

export default AddResource;
