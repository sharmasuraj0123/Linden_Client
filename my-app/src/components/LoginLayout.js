import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Modal } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';

let email = '';
let password = '';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { openLogin: false, error: null }
    }
    showLogin = dimmer => () => this.setState({ dimmer, openLogin: true })
    closeLogin = () => this.setState({ openLogin: false, error: null })
    handleLogin() {

        axios.post('http://localhost:8080/login', {
            email: email,
            password: password,
        }).then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
                console.log('Invalid Creds!');
                toast.error('Invalid Creds!', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                response = response.obj;
                const cookies = new Cookies();
                let obj = {
                    token: response.token,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email,
                    id: response.id
                };
                cookies.set('obj', obj);
                console.log(cookies.get('obj').token);
                window.location.reload();
            }
        }).then(this.closeLogin)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openLogin, dimmer } = this.state

        return (
            <Modal trigger={<Button color='black' size='small' onClick={this.showLogin('blurring')}>Log-in</Button>}
                dimmer={dimmer} open={openLogin} onClose={this.closeLogin.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 450 }}>
                <Modal.Content>
                    <div className='login-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' color='grey' textAlign='center'>
                                    Log-in to your account
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
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
                                        <Button color='black' fluid size='large' onClick={(event, data) => this.handleLogin()}>Login</Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    New to Linden? <a href='register'>Sign Up</a>
                                </Message>
                                <Message>
                                    Forgot Password?
                                    <a href='http://localhost:3000/forgotPassword'>
                                        Forgot Password
                                    </a>
                                </Message>
                                <Message>
                                    Did not recieve Verification e-mail?
                                    <a href='http://localhost:3000/resendVerify'>
                                        Resend Verification
                                    </a>
                                </Message>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default LoginForm;
