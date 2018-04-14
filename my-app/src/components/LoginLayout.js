import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react'



const LoginForm = () => (
    <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        
      }
    `}</style>
        <Grid
            textAlign='left'
            style={{ height: '100%' }}
            verticalAlign='middle'
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='grey' textAlign='center'>
                    {' '}Log-in to your account
        </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Form.Field
                            control={Checkbox}
                            label={<label>Remember Me</label>}
                            fluid
                        />
                        <Button color='black' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    New to Linden? <a href='register'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginForm