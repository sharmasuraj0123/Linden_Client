import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react'

const RegisterForm = () => (
    <div className='register-form'>
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
            <Grid.Column style={{ maxWidth: 550 }}>
                <Header as='h2' color='grey' textAlign='center'>
                    {' '}Register
        </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Group widths='equal'>
                            <Form.Input fluid id='form-subcomponent-shorthand-input-first-name' label='First name' placeholder='First name' />
                            <Form.Input fluid id='form-subcomponent-shorthand-input-last-name' label='Last name' placeholder='Last name' />
                        </Form.Group>
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
                            label={<label>I agree to the Terms and Conditions</label>}
                            fluid
                        />
                        <Button color='black' fluid size='large'>Sign up</Button>
                    </Segment>
                </Form>
                <Message>
                    Already have an Account? <a href='login'>Log in here</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default RegisterForm;