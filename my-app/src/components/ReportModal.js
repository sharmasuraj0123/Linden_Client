import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Modal, Card, Label,Rating } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';


let report = '';
const cookies = new Cookies();
class ReportModal extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { openReport: false, error: null, review: this.props.review }
    }
    showReport = dimmer => () => this.setState({ dimmer, openReport: true })
    closeReport = () => this.setState({ openReport: false, error: null })

    handleReport() {
        let reviewId = this.props.review.id
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/user/reportReview/'+ reviewId,{
           token: token,
            report: report,
        }).then(function (response) {
                response = response.data;
                if (response.status === 'ERROR') {
                    console.log('Cant Report');
                } else {
                    response = response.obj;
                    window.location.reload();
                }
            }).then(this.closeReport)
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        const { openReport, dimmer } = this.state

        return (
            <Modal trigger={<Button color='black' size='small' onClick={this.showReport('blurring')}>Report</Button>}
                dimmer={dimmer} open={openReport} onClose={this.closeReport.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 450 }}>
                <Modal.Content>
                    <div className='Report-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' color='grey' textAlign='center'>
                                   Are you Sure you Want to Report ?
                                </Header>
                                <Message>
                                <Card.Content>
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
                                        <Form.Input
                                            fluid
                                            icon='write'
                                            iconPosition='left'
                                            placeholder='description'
                                            onChange={(e, data) => report = data.value}
                                        />
                                        
                                        <Button color='black' fluid size='large' onClick={(event, data) => this.handleReport()}>Report</Button>
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

export default ReportModal;