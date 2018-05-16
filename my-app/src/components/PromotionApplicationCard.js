import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import ApprovePromotionModal from '../components/ApprovePromotionModal';

const cookies = new Cookies();




class PromotionApplicationCard extends Component {

  
  render() {
    return (
      this.props.applications.map((application) =>
        <Card>
          <Card.Content>
            <Card.Header href= {'user/' + application.userId}>
            Name: {application.firstName} {application.lastName}
        </Card.Header>
            <Card.Meta>
            Applied For: {application.promotionType}
        </Card.Meta>
            <Card.Description>
            <strong>Reason: </strong>{application.reason}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
             <ApprovePromotionModal application = {application}/>
              <Button basic color='red'>Decline</Button>
            </div>
          </Card.Content>
        </Card>
      )
    );
  }
}




export default PromotionApplicationCard;