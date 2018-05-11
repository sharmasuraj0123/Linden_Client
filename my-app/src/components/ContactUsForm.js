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
                
                <Message>
                    Want to become a Critic? <a href='critics/apply'>Apply here</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default ContactUsForm;