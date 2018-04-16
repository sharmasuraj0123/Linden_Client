import React from 'react'
import { Card } from 'semantic-ui-react'

const FeaturedCard = () => (
  
    <Card centered style={{ width: 100,height: 200, verticalAlign: 'top' } }
      image={require("../images/certifiedmovie2.jpg") }
      header='Gandhi'
      meta = 'Score: 90'
    />
)

export default FeaturedCard;
