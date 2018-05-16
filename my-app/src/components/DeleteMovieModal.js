import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Modal, Card, Label, Rating } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const cookies = new Cookies();
class DeleteMovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openDeleteMovie: false, error: null, review: this.props.review }
    }
    showDeleteMovie = dimmer => () => this.setState({ dimmer, openDeleteMovie: true })
    closeDeleteMovie = () => this.setState({ openDeleteMovie: false, error: null })

    handleDeleteMovie() {
        let id = this.props.id
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        console.log(id);
        axios.post('http://localhost:8080/admin/deleteMovie/' + id, {
            token: token
        }).then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
                console.log('Can\'t DeleteMovie');
            } else {
                response = response.obj;
                window.location.replace("http://localhost:3000")
                
            }
        }).then(this.closeDeleteMovie)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openDeleteMovie, dimmer } = this.state

        return (
            <Modal trigger={<Button basic color='red' size='small' onClick={this.showDeleteMovie('blurring')}>Delete</Button>}
                dimmer={dimmer} open={openDeleteMovie} onClose={this.closeDeleteMovie.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='DeleteMovie-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 550 }}>

                                <Message>
                                    <Card.Content>
                                        <Header as='h2' color='grey' textAlign='center'>
                                            Are you Sure you Want to Delete This Movie?
                                </Header>    
                                    </Card.Content>  
                                </Message>
                                <Form size='large'>
                                    <Button color='red' fluid size='large' onClick={(event, data) => this.handleDeleteMovie()}>Delete Movie</Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default withRouter(DeleteMovieModal);
