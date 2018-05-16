import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Modal, Card, Label, Rating } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
class DeleteReviewModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openDeleteReview: false, error: null, review: this.props.review }
    }
    showDeleteReview = dimmer => () => this.setState({ dimmer, openDeleteReview: true })
    closeDeleteReview = () => this.setState({ openDeleteReview: false, error: null })

    handleDeleteReview() {
        let reviewId = this.props.review.id
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/user/deleteReview/' + reviewId, {
            token: token,
            reviewId: reviewId,
        }).then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
                console.log('Cant DeleteReview');
            } else {
                response = response.obj;
                window.location.reload();
            }
        }).then(this.closeDeleteReview)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openDeleteReview, dimmer } = this.state

        return (
            <Modal trigger={<Button basic color='red' size='small' onClick={this.showDeleteReview('blurring')}>Delete</Button>}
                dimmer={dimmer} open={openDeleteReview} onClose={this.closeDeleteReview.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='DeleteReview-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 550 }}>

                                <Message>
                                    <Card.Content>
                                        <Header as='h2' color='grey' textAlign='center'>
                                            Are you Sure you Want to Delete This Review?
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
                                    <Button color='red' fluid size='large' onClick={(event, data) => this.handleDeleteReview()}>Delete Review</Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default DeleteReviewModal;
