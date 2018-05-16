import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message,  Modal } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';


let reason =' '
const cookies = new Cookies();
class ApprovePromotionModal extends Component {
    constructor(props) {
        super(props);
        this.state = { openApprovePromotion: false, error: null, review: this.props.review }
    }
    showApprovePromotion = dimmer => () => this.setState({ dimmer, openApprovePromotion: true })
    closeApprovePromotion = () => this.setState({ openApprovePromotion: false, error: null })

    handleApprovePromotion() {
            let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
            let data = JSON.stringify({
                promotionType: this.props.application.promotionType,
                reason: this.props.application.reason,
                userId: this.props.application.userId
            })
        
          
            axios.post('http://localhost:8080/admin/approvePromotion/', data,{
            
              headers:{
                'token' : 'token',
                'Content-Type' : 'application/json'
              }
            }
             
            ).then(function (response) {
                response = response.data;
                console.log(response);
                window.location.reload();
               
            }.bind(this)); 
}

    render() {
        const { openApprovePromotion, dimmer } = this.state

        return (
            <Modal trigger={<Button  basic color='green' size='small' onClick={this.showApprovePromotion('blurring')}>Approve</Button>}
                dimmer={dimmer} open={openApprovePromotion} onClose={this.closeApprovePromotion.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='ApprovePromotion-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 550 }}>
                              
                            <Header as='h2' color='grey' textAlign='center'>
                                    Approve {this.props.application.userId}
                                </Header>
                                <Message>
                                    Are you sure you want to Approve? <br/>
                                </Message>
                                <Form size='large'>
                               
                                        <Button color='black' fluid size='large' onClick={(event, data) => this.handleApprovePromotion()}>Approve</Button>           
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default ApprovePromotionModal;