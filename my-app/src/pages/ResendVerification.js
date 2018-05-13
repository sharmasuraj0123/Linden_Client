import React,  { Component }  from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

let email = '';
    class ResendVerification extends Component {
        handleresendVerify() {
            axios.get('http://localhost:8080/resendVerificationEmail?email='+ email, {       
            })
                .then(function (response) {
                    response = response.data;
                    if (response.status === 'ERROR') {
                        console.log('Invalid Creds!');
                    } else {
                        response = response.obj;
                    }
                }).then(this.closeRegister)
                .catch(function (error) {
                    console.log(error)
                })
        }          
        render() {           
          return (
            <div>
                <Form error>
                <Form.Input label='Email' 
                onChange={(e, data) => email = data.value}
                placeholder='joe@schmoe.com' />
                <Button onClick={(event, data) => this.handleresendVerify()}> Re-Send</Button>
                </Form>
            </div>
            )
        }
      }

export default withRouter(ResendVerification);