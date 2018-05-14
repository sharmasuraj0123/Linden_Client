import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

let email = '';
class ResendVerification extends Component {
    handleForgotPassword() {
        axios.post('http://localhost:8080/user/forgotPassword', {
            email: email
        })
            .then(function (response) {
                toast.success('Email has been sent with new password!', {
                    position: toast.POSITION.TOP_CENTER
                });
            })
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
                        placeholder='joe@schmoe.com'
                    />
                    <Button
                        onClick={(event, data) =>
                            this.handleForgotPassword()}>
                        Reset Password
                    </Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(ResendVerification);