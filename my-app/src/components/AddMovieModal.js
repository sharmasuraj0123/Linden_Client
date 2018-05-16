import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Modal, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import Cookies from 'universal-cookie';

let poster = '';
let password = '';
let name = '';
let details = '';

const cookies = new Cookies();
class AddMovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openLogin: false, error: null }
    }

    showAddMovie = dimmer => () => this.setState({ dimmer, openAddMovie: true })
    closeAddMovie = () => this.setState({ openAddMovie: false })

    handleAddMovie() {
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/admin/addMovie', {
            token: token,
            obj: {
                name: name,
                details: details,
                poster: poster,
                contentType: 'MOVIE'
            }
        })
            .then(function (response) {
                response = response.data;
                if (response.status === 'ERROR') {
                    console.log('Invalid Creds!');
                } else {
                    response = response.obj;
                }
            }).then(this.closeAddMovie)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openAddMovie, dimmer } = this.state
        return (
            <Modal trigger={<Button color='black' size='small' onClick={this.showAddMovie('blurring')}>Add Movie</Button>}
                dimmer={dimmer} open={openAddMovie} onClose={this.closeAddMovie} style={{ marginTop: '15em', marginLeft: "25em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='AddMovie-form'>
                        <style>{`body > div, body > div > div, body > div > div > div.login-form {}`}</style>
                        <Grid
                            textAlign='left'
                            style={{ height: '100%' }}
                            verticalAlign='middle'
                        >
                            <Grid.Column style={{ maxWidth: 550 }}>
                                <Header as='h2' color='grey' textAlign='center'>
                                    {' '}Add Movie
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
                                            placeholder='poster'
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
                                            onClick={(event, data) => this.handleAddMovie()}>Sign up</Button>
                                    </Segment>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default AddMovieModal;
