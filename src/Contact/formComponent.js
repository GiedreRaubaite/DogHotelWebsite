import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class FormComponent extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Įvesk savo vardą</Form.Label>
                    <Form.Control type="name" placeholder="Vardas Pavardė" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Įvesk savo e-mail adresą</Form.Label>
                    <Form.Control type="email" placeholder="E-mail" required email />
                </Form.Group>
                <Form.Group controlId="controlTextarea">
                    <Form.Label>Parašyk savo klausimą </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Klausimas" />
                </Form.Group>
                <Button variant="primary" className="ml-3 standardButton" type="submit">
                    Išsiųsti
                                        </Button>
                <Form.Text className="text-muted mt-2">
                    Mes saugome tavo privatumą ir nesidaliname tavo asmenine informacija
                                        </Form.Text>
            </Form >
        )
    }
}

export default FormComponent