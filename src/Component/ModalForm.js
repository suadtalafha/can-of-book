import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

class ModalForm extends React.Component {
    render() {
        return (
            <div>

                <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <Form onSubmit={this.props.BookForm}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Name" name="name" />

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Book Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Desciption" name="description" />

                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Book Status</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Status" name="status" />

                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Book Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Image" name="image" />

                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="secondary" onClick={this.props.handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>


                </Modal>
            </div>
        )
    }
}

export default ModalForm
