import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Checkbox, Input } from 'semantic-ui-react'

const ContactUsForm = () => (
    <div className='contactUs-form'>
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
            <Grid.Column style={{ maxWidth: 600 }}>
                <Header as='h2' color='grey' textAlign='center'>
                    {' '}Contact Us
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
                            label='E-mail address'
                        />
                        <Form.Group inline >
                            <Form.Field >
                                <label>Phone Number</label>
                                <Input placeholder='(xxx)' style={{ width: 75 }} />
                            </Form.Field>
                            <Form.Field>
                                <Input placeholder='xxx' style={{ width: 75 }} />
                            </Form.Field>
                            <Form.Field>
                                <Input placeholder='xxxx' style={{ width: 75 }} />
                            </Form.Field>
                        </Form.Group>
                        <Form.TextArea label='About' placeholder='Tell us more about reason for Contact' />
                        <Form.Field
                            control={Checkbox}
                            label={<label>I agree to the Terms and Conditions</label>}
                            fluid
                        />
                        <Button color='black' fluid size='large'>Send</Button>
                    </Segment>
                </Form>
                <Message>
                    Want to become a Critic? <a href='critics/apply'>Apply here</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default ContactUsForm;