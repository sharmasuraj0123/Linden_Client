import React from 'react'
import  { Card, Icon, Segment } from 'semantic-ui-react'



const FeaturedCard = () => (
<Segment>
  <Card style={{ width: 800}}
    image={require("./images/Logo.png")}
    header='Featured' 
  />
  </Segment>
)

export default FeaturedCard;