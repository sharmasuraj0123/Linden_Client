import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Modal, Card, Label, Rating } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';

let details = '';
let rating = '';
const cookies = new Cookies();

class EditReviewModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openEditReview: false, error: null, review: this.props.review }
    }
    showEditReview = dimmer => () => this.setState({ dimmer, openEditReview: true })
    closeEditReview = () => this.setState({ openEditReview: false, error: null })

    handleEditReview() {
        let reviewId = this.props.review.id
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/user/editReview/' + reviewId, {
            token: token,
            rating: rating,
            details: details,
            contentType: this.props.review.contentType
        }).then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
                console.log('Cant Edit Review');
            } else {
                response = response.obj;
                window.location.reload();
            }
        }).then(this.closeEditReview)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openEditReview, dimmer } = this.state

        return (
            <Modal trigger={<Button basic color='green' size='small' onClick={this.showEditReview('blurring')}>Edit</Button>}
                dimmer={dimmer} open={openEditReview} onClose={this.closeEditReview.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 450 }}>
                <Modal.Content>
                    <div className='EditReview-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 450 }}>

                                <Message>
                                    <Card.Content>
                                        <Header as='h2' color='grey' textAlign='center'>
                                            Original Review
                                </Header>
                                        <Card.Header>{this.state.review.postedBy.firstName} {this.state.review.postedBy.lastName}  <Label>{this.state.review.reviewType}</Label></Card.Header>
                                        <Card.Meta>
                                            <Rating defaultRating={this.state.review.rating} maxRating={5} disabled />
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Content description={this.state.review.details} />
                                    </Card.Content>
                                </Message>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Header as='h2' color='grey' textAlign='center'>
                                            New Review
                                        </Header>
                                        <Card.Header>{this.state.review.postedBy.firstName} {this.state.review.postedBy.lastName}  <Label>{this.state.review.reviewType}</Label></Card.Header>
                                        <Rating maxRating={5}
                                            onRate={(e, data) => rating = data.rating}
                                            clearable size='large' style={{ color: 'white' }} />
                                        <Form.Input
                                            fluid
                                            icon='write'
                                            iconPosition='left'
                                            placeholder={this.state.review.details}
                                            onChange={(e, data) => details = data.value}
                                        />
                                        <Button color='black' fluid size='large' onClick={(event, data) => this.handleEditReview()}>Edit Review</Button>
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

export default EditReviewModal;
