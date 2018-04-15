import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';

let email = '';
let password = '';

function handleLogin() {
    axios.post('http://localhost:8080/login', {
        email: email,
        password: password
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
        })
        .catch(function (error) {
            console.log(error)
        })
}

const LoginForm = () => (

    <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        {/* <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        
      }
    `}</style> */}
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
                        <Button color='black' fluid size='large' onClick={(event, data) => handleLogin()}>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    New to Linden? <a href='register'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginForm;
