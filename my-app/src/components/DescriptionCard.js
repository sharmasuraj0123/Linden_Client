import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const DescriptionCard = () => (
  <Card>
    <Image src={require('../images/leaves.png') }/>
    <Card.Content>
      <Card.Header>Premium Fall Collection</Card.Header>
     
      <Card.Description>Movies and TV shows are Certified Fresh 
          with a steady lindoometer of 75% or higher after a set amount of reviews 
          (80 for wide-release movies, 40 for limited-release movies, 20 for TV shows), 
          including 5 reviews from Top Critics.</Card.Description>
    </Card.Content>
    
  </Card>
)

export default DescriptionCard
