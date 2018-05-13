import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message,  Modal, Card, Label,Rating } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';



const cookies = new Cookies();
class ApplyPromotionModal extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { openApplyPromotion: false, error: null, review: this.props.review }
    }
    showApplyPromotion = dimmer => () => this.setState({ dimmer, openApplyPromotion: true })
    closeApplyPromotion = () => this.setState({ openApplyPromotion: false, error: null })

    handleApplyForPromotion() {
        axios.post('http://localhost:8080/user/applyForPromotion', {
          token: cookies.get('obj').token,
        })
          .then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
              console.log('Cannot Log-Out');
            } else {
              response = response.obj;    
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    render() {
        const { openApplyPromotion, dimmer } = this.state

        return (
            <Modal trigger={<Button color='black' size='small' onClick={this.showApplyPromotion('blurring')}>Apply For Critic</Button>}
                dimmer={dimmer} open={openApplyPromotion} onClose={this.closeApplyPromotion.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 550 }}>
                <Modal.Content>
                    <div className='ApplyPromotion-form'>
                        <Grid>
                            <Grid.Column style={{ maxWidth: 550 }}>
                              
                            <Header as='h2' color='grey' textAlign='center'>
                                    Apply For Critic
                                </Header>
                                <Message>
                                    Are you sure you want to Apply? <br/>
                                   Please read the document carefully before applying
                                </Message>
                                <Form size='large'>
                                        <Button color='black' fluid size='large' onClick={(event, data) => this.handleApplyPromotion()}>Apply</Button>
                                    
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default ApplyPromotionModal;