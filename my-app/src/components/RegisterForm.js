import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Modal, Checkbox } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';

let email = '';
let password = '';
let firstName = '';
let lastName = '';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { openLogin: false, error: null }
    }

    showRegister = dimmer => () => this.setState({ dimmer, openRegister: true })
    closeRegister = () => this.setState({ openRegister: false })

    handleRegister() {
        axios.post('http://localhost:8080/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
            .then(function (response) {

                response = response.data;
                if (response.status === 'ERROR') {
                    console.log('Invalid Creds!');
                } else {
                    response = response.obj;
                    const cookies = new Cookies();
                    cookies.set('username', response.firstName);
                    console.log(cookies.get('username'));
                }
            }).then(this.closeRegister)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openRegister, dimmer } = this.state
        return (
            <Modal trigger={<Button color='black' size='mini' onClick={this.showRegister('blurring')}>Register</Button>}
                dimmer={dimmer} open={openRegister} onClose={this.closeRegister} style={{ marginTop: '15em', marginLeft: "25em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='register-form'>
                        <style>{`body > div, body > div > div, body > div > div > div.login-form {}`}</style>
                        <Grid
                            textAlign='left'
                            style={{ height: '100%' }}
                            verticalAlign='middle'
                        >
                            <Grid.Column style={{ maxWidth: 550 }}>
                                <Header as='h2' color='grey' textAlign='center'>
                                    {' '}Register
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid id='form-subcomponent-shorthand-input-first-name'
                                                label='First name'
                                                placeholder='First name'
                                                onChange={(e, data) => firstName = data.value} />
                                            <Form.Input fluid id='form-subcomponent-shorthand-input-last-name'
                                                label='Last name'
                                                placeholder='Last name'
                                                onChange={(e, data) => lastName = data.value} />
                                        </Form.Group>
                                        <Form.Input
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='E-mail address'
                                            onChange={(e, data) => email = data.value}
                                        />
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={(e, data) => password = data.value}
                                        />

                                        <Form.Field
                                            control={Checkbox}
                                            label={<label>I agree to the Terms and Conditions</label>}
                                            fluid
                                        />
                                        <Button
                                            color='black'
                                            fluid size='large'
                                            onClick={(event, data) => this.handleRegister()}>Sign up</Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    Already have an Account? <a href='login'>Log in here</a>
                                </Message>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}


export default RegisterForm;
