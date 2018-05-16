import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Modal, Checkbox } from 'semantic-ui-react';
import axios from 'axios';

let poster = '';
let password = '';
let name = '';
let details = '';

class EditMovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openLogin: false, error: null }
    }

    showEditMovie = dimmer => () => this.setState({ dimmer, openEditMovie: true })
    closeEditMovie = () => this.setState({ openEditMovie: false })

    handleEditMovie() {
        axios.post('http://localhost:8080/admin/EditMovie', {
            name: name,
            details: details,
            poster: poster,
            password: password,
        })
            .then(function (response) {
                response = response.data;
                if (response.status === 'ERROR') {
                    console.log('Invalid Creds!');
                } else {
                    response = response.obj;
                }
            }).then(this.closeEditMovie)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openEditMovie, dimmer } = this.state
        return (
            <Modal trigger={<Button color='black' size='small' onClick={this.showEditMovie('blurring')}>Edit Movie</Button>}
                dimmer={dimmer} open={openEditMovie} onClose={this.closeEditMovie} style={{ marginTop: '15em', marginLeft: "25em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='EditMovie-form'>
                        <style>{`body > div, body > div > div, body > div > div > div.login-form {}`}</style>
                        <Grid
                            textAlign='left'
                            style={{ height: '100%' }}
                            verticalAlign='middle'
                        >
                            <Grid.Column style={{ maxWidth: 550 }}>
                                <Header as='h2' color='grey' textAlign='center'>
                                    {' '}Edit Movie
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid id='form-subcomponent-shorthand-input-first-name'
                                                label='Name'
                                                placeholder='Name'
                                                onChange={(e, data) => name = data.value} />
                                            <Form.Input fluid id='form-subcomponent-shorthand-input-last-name'
                                                label='Details'
                                                placeholder='summary'
                                                onChange={(e, data) => details = data.value} />
                                        </Form.Group>
                                        <Form.Input
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='E-mail Editress'
                                            onChange={(e, data) => poster = data.value}
                                        />
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Poster Path'
                                            label='Poster'
                                            onChange={(e, data) => password = data.value}
                                        />

                                        <Form.Field
                                            control={Checkbox}
                                            label={<label>I agree to the Terms and Conditions</label>}
                                            fluid
                                        />
                                        <Button
                                            color='black'
                                            fluid size='large'
                                            onClick={(event, data) => this.handleEditMovie()}>Sign up</Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    Already have an Account? <a href='login'>Log in here</a><br/>
                                    Didn't Recieve Verification poster? <a href='resendVerify'>Verify here</a>
                                </Message>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default EditMovieModal;
