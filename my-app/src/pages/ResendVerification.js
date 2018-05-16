import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

let email = '';
class ResendVerification extends Component {
    handleresendVerify() {
        axios.get('http://localhost:8080/resendVerificationEmail?email=' + email, {
        })
            .then(function (response) {
                toast.success('Email has been sent with new password!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }).then(this.closeRegister)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                <Form inverted>
                    <Form.Input
                        label='Please enter your E-mail'
                        onChange={(e, data) => email = data.value}
                        placeholder='joe@schmoe.com' />
                    <Button onClick={(event, data) => this.handleresendVerify()}> Re-Send</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(ResendVerification);
