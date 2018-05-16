import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Modal, Card, Label, Rating } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const cookies = new Cookies();
class AdminDeleteUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openAdminDeleteUser: false, error: null, review: this.props.review }
    }
    showAdminDeleteUser = dimmer => () => this.setState({ dimmer, openAdminDeleteUser: true })
    closeAdminDeleteUser = () => this.setState({ openAdminDeleteUser: false, error: null })

    handleAdminDeleteUser() {
        let id = this.props.id
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        console.log(id);
        axios.post('http://localhost:8080/admin/deleteUser/' + id, {
            token: token
        }).then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
                console.log('Can\'t Delete User');
            } else {
                response = response.obj;
                window.location.replace("http://localhost:3000")
                
            }
        }).then(this.closeAdminDeleteUser)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openAdminDeleteUser, dimmer } = this.state

        return (
            <Modal trigger={<Button basic color='red' size='small' onClick={this.showAdminDeleteUser('blurring')}>Delete User</Button>}
                dimmer={dimmer} open={openAdminDeleteUser} onClose={this.closeAdminDeleteUser.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='AdminDeleteUser-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 550 }}>

                                <Message>
                                    <Card.Content>
                                        <Header as='h2' color='grey' textAlign='center'>
                                            Are you Sure you Want to AdminDelete This User?
                                </Header>    
                                    </Card.Content>  
                                </Message>
                                <Form size='large'>
                                    <Button color='red' fluid size='large' onClick={(event, data) => this.handleAdminDeleteUser()}>Delete User</Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default withRouter(AdminDeleteUserModal);
