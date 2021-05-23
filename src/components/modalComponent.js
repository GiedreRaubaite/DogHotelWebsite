import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surName: '',
            email: '',
            password: '',
            isSignedUp: false,
            validated: false,
            formErrors: { name: '', surName: '', email: '', password: '' },
            nameValid: false,
            surNameValid: false,
            passwordValid: false,
            emailValid: false,
            formValid: false
        }

    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
        localStorage.setItem('SignUpName', this.state.name);
        localStorage.setItem('SignUpSurName', this.state.surName);
        localStorage.setItem('SignUpEmail', this.state.email);
        localStorage.setItem('SignUpPassword', this.state.password);
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let surNameValid = this.state.surNameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'name':
                nameValid = value !== "";
                fieldValidationErrors.name = nameValid ? '' : 'Vardo langelis negali būti tuščias';
                break;
            case 'surName':
                surNameValid = value !== "";
                fieldValidationErrors.surName = surNameValid ? '' : 'Pavardės langelis negali būti tuščias';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Neteisingas e-mail adresas';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Slaptažodis turi būti mažiausiai 6 simbolių';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }


    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    handleClickEvent = () => {
        if (this.state.formValid === true) {
            this.props.closeEvent();
        }

    }

    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header closeButton onClick={this.props.closeEvent}>
                    <Modal.Title>Prisijungti</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form noValidate validated={this.state.validated} >
                    <Form.Group controlId="SignUpName">
                        <Form.Label>Vardas</Form.Label>
                        <Form.Control type="text" placeholder="Vardas" name="name" value={this.state.name}
                            onChange={this.handleUserInput} required />
                        <Form.Text className="red">
                            {this.state.formErrors.name}
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="SignUpSurname">
                        <Form.Label>Pavardė</Form.Label>
                        <Form.Control type="text" placeholder="Pavardė" name="surName" value={this.state.surName}
                            onChange={this.handleUserInput} required />
                        <Form.Text className="red">
                            {this.state.formErrors.surName}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="SignUpEmail">
                        <Form.Label>E-mailas</Form.Label>
                        <Form.Control type="email" placeholder="Įvesk savo e-mail adresą" name="email" value={this.state.email}
                            onChange={this.handleUserInput} required email />
                        <Form.Text className="red">
                            {this.state.formErrors.email}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="SignUpPassword">
                        <Form.Label>Slaptažodis</Form.Label>
                        <Form.Control type="password" placeholder="Slaptažodis" name="password" value={this.state.password}
                            onChange={this.handleUserInput} required />
                        <Form.Text className="red">
                            {this.state.formErrors.password}
                        </Form.Text>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" name="closeModal" onClick={this.props.closeEvent}>
                        Close </Button>
                    <Button variant="primary" name="signUp" onClick={this.handleClickEvent} disabled={!this.state.formValid}>
                        Sign Up </Button>
                </Modal.Footer>
            </Modal >
        );
    }
};

export default SignUpModal






