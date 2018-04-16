<<<<<<< HEAD
import React, {Component}from 'react'
import  { Card, Icon, Image, Header,Segment } from 'semantic-ui-react'

class DescriptionCard extends Component {
  render() {
    return (
      <div style={{  width: 100,height: 100, fontSize:'16px'}}>
      <Image src={this.props.imagesrc} style={{ width: 100,height: 100 }} centered/>
     <p></p>
    </div>
    );
  }
}

export default DescriptionCard
=======
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const DescriptionCard = () => (
  <Card style={{ width: 200, height: 250, fontSize: '14px' }} >
    <Image src={require('../images/leaves.png')} style={{ width: 100, height: 100 }} />
    <Card.Content>
      <Card.Header >Premium Fall Collection</Card.Header>
      <Card.Description>Movies and TV shows are Premium Fall
          with a steady lindoometer of 75% or higher after a set amount of reviews
          including 5 reviews from Top Critics.</Card.Description>
    </Card.Content>

  </Card>
)

export default DescriptionCard;
>>>>>>> bff03d2858dd942b78022353e93f26bae49159f7
