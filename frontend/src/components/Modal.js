import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="todo-title">Name</Label>
                            <Input
                                type="text"
                                id="city-name"
                                name="name"
                                value={this.state.activeItem.name}
                                onChange={this.handleChange}
                                placeholder="Enter City Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Latitude</Label>
                            <Input
                                type="number"
                                id="todo-description"
                                name="lat"
                                value={this.state.activeItem.lat}
                                onChange={this.handleChange}
                                placeholder="Enter Latitude"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Longitude</Label>
                            <Input
                                type="number"
                                id="todo-description"
                                name="long"
                                value={this.state.activeItem.long}
                                onChange={this.handleChange}
                                placeholder="Enter Longitude"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
