import React from 'react'
import { Card } from 'semantic-ui-react'

const FeaturedCard = () => (
  <Card centered style={{ width: 195, height: 330, verticalAlign: 'top' }}
    image={require("../images/certifiedmovie2.jpg")}
    header='Gandhi'
  />
)

export default FeaturedCard;
