import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Modal, Card, Label, Rating } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const cookies = new Cookies();
class DeleteUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openDeleteUser: false, error: null, review: this.props.review }
    }
    showDeleteUser = dimmer => () => this.setState({ dimmer, openDeleteUser: true })
    closeDeleteUser = () => this.setState({ openDeleteUser: false, error: null })

    handleDeleteUser() {

        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/user/deleteAccount/', {
            token: token
        }).then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
                console.log('Can\'t DeleteUser');
            } else {
                response = response.obj;
                cookies.remove('obj');
                window.location.replace("http://localhost:3000")
                
            }
        }).then(this.closeDeleteUser)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openDeleteUser, dimmer } = this.state

        return (
            <Modal trigger={<Button basic color='red' size='small' onClick={this.showDeleteUser('blurring')}>Delete</Button>}
                dimmer={dimmer} open={openDeleteUser} onClose={this.closeDeleteUser.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='DeleteUser-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 550 }}>

                                <Message>
                                    <Card.Content>
                                        <Header as='h2' color='grey' textAlign='center'>
                                            Are you Sure you Want to Delete This User?
                                </Header>    
                                    </Card.Content>  
                                </Message>
                                <Form size='large'>
                                    <Button color='red' fluid size='large' onClick={(event, data) => this.handleDeleteUser()}>Delete User</Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default withRouter(DeleteUserModal);
