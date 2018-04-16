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
