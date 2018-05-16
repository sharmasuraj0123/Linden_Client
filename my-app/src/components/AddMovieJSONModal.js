import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Modal, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import Cookies from 'universal-cookie';

let movie =' '

const cookies = new Cookies();
class AddMovieJSONModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openLogin: false, error: null }
    }

    showAddMovieJSON = dimmer => () => this.setState({ dimmer, openAddMovieJSON: true })
    closeAddMovieJSON = () => this.setState({ openAddMovieJSON: false })

    handleAddMovieJSON() {
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/admin/addMovie', {
            token: token,
            obj: JSON.parse(movie)
        })
            .then(function (response) {
                response = response.data;
                if (response.status === 'ERROR') {
                    console.log('Invalid Creds!');
                } else {
                    response = response.obj;
                }
            }).then(this.closeAddMovieJSON)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openAddMovieJSON, dimmer } = this.state
        return (
            <Modal trigger={<Button color='black' size='small' onClick={this.showAddMovieJSON('blurring')}>Add using JSON</Button>}
                dimmer={dimmer} open={openAddMovieJSON} onClose={this.closeAddMovieJSON} style={{ marginTop: '15em', marginLeft: "25em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='AddMovieJSON-form'>
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
                                         <Form.TextArea 
                                          fluid 
                                          label= 'Add the JSON here'
                                          placeholder='Just Paste the JSON here'
                                         onChange={(e, data) => movie = data.value} />
                                        <Button
                                            color='black'
                                            fluid size='large'
                                            onClick={(event, data) => this.handleAddMovieJSON()}>Add</Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default AddMovieJSONModal;
