import React, { Component } from 'react';
import { Card,Button,Image, Icon, Rating } from 'semantic-ui-react';

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')


class ReviewCard extends Component {
    render() {
        return (
            <Card width={75}>
                <Card.Content>  
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>  
                    <Rating defaultRating={3} maxRating={5} disabled />
                    </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Card.Content description={description} />   
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button  color='black'>Report</Button> 
                    </div>          
                </Card.Content>
          </Card>
        );
    }
}


export default ReviewCard;